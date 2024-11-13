import { ArrowDown, Laptop, MoveDown } from "lucide-react";
import Globe3D from "./Globe3D";

export default function BentoGrid() {
  return (
    <div className="relative bg-white py-12 text-black dark:bg-primary-900 dark:text-white">
      <div className="transalent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-12 dark:bg-primary-900">
        {/* <Globe3D /> */}
        <img
          src="https://giftechies.com/frontend/assets/images/brain.png"
          alt=""
        />
      </div>
      <div className="section-container grid grid-cols-4 grid-rows-4 gap-6">
        <div className="col-span-1 row-span-1 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="gradient-color col-span-2 row-span-2 flex flex-col items-center gap-4 rounded-lg p-10 text-white">
          <p className="mt-4 text-lg tracking-widest">GifTechies</p>
          <p className="text-center text-4xl font-semibold tracking-wide">
            Your Digital Success Starts with Our Expertise
          </p>
          <MoveDown className="animate-bounce" />
          <button className="rounded-full border-2 px-4 py-2">
            View All Services
          </button>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-1 space-y-2 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-end gap-2 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-2 flex flex-col justify-end gap-2 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs. Build fast, scalable, and responsive websites
            tailored to meet your business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-2 flex flex-col justify-end overflow-hidden rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs. Build fast, scalable, and responsive websites
            tailored to meet your business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg p-10 shadow-xl dark:bg-primary-800">
          <Laptop size={26} className="text-red-500" />
          <h3 className="my-3 text-xl font-medium">Web Development</h3>
          <p className="text-sm tracking-wider text-gray-400">
            Build fast, scalable, and responsive websites tailored to meet your
            business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
