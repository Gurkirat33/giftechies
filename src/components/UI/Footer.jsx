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
    <footer className="relative bg-primary-900 text-white pb-8 pt-24">
      <div className="section-container bg-[#282a2e] px-8 pt-16 pb-12 relative rounded-2xl">
        <div className="z-50 absolute left-0 bg-primary-900  pr-4 pb-4 flex flex-col gap-1 top-0">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="size-8 bg-tertiary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="absolute bg-primary-900 top-36 rounded-br-3xl z-1 w-12 h-16 left-0"></div>

        <div className="grid grid-cols-12 gap-8 pl-24 pr-16">
          <div className="col-span-4 flex flex-col gap-6">
            <p className="text-4xl font-semibold">
              Do you like <br /> what you see?
            </p>
            <button className="px-4 py-2 bg-tertiary-600 text-white w-fit rounded-lg">
              Start Project
            </button>
          </div>
          <div className="col-span-2">
            <h3 className="text-base font-semibold mb-3">Learn</h3>
            <ul className="space-y-2  text-gray-300">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-base font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="col-span-4  p-8 -mt-32 mb-12 bg-primary-900"
            style={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            }}
          >
            <form>
              <h3 className="text-3xl font-semibold mb-3">Get in touch</h3>
              <div className="flex flex-col gap-3 mt-5">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="bg-[#181B1F] p-3  rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <input
                  type="number"
                  id="number"
                  placeholder="Phone Number"
                  className="bg-[#181B1F] p-3  rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <textarea
                  placeholder="Message"
                  type="text"
                  rows={2}
                  id="message"
                  className="bg-[#181B1F] p-3 rounded-lg"
                />
              </div>

              <button className="mt-6 px-4 py-2 bg-tertiary-600 text-white w-fit rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="px-12 pt-6 pb-8 flex justify-between">
          <div className="flex gap-8">
            <div className="flex gap-5 items-end">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-india.svg"
                alt="img"
              />
              <p className="max-w-52">
                PC Tower 2nd Floor, Gill Rd, Opposite GNE College, Ludhiana
                141006 - INDIA
              </p>
            </div>
            <div className="flex gap-5 items-end">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-usa.svg"
                alt="img"
              />
              <p className="max-w-52">
                1111 Charlene Lane, Schaumburg, IL 60193, United States
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <IndiaFlagSvg />
                <p>+91 95920 00818</p>
              </div>
              <div className="flex items-center gap-3">
                <UsaFlagSvg />
                <p>+1 (630) 523-0006</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 ">
                <Mail />
                <p> info@giftechies.com</p>
              </div>
              <div className="flex gap-2  mt-4">
                <PhoneCall />
                <p>skype.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs px-12">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-lg">Webteckies.</span>
            <span className="text-gray-300">© MadeByShape Ltd 2024</span>
            <span>|</span>
            <span className="text-gray-300">Company Reg Number 10529058</span>
          </div>
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
