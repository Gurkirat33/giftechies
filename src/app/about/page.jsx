import AboutMission from "@/components/UI/AboutMission";
import { SectionHeading } from "@/components/UI/SectionHeading";
import TeamSection from "@/components/UI/TeamSection";

import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team" },
  ];

  const features = [
    { title: "Creative Solutions" },
    { title: "Quality Code" },
    { title: "24/7 Support" },
  ];



  return (
    <div className="bg-primary text-secondary">
      <div className="section-container pt-28">
        <SectionHeading title={"Where Innovation Meets Excellence"} description={"Transforming visions into exceptional digital experiences with precision and creativity."}/> 

        <section className="w-full py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
              <div className="absolute right-0 z-40 rounded-lg bg-primary-light p-6 text-center">
                <p className="text-2xl text-secondary">13</p>
                <p className="text-xl text-secondary">Years</p>
              </div>
              <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl">
                <Image
                  src="/about3.jpeg"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
              <div className="relative col-span-1 row-span-1 mt-12 overflow-hidden rounded-2xl">
                <Image
                  src="/about1.jpeg"
                  width={200}
                  height={300}
                  alt="Creative process"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl">
                <Image
                  src="/about2.jpeg"
                  alt="Design work"
                  className="h-full w-full object-cover"
                  width={200}
                  height={300}
                />
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="mb-3 text-sm font-semibold text-secondary">
                  Why Choose Us
                </h4>
                <h2 className="mb-8 text-4xl font-semibold text-secondary">
                  Crafting Digital Excellence with Innovation and Precision
                </h2>

                <div className="mb-8 grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="rounded-xl pr-4">
                      <h3 className="mb-1 text-3xl font-bold text-secondary">
                        {stat.number}
                      </h3>
                      <p className="text-sm font-medium text-secondary-light">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mb-8 leading-relaxed text-secondary-light">
                  Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. Class onlin aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos only himenaeos. Praesent nec
                  neque at dolor venenatis consectetur eu quis ex. the Donec
                  lacinia placerat felis non aliquam.Mauris nec justo vitae ante
                  auctor tol euismod sit amet non ipsum. Praesent commodo at
                  massa eget suscipit. Utani vitae enim velit. Ut ut posuere
                  orci, id dapibus odio.
                </p>

                <div className="flex flex-wrap gap-4">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className="rounded-lg border border-border bg-primary-light px-6 py-3 text-secondary"
                    >
                      {feature.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutMission/>
        {/* Team Section */}
        <TeamSection />
      </div>
    </div>
  );
}
