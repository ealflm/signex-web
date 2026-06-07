import { Hero } from "@/app/components/home/hero";
import { Features } from "@/app/components/home/features";
import { Services } from "@/app/components/home/services";
import { ResortsSlider } from "@/app/components/home/resorts-slider";
import { Testimonial } from "@/app/components/home/testimonial";
import { Faq } from "@/app/components/home/faq";
import { Cta } from "@/app/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="home-a_rest-content">
        <Features />
        <Services />
        <ResortsSlider />
        <Testimonial />
        <Faq />
        <Cta />
      </div>
    </>
  );
}
