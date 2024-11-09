import React from "react";
import Link from "next/link";
import {
  IndiaFlagSvg,
  links,
  socialLinks,
  UsaFlagSvg,
} from "../data/FooterData";
import { Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-primary-900 px-4 pb-8 pt-24 text-white sm:px-8">
      <div className="section-container relative rounded-2xl bg-primary-800 pb-12 pt-16">
        <div className="absolute left-0 top-0 z-50 flex flex-col gap-1 bg-primary-900 pb-4 pr-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="flex size-8 items-center justify-center rounded-full bg-tertiary-500 text-white transition-transform duration-200 hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="z-1 absolute left-0 top-36 h-16 w-12 rounded-br-3xl bg-primary-900"></div>

        <div className="grid grid-cols-12 gap-6 pr-1 sm:pl-14 sm:pr-8 lg:pl-20 lg:pr-12 xl:gap-8 xl:pl-20 xl:pr-16">
          <div className="col-span-12 flex flex-col gap-6 pl-14 sm:pl-0 md:col-span-6 lg:order-1 lg:col-span-4">
            <p className="text-3xl font-semibold lg:text-4xl">
              Do you like <br /> what you see?
            </p>
            <button className="w-fit rounded-lg bg-tertiary-600 px-4 py-2 text-white">
              Start Project
            </button>
          </div>
          <div
            className="col-span-12 mb-12 bg-primary-900 p-8 md:col-span-6 md:-mt-32 lg:order-4 lg:col-span-4"
            style={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            }}
          >
            <form>
              <h3 className="mb-3 text-2xl font-semibold lg:text-3xl">
                Get in touch
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="rounded-lg bg-[#181B1F] p-3"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <input
                  type="number"
                  id="number"
                  placeholder="Phone Number"
                  className="rounded-lg bg-[#181B1F] p-3"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <textarea
                  placeholder="Message"
                  type="text"
                  rows={2}
                  id="message"
                  className="rounded-lg bg-[#181B1F] p-3"
                />
              </div>

              <button className="mt-6 w-fit rounded-lg bg-tertiary-600 px-4 py-2 text-white">
                Submit
              </button>
            </form>
          </div>
          <div className="col-span-6 text-center sm:text-start lg:order-2 lg:col-span-2">
            <h3 className="mb-3 text-base font-semibold">Learn</h3>
            <ul className="space-y-2 text-gray-300">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 text-center sm:text-start lg:order-3 lg:col-span-2">
            <h3 className="mb-3 text-base font-semibold">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pb-8 lg:flex-row lg:px-12 xl:pt-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:pl-14 lg:w-fit lg:gap-8 lg:pl-0">
            <div className="flex flex-1 flex-col items-center sm:items-start lg:gap-3 xl:flex-row xl:items-end xl:gap-5">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-india.svg"
                alt="img"
                className="size-36 lg:mx-0 lg:h-full lg:w-full"
              />
              <p className="max-w-52 text-sm lg:text-base">
                PC Tower 2nd Floor, Gill Rd, Opposite GNE College, Ludhiana
                141006 - INDIA
              </p>
            </div>
            <div className="sm:item-start flex flex-1 flex-col items-center text-center lg:gap-3 xl:flex-row xl:items-end xl:gap-5 xl:text-start">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-usa.svg"
                alt="img"
                className="size-36 lg:mx-0 lg:h-full lg:w-full"
              />
              <p className="max-w-52 text-sm lg:text-base">
                1111 Charlene Lane, Schaumburg, IL 60193, United States
              </p>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-1 flex-col gap-3 sm:flex-row sm:pl-14 lg:mt-0 lg:w-fit lg:flex-none lg:pl-4 xl:gap-12">
            <div className="flex flex-1 flex-col items-center gap-2 sm:items-start lg:items-center">
              <div className="flex items-center gap-3">
                <IndiaFlagSvg />
                <p>+91 95920 00818</p>
              </div>
              <div className="flex items-center gap-3">
                <UsaFlagSvg />
                <p>+1 (630) 523-0006</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 sm:items-start">
              <div className="flex items-center gap-3">
                <Mail />
                <p> info@giftechies.com</p>
              </div>
              <div className="flex gap-2">
                <PhoneCall />
                <p>skype.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row sm:px-12">
          <p className="text-lg font-semibold">Webteckies</p>
          <div className="flex items-center space-x-4 text-gray-300">
            <Link href="/web-design-manchester">Web Design Manchester</Link>
            <span>|</span>
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
