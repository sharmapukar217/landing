import { Link } from "@remix-run/react";
import { siteConfig } from "@/utilities/config";

export const Hero = () => {
  return (
    <main className="min-h-screen bg-dark-1 not-prose text-balance">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-[76px] pointer-events-none"></div>
        <div className="py-12 md:py-20">
          <div className="text-center pb-10 md:pb-16 max-w-5xl mx-auto">
            {/* heading */}
            <div className="text-4xl md:text-7xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <h1 className="text-primary font-dancing-script">{siteConfig.title}</h1>
              <div className="inline-flex text-2xl md:text-5xl">
                <div className=" max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900">
                  A short and{" "}
                  <div className="inline relative whitespace-nowrap text-blue-600">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute left-0 top-2/3 h-[0.58em] w-full fill-secondary">
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="relative">sweet desc</span>
                  </div>{" "}
                  for small businesses.
                </div>
              </div>
            </div>

            {/* subheading */}
            <div className="max-w-3xl mx-auto">
              <p className="text-md font-semibold text-gray-foreground mb-6">
                {siteConfig.descriptionAlt}
              </p>
            </div>

            {/* subscription form */}
            <form
              method="post"
              action="/?/subscribe"
              className="w-full relative max-w-sm flex mx-auto mt-20">
              <div className="absolute -top-[1.5px] left-4 rounded-full h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-foreground">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
              </div>

              <input
                type="email"
                name="email"
                placeholder="hi@email.com"
                className="rounded-full h-12 pl-11 pr-28 bg-dark-2 focus:outline-none hover:bg-dark-3/80 focus:ring-2 focus:ring-gray-foreground"
                required
              />
              <div className="absolute h-full -right-[1.15rem] p-1.5">
                <button
                  type="submit"
                  className="text-sm font-semibold bg-primary text-white rounded-full h-full px-3 disabled:cursor-not-allowed disabled:opacity-80">
                  Subscribe
                </button>
              </div>
            </form>

            {/* click me mouse */}
            <Link
              to="#features"
              className="group h-12 w-6 rounded-xl border border-dark-3 hover:border-gray-foreground transition-colors duration-100 absolute -bottom-12 md:-bottom-5">
              <div className="w-2 h-2 rounded-full border border-dark-3 group-hover:border-gray-foreground mx-auto mt-2 group-hover:mt-8 transition-all duration-400" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
