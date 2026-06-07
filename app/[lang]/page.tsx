import { notFound } from "next/navigation";
import { hasLocale } from "@/app/lib/i18n-config";
import { getDictionary } from "./dictionaries";
import { Hero } from "@/app/components/home/hero";
import { Features } from "@/app/components/home/features";
import { ResortsCollection } from "@/app/components/home/resorts-collection";
import { Services } from "@/app/components/home/services";
import { ResortsSlider } from "@/app/components/home/resorts-slider";
import { Testimonial } from "@/app/components/home/testimonial";
import { Faq } from "@/app/components/home/faq";
import { Cta } from "@/app/components/home/cta";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound(); // also narrows `lang` to Locale for getDictionary
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <div className="home-a_rest-content">
        <Features dict={dict.features} />
        <ResortsCollection />
        <Services />
        <ResortsSlider />
        <Testimonial />
        <Faq />
        <Cta />
      </div>
    </>
  );
}
