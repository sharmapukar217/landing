import testimonial1 from "@/assets/testimonial1.png";
import testimonial2 from "@/assets/testimonial2.png";
import testimonial3 from "@/assets/testimonial3.png";
import { siteConfig } from "@/utilities/config";
import { Logo } from "../Logo";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial2,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="fill-gray-foreground"
    width="35px">
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
  </svg>
);

export const Testimonials = () => (
  <section
    id="testimonials"
    className="w-full flex justify-center py-12 md:py-48 bg-dark-1 relative -scroll-mt-[100px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      className="bg-dark-1 absolute top-0 -scale-x-[1]">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-dark-2"></path>
    </svg>

    <div className="flex flex-col w-full lg:w-[1150px] justify-center z-10">
      <div className="text-lg text-secondary tracking-wider font-bold uppercase text-center mb-6">
        Testimonials
      </div>
      <div className="text-white text-4xl xl:text-5xl font-bold tracking-normal text-center mb-16 px-8 sm:px-24 md:px-48">
        <div className="inline-flex items-center justify-center space-x-3">
          <span>People like you love</span>
          <Logo href="/" className="inline" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 border border-solid border-[rgb(255,255,255,0.07)] rounded-xl bg-dark-3 flex flex-col px-6 py-4 hover:shadow-2xl"
            key={`${testimonial.customerName}-${index}`}>
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="text-white text-base leading-relaxed">{testimonial.content}</div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial.image} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="text-white text-base leading-relaxed font-medium">
                  {testimonial.customerName}
                </div>
                <div className="text-gray-foreground font-semibold text-base">
                  {testimonial.customerTitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
