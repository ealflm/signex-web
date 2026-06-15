# syntax=docker/dockerfile:1
# Production image for signex-web (Next.js 16, App Router, proxy.ts middleware).
# Built around Next's `output: "standalone"` (see next.config.ts) — multi-stage so the final
# image carries only the runtime server, its traced node_modules, the static chunks and the
# vendored public/ assets (Webflow CSS/JS/images/videos). Node 20 matches the dev environment.

# ── deps: install the full dependency tree from a clean, reproducible lockfile ─────────────
FROM node:20-alpine AS deps
# libc6-compat: glibc shim some Node tooling expects on Alpine (musl).
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── builder: compile the app and emit the standalone server ────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ── runner: minimal, non-root production image ─────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# The standalone server reads PORT/HOSTNAME at runtime; bind every interface inside the container.
ENV PORT=2051
ENV HOSTNAME=0.0.0.0

# Drop root: run the server as an unprivileged user.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# standalone = server.js + minimal node_modules; static + public are added on top (standalone
# intentionally omits them). public/ holds all the vendored Webflow assets the site serves.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 2051
CMD ["node", "server.js"]
