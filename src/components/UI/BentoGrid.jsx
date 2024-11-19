import { ArrowRight, Laptop, MoveDown } from "lucide-react";
import Link from "next/link";
import gridData from "../data/gridData";
import BgGrid from "./BgGrid";

const getGridClasses = (index) => {
  if (index === 1)
    return "col-span-2 row-span-2 gradient-color flex flex-col items-center gap-4";
  if (index === 6 || index === 7)
    return "col-span-1 row-span-2 flex flex-col justify-end gap-2";
  return "col-span-1 row-span-1";
};

export default function BentoGrid() {
  return (
    <div className="relative py-12">
      <BgGrid />
      <div className="transalent absolute left-1/2 top-1/2 z-10 flex size-80 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-lg">
        <img
          src="https://giftechies.com/frontend/assets/images/cup-man.gif"
          alt=""
          className=""
        />
      </div>
      <div className="section-container grid grid-cols-4 grid-rows-4 gap-6">
        {gridData.map((item, index) => {
          if (item.isSpecial) {
            return (
              <div
                key={index}
                className={`${getGridClasses(index)} rounded-lg p-10 text-tertiary-text relative`}
              >
                <p className="mt-4 text-lg tracking-widest">{item.title}</p>
                <p className="text-center text-4xl font-semibold tracking-wide">
                  {item.description}
                </p>
                <MoveDown className="animate-bounce" />
                <Link href="/services" className="mt-4 rounded-lg border border-white px-6 py-3">
                  View All Services
                </Link>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`${getGridClasses(index)} relative rounded-lg bg-primary-light px-8 py-7 shadow-xl`}
            >
              {item.icon && <item.icon size={26} className="text-red-500" />}
              <h3 className="my-3 text-xl font-medium">{item.title}</h3>
              <p className="text-sm tracking-wider text-secondary-light">
                {item.description}
              </p>
              <Link href={"/"} className="group mt-4 flex items-center gap-2">
                <ArrowRight
                  color="red"
                  size={20}
                  className="-rotate-45 cursor-pointer transition-all duration-300 group-hover:rotate-0"
                />
                <span className="">View More</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
