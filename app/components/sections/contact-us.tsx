export const ContactUs = () => {
  return (
    <section id="contact-us" className="relative px-3 pt-24 pb-16 bg-dark-1 overflow-hidden">
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 text-md text-secondary tracking-wider font-bold uppercase text-center">
            Want our service?
          </p>
          <h2 className="mb-16 text-white text-4xl xl:text-5xl font-bold tracking-normal text-center">
            Contact Us 😍
          </h2>
          <form className="mb-11">
            <div className="block md:w-3/4 space-y-1">
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-gray-foreground cursor-pointer">
                Full name
                <sup className="text-[red] ml-1">*</sup>
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="fullName"
                placeholder="i.e: John Doe"
                className="w-full rounded-lg h-11 px-4 py-2 text-sm font-semibold placeholder:text-gray-foreground outline-none focus:ring-2 focus:ring-gray-foreground"
              />
            </div>

            <div className="flex flex-col w-full space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4 mt-6">
              <div className="w-full space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-foreground cursor-pointer">
                  Email Address
                  <sup className="text-[red] ml-1">*</sup>
                </label>
                <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  placeholder="i.e: hi@gmail.com"
                  className="w-full rounded-lg h-11 px-4 py-2 text-sm font-semibold placeholder:text-gray-foreground outline-none focus:ring-2 focus:ring-gray-foreground"
                />
              </div>

              <div className="w-full space-y-1">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-semibold text-gray-foreground cursor-pointer inline-flex items-center">
                  Phone Number
                  <small className="text-gray-foreground ml-1">(optional)</small>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="i.e: John Doe"
                  className="w-full rounded-lg h-11 px-4 py-2 text-sm font-semibold placeholder:text-gray-foreground outline-none focus:ring-2 focus:ring-gray-foreground"
                />
              </div>
            </div>

            <div className="block md:w-3/5 space-y-1 mt-6">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-gray-foreground cursor-pointer">
                Subject
                <sup className="text-[red] ml-1">*</sup>
              </label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                placeholder="i.e: I want to get service `x` for my business."
                className="w-full rounded-lg h-11 px-4 py-2 text-sm font-semibold placeholder:text-gray-foreground outline-none focus:ring-2 focus:ring-gray-foreground"
              />
            </div>

            <div className="block md:w-3/4 space-y-1 mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-foreground cursor-pointer">
                Message
                <sup className="text-[red]">*</sup>
              </label>
              <textarea
                rows={4}
                id="message"
                name="message"
                placeholder="i.e: Tell something about your business to connect..."
                className="w-full rounded-lg px-4 py-2 text-sm font-semibold placeholder:text-gray-foreground outline-none focus:ring-2 focus:ring-gray-foreground"
              />
            </div>

            <div className="mt-3">
              <button type="submit" className="block bg-primary text-white px-4 py-2 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
