import { Code, Coffee, Lightbulb, Rocket, TestTube } from "lucide-react";
import SectionHeader from "./SectionHeading";

const ProcessBox = ({ step, index, isLast }) => {
  const { icon: Icon, title, description } = step;

  return (
    <div className="relative group">
      {!isLast && (
        <div
          className={`${
            index % 2 === 0 ? "rotate-[30deg]" : "-rotate-[30deg]"
          } absolute top-1/2 left-full w-9 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 
          hidden md:block z-0`}
        >
          <div
            className="absolute top-0 right-0 w-3 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 
            rotate-45 origin-right"
          />
          <div
            className="absolute bottom-0 right-0 w-3 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 
            -rotate-45 origin-right"
          />
        </div>
      )}

      <div
        className={`relative bg-[#282a2e] p-6 rounded-xl border border-gray-700
        
        ${index % 2 === 0 ? "" : "mt-20"}`}
      >
        <div
          className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 
          rounded-full flex items-center justify-center text-sm font-bold shadow-lg
          border-2 border-[#282a2e]"
        >
          {index + 1}
        </div>

        <div className="flex flex-col gap-4 items-start">
          <div className="p-3 rounded-lg">
            <Icon
              className="size-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 
              "
            />
          </div>

          <div className="space-y-2">
            <h3
              className="text-lg font-semibold text-white group-hover:text-blue-400 
              transition-colors duration-300"
            >
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const steps = [
    {
      icon: Coffee,
      title: "Meet & Plan",
      description: "Understanding your vision and creating a roadmap.",
    },
    {
      icon: Lightbulb,
      title: "Design Strategy",
      description: "Crafting unique solutions aligned with your brand.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Bringing your vision to life with modern tech.",
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Ensuring flawless performance across platforms.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deployment with continued support for success.",
    },
  ];

  return (
    <div className="bg-primary-900 text-white py-20">
      <div className="section-container">
        <SectionHeader
          heading="How It Works"
          description="Check out our process"
          className="mb-16"
        />

        <div className="flex flex-col md:flex-row gap-12 md:gap-10 items-start relative px-4">
          {steps.map((step, index) => (
            <ProcessBox
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
          <div className="flex mt-12 gap-12">
            <div
              className={`bg-[#282a2e] p-6 rounded-lg h-fit flex gap-3 items-center`}
            >
              <Coffee />
              <div>
                <p>Meet & Plan</p>
                <p>Understanding your vision and creating a roadmap.</p>
              </div>
            </div>
            <div
              className={`bg-[#282a2e] p-6 rounded-lg h-fit flex gap-3 items-center`}
            >
              <Coffee />
              <div>
                <p>Meet & Plan</p>
                <p>Understanding your vision and creating a roadmap.</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 flex justify-end">
            <div
              className={`bg-[#282a2e] p-6 rounded-lg h-fit w-fit flex gap-3 items-center`}
            >
              <Coffee />
              <div>
                <p>Meet & Plan</p>
                <p>Understanding your vision and creating a roadmap.</p>
              </div>
            </div>
          </div>
          <div className="flex mt-12 gap-12">
            <div
              className={`bg-[#282a2e] p-6 rounded-lg h-fit flex gap-3 items-center`}
            >
              <Coffee />
              <div>
                <p>Meet & Plan</p>
                <p>Understanding your vision and creating a roadmap.</p>
              </div>
            </div>
            <div
              className={`bg-[#282a2e] p-6 rounded-lg h-fit flex gap-3 items-center`}
            >
              <Coffee />
              <div>
                <p>Meet & Plan</p>
                <p>Understanding your vision and creating a roadmap.</p>
              </div>
            </div>
          </div>
        </div> */
}
