import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactData = [
  {
    icon: Phone,
    text: "Phone",
    description: "+01 234 567 8902",
  },
  {
    icon: Mail,
    text: "Email",
    description: "sayhello@example.me",
  },
  {
    icon: MapPin,
    text: "Address",
    description: "123 Business Street, City, Country",
  },
];

const ContactPage = () => {
  return (
    <div className="flex min-h-screen items-center bg-white p-8 py-32 text-black dark:bg-primary-900 dark:text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="my-auto space-y-8">
          <div>
            <h1 className="mb-4 text-4xl font-medium dark:text-white md:text-5xl lg:leading-[1.1]">
              It&apos;s time to talk about your{" "}
              <span className="gradient-color-text"> project.</span>
            </h1>
            <p className="text-gray-400">
              Let&apos;s embark on creative journey together by shaping a visual
              narrative of your brand in the crowded digital space.
            </p>
          </div>

          <div className="space-y-6">
            {contactData.map((item) => (
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{item.text}</div>
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-primary-800 p-8">
          <form>
            <h3 className="mb-3 text-2xl font-semibold lg:text-3xl">
              Get in touch
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="rounded-lg bg-[#181B1F] p-3 focus:outline-none"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="rounded-lg bg-[#181B1F] p-3 focus:outline-none"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <input
                type="number"
                id="number"
                placeholder="Phone Number"
                className="rounded-lg bg-[#181B1F] p-3 focus:outline-none"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <textarea
                placeholder="Write Your Requirements"
                type="text"
                rows={4}
                id="message"
                className="rounded-lg bg-[#181B1F] p-3 focus:outline-none"
              />
            </div>

            <button className="gradient-color mt-6 w-fit rounded-lg px-4 py-2 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
