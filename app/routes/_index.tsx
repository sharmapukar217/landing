import { FAQ } from "@/components/FQA";
import { Header } from "@/components/Header";
import { Brands } from "@/components/brands";
import { ContactUs } from "@/components/sections/contact-us";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { siteConfig } from "@/utilities/config";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: siteConfig.title }, { name: "description", content: siteConfig.description }];
};

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Features />

      <Testimonials />

      <Brands />

      <FAQ />
      <ContactUs />

      <Footer />
    </>
  );
}
