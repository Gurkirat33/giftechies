import ProfileAvatars from "../ReviewCard";
import TechStackSlider from "../TechStack";
import Globe3D from "./Globe3D";

export default function BentoGrid() {
  return (
    <div className="relative bg-white py-12 text-black dark:bg-primary-900 dark:text-white">
      <div className="transalent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-900">
        <Globe3D />
      </div>
      <div className="section-container grid grid-cols-4 grid-rows-4 gap-6">
        <div className="col-span-1 row-span-2 rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
          <div className="flex h-full flex-col justify-between">
            <h2 className="text-4xl font-bold">Work With GifTechies</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="gradient-color col-span-2 row-span-2 flex flex-col items-center gap-4 rounded-lg p-10 text-white">
          <p className="text-lg tracking-widest">GifTechies</p>
          <p className="text-center text-6xl font-semibold tracking-wide">
            Your AI Prompt Companion
          </p>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
          Lorem ipsum dolor sit.
        </div>
        <div className="col-span-1 row-span-1 space-y-2 rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
          <p className="text-center text-4xl font-semibold">100+</p>
          <p className="py-2 text-center">Project Created</p>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg bg-slate-200 p-10 text-center dark:bg-primary-800">
          <p className="gradient-color-text mb-2 text-5xl font-medium">5K</p>
          <p>Happy Users</p>
          <ProfileAvatars />
        </div>
        <div className="customer-support-image col-span-1 row-span-2 flex flex-col justify-end gap-2 rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
          <p className="text-2xl font-semibold">Dedicated Support</p>
          <p>Helping you every step of the way with fast, reliable solutions</p>
        </div>
        <div className="support-image col-span-1 row-span-2 flex flex-col justify-end gap-2 rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
          <p className="text-2xl font-semibold">Trusted Partners</p>
          <p>
            Building lasting relationships through reliability and excellence.
          </p>
        </div>
        <TechStackSlider />
        <div className="col-span-1 row-span-1 grid place-items-center rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
          <button className="gradient-color rounded-lg px-6 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
