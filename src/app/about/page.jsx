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

  const storyContent = [
    {
      title: "Our Story",
      description:
        "From humble beginnings to industry leadership, our journey has been defined by passion and innovation. We've spent over a decade perfecting our craft and building lasting relationships with clients worldwide.",
      image:
        "https://imgs.search.brave.com/SIkDKuF4ZchFcP6xRnVmG5t_frrvl9rDQXFb4BmOXWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VzYW5ncmVlbmVj/b3B5d3JpdGVyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/My8wMS9wZXhlbHMt/cGhvdG8tMzgxMTA4/Mi5qcGVn",
    },
    {
      title: "Our Mission",
      description:
        "We're dedicated to transforming businesses through cutting-edge digital solutions. Our mission is to empower organizations with technology that drives growth and creates meaningful impact.",
      image:
        "https://imgs.search.brave.com/zEoPVaAU4TBIytfUeLHuOKIws8lDP2vzky8bKeWaImo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvcHJpY2lu/Zy1wYWdlLWRlc2ln/bi1leGFtcGxlcy5q/cGVn",
    },
    {
      title: "Our Vision",
      description:
        "We envision a world where digital experiences transcend the ordinary, where every interaction leaves an indelible mark on the user's journey. This vision drives us to constantly innovate and push boundaries.",
      image:
        "https://imgs.search.brave.com/9RVX_Kzq0e5u3e8CaCn_Ev7dIYAYGujvVzxsHjHgjNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/LndlZGRpbmd3aXJl/LmNvbS9hcnRpY2xl/LzIwNDEvM18yLzk2/MC9qcGcvMjE0MDIt/d2Vic2l0ZS1wcm9z/dG9jay1zdHVkaW8u/anBlZw",
    },
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
                <img
                  src="https://agency.thecodegrammer.net/media/AboutPage/why-1.jpg"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative col-span-1 row-span-1 mt-12 overflow-hidden rounded-2xl">
                <img
                  src="https://agency.thecodegrammer.net/media/AboutPage/why-2.jpg"
                  alt="Creative process"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl">
                <img
                  src="https://agency.thecodegrammer.net/media/AboutPage/why-3.jpg"
                  alt="Design work"
                  className="h-full w-full object-cover"
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

        <section className="w-full py-24">
          <div className="section-container">
            <div className="grid grid-cols-12 gap-8">
              <div className="relative col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="relative">
                    <span className="text-[200px] font-bold leading-none text-secondary opacity-10">
                      13
                    </span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-secondary">
                      <span className="text-xl font-medium">Years of</span>
                      <br />
                      <span className="text-3xl font-bold">Excellence</span>
                    </div>
                  </div>

                  <div className="space-y-4 pl-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary-light">
                        <span className="text-lg font-semibold text-secondary">
                          250+
                        </span>
                      </div>
                      <p className="text-sm text-secondary-light">
                        Projects Successfully Delivered
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary-light">
                        <span className="text-lg font-semibold text-secondary">
                          50+
                        </span>
                      </div>
                      <p className="text-sm text-secondary-light">
                        Expert Team Members
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary-light">
                        <span className="text-lg font-semibold text-secondary">
                          98%
                        </span>
                      </div>
                      <p className="text-sm text-secondary-light">
                        Client Satisfaction Rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-8">
                <div className="space-y-24">
                  {storyContent.map((content, index) => (
                    <div key={index} className="group relative">
                      <div className="relative">
                        <div className="grid grid-cols-12 gap-6">
                          <div className="col-span-5">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                              <Image
                                src={content.image}
                                alt={content.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>

                          <div className="col-span-7">
                            <div className="absolute -left-4 top-0 h-full w-[2px]">
                              <div className="h-full w-full bg-border/40" />
                              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-border/60" />
                            </div>

                            <div className="pl-8">
                              <div className="inline-block">
                                <h3 className="relative mb-4 text-2xl font-bold text-secondary">
                                  {content.title}
                                  <div className="absolute bottom-0 left-0 -mb-1 h-[1px] w-full bg-border/20" />
                                </h3>
                              </div>

                              <div className="relative">
                                <p className="text-base leading-relaxed text-secondary-light">
                                  {content.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </div>
    </div>
  );
}
