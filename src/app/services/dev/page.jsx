import { Check } from "lucide-react";

export default function Dev() {
  const features = [
    "14 years of experience",
    "97%+ Client Retention",
    "Dedicated 160-man hours",
    "100% On Time Delivery",
    "Multiple Pricing Model",
    "Reporting on daily/weekly/monthly basis",
  ];

  return (
    <div className="min-h-screen bg-white py-32 text-black dark:bg-primary-900 dark:text-white">
      <div className="section-container flex gap-8">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Trust Us</h1>
          <p className="mt-8 text-slate-300">
            GifTechies, a trusted digital transformation company , is here to
            help you enhance efficiency, boost agility, and open new revenue
            streams for your business. Our solutions are tailored to your unique
            needs. We use innovative technologies to revolutionize your business
            operations.
          </p>
          <p className="mt-4 text-xl font-semibold">
            Let us help you grow your business in a sustainable way.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-primary-800">
            <h3 className="text-3xl font-semibold">Request A Proposal</h3>
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    required
                    className="peer w-full rounded-lg bg-gray-700 px-4 py-2 placeholder-transparent focus:outline-none"
                  />
                  <label
                    htmlFor="name"
                    className="absolute -top-3 left-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:bg-gray-900 peer-focus:text-sm"
                  >
                    Full Name *
                  </label>
                </div>

                <div className="relative flex-1">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    required
                    className="peer w-full rounded-lg bg-gray-700 px-4 py-2 placeholder-transparent focus:outline-none"
                  />
                  <label
                    htmlFor="email"
                    className="absolute -top-3 left-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:bg-gray-900 peer-focus:text-sm"
                  >
                    E-mail Address *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative flex-1">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    required
                    className="peer w-full rounded-lg bg-gray-700 px-4 py-2 placeholder-transparent focus:outline-none"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute -top-3 left-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:bg-gray-900 peer-focus:text-sm"
                  >
                    Contact Number *
                  </label>
                </div>

                <div className="relative flex-1">
                  <input
                    type="text"
                    id="company"
                    placeholder=" "
                    className="peer w-full rounded-lg bg-gray-700 px-4 py-2 placeholder-transparent focus:outline-none"
                  />
                  <label
                    htmlFor="company"
                    className="absolute -top-3 left-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:bg-gray-900 peer-focus:text-sm"
                  >
                    Company Name
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="info"
                  rows={4}
                  placeholder=" "
                  className="peer w-full rounded-lg bg-gray-700 px-4 py-2 placeholder-transparent focus:outline-none"
                />
                <label
                  htmlFor="info"
                  className="absolute -top-3 left-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:bg-gray-900 peer-focus:text-sm"
                >
                  Additional Information
                </label>
              </div>

              <div>
                <p className="mb-2 text-sm">Attachment</p>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-800"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                  Select a file
                </button>
              </div>

              <button
                type="submit"
                className="gradient-color w-full rounded-lg py-3 font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
