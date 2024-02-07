const FAQData = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations.",
  },
  {
    question: "How to claim your 25% discount offer?",
    answer:
      "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "How to get support for the product?",
    answer:
      "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
  },
];

export const FAQ = () => (
  <section id="faq" className="relative px-3 pt-[90px] pb-20 bg-dark-2 overflow-hidden scroll-mt-[100px]">
    <div className="absolute -top-10" id="FAQ" />

    <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
      <div className="md:max-w-4xl mx-auto">
        <p className="mb-7 text-md text-secondary tracking-wider font-bold uppercase text-center">
          Have any questions?
        </p>
        <h2 className="mb-16 text-white text-4xl xl:text-5xl font-bold tracking-normal text-center">
          Frequently Asked Questions
        </h2>
        <div className="mb-11 flex flex-wrap -m-1">
          {FAQData.map((item, index) => (
            <div className="w-full p-1" key={index}>
              <FAQBox title={item.question} content={item.answer} defaultOpen={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQBox = (props: { title: string; content: string; defaultOpen?: boolean }) => {
  return (
    <details
      className=" group pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-dark-3 border border-solid border-[rgb(255,255,255,0.07)] shadow-sm mb-4 relative hover:bg-dark-3 cursor-pointer"
      open={props.defaultOpen}>
      <summary className="flex pb-2 items-center">
        <h3 className=" text-white text-lg font-bold tracking-normal pt-3 sm:pt-0 pr-8 sm:pr-0">
          {props.title}
        </h3>

        <div className="ml-auto">
          <svg
            width="28px"
            height="30px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-500 rotate-[270deg] group-open:rotate-[180deg]">
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </summary>
      <div className="text-gray-foreground font-medium pt-4 transition-[max-height] duration-3 overflow-hidden max-h-0 group-open:max-h-96">
        {props.content}
      </div>
    </details>
  );
};
