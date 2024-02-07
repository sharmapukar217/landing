import { AmazonLogo } from "./logos/amazon-logo";
import { DropboxLogo } from "./logos/dropbox-logo";
import { NetflixLogo } from "./logos/netflix-logo";
import { SlackLogo } from "./logos/slack-logo";
import { SpotifyLogo } from "./logos/spotify-logo";
import { StripeLogo } from "./logos/stripe-logo";

export const Brands = () => (
  <section className="py-8 bg-dark-3 w-full relative">
    <div className="px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/">
      <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <div className="flex flex-col">
            <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
              Trusted by brands
            </h2>
            <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondary">
              all over the world
            </h2>
          </div>
        </div>
        <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
          <div className="flex flex-wrap -m-4">
            <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <AmazonLogo />
            </div>
            <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
              <DropboxLogo />
            </div>
            <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
              <NetflixLogo />
            </div>
            <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <StripeLogo />
            </div>

            <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <SpotifyLogo />
            </div>
            <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
              <SlackLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
