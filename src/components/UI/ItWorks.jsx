import { ArrowDownLeftFromCircle, Coffee } from "lucide-react";
import arrowImage from "../../../public/arrow.png";
import Image from "next/image";

export default function Itworks() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-primary-900 dark:text-white">
      <div className="absolute right-20 top-16 max-w-lg">
        <p className="mb-2 text-lg font-semibold">Our Best of Best Work</p>
        <p className="text-sm leading-relaxed">
          Giftechies is a next-generation, dynamic company, solely dedicated at
          providing you turn-key solutions in the area of web development &
          designing. Our team of experts delivers digital solutions that
          actually work & exceed your expectations. We understand the importance
          of portrayal of digital images and come up with something amazing and
          each piece of web solution design for your requirements is done
          keeping in mind your business model, ethics, beliefs and image. Our
          strong belief in on-time delivery and cost-efficiency has inspired us
          to offer state-of- the-art web design & development services to global
          clients.
        </p>
      </div>
      <div className="absolute left-14 top-[24rem]">
        <img
          src="https://giftechies.com/frontend/assets/images/brain.png"
          alt=""
          className="duration-200 dark:grayscale dark:hover:grayscale-0"
        />
      </div>
      <div className="section-container py-16">
        <p className="text-start text-4xl">The Momentum Process</p>
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="relative mr-auto mt-12 flex max-w-xs gap-4">
            <div className="absolute -bottom-10 -right-8">
              <Image
                src={arrowImage}
                alt=""
                className="size-16 -rotate-[20deg]"
                height={16}
                width={16}
              />
            </div>
            <div>
              <Coffee size={48} />
            </div>
            <div>
              <h5 className="text-xl font-semibold">Meet</h5>
              <p className="text-[15px]">
                We don’t just complete projects, we understand your business
                needs and offer result-oriented solutions that suit your online
                business and maximize your ROI.
              </p>
            </div>
          </div>
          {/* 2nd step */}
          <div className="relative ml-96 mt-12 flex max-w-xs gap-4">
            <div className="absolute -bottom-10 -right-12">
              <Image
                src={arrowImage}
                alt=""
                className="size-16 -rotate-[20deg]"
                height={16}
                width={16}
              />
            </div>
            <div>
              <Coffee size={48} />
            </div>
            <div>
              <h5 className="text-xl font-semibold">Plan</h5>
              <p className="text-[15px]">
                Whether it is website design, custom coding or development, we
                know the importance of planning and brainstorming to ensure you
                are given with the best.
              </p>
            </div>
          </div>
          {/* 3rd step */}
          <div className="relative ml-[48rem] mt-12 flex max-w-xs gap-4">
            <div className="absolute -bottom-16 -left-12 rotate-[100deg]">
              <Image
                src={arrowImage}
                alt=""
                className="size-16 rotate-[20deg]"
                height={16}
                width={16}
              />
            </div>
            <div>
              <Coffee size={48} />
            </div>
            <div>
              <h5 className="text-xl font-semibold">Design & Development</h5>
              <p className="text-[15px]">
                We expand on the plan to develop a unique, classy, and visually
                appealing website and revising the possibilities until a single,
                clear solution emerges.
              </p>
            </div>
          </div>
          {/* 4th step */}
          <div className="relative ml-96 mr-auto mt-12 flex max-w-xs gap-4">
            <div className="absolute -bottom-16 -left-12 rotate-[100deg]">
              <Image
                src={arrowImage}
                alt=""
                className="size-16"
                height={16}
                width={16}
              />
            </div>
            <div>
              <Coffee size={48} />
            </div>
            <div>
              <h5 className="text-xl font-semibold">Testing</h5>
              <p className="text-[15px]">
                Our projects undergo stringent testing sessions to ensure the
                website works great on different screen sizes, like smartphones,
                tablets and laptops.
              </p>
            </div>
          </div>
          {/* 5th step */}
          <div className="mr-auto mt-12 flex max-w-xs gap-4">
            <div>
              <Coffee size={48} />
            </div>
            <div>
              <h5 className="text-xl font-semibold">Launch</h5>
              <p className="text-[15px]">
                Now that the solution has been clearly designed, we’ll take your
                site live to the world by doing all little things that need to
                be done to launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
