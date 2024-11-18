import Image from "next/image";
import Person1 from "@/images/person1.jpeg";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Prabh",
      image: Person1,
      bio: "Visionary leader driving innovation in digital solutions",
    },
    {
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
      bio: "Award-winning designer with an eye for perfection",
    },
    {
      name: "Marcus Rodriguez",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop",
      bio: "Full-stack expert pushing technological boundaries",
    },
    {
      name: "Emma Williams",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop",
      bio: "Strategic leader ensuring project excellence",
    },
    {
      name: "David Kim",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
      bio: "Creating seamless user experiences that delight",
    },
    {
      name: "Lisa Chen",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop",
      bio: "Digital marketing strategist driving growth",
    },
    {
      name: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
      bio: "Infrastructure expert ensuring seamless operations",
    },
    {
      name: "Nina Patel",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
      bio: "Creating beautiful interfaces with precision",
    },
  ];

  return (
    <section className="w-full bg-primary-light py-32">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h4 className="mb-3 text-sm font-semibold text-secondary">
            Our Team
          </h4>
          <h2 className="mb-4 text-4xl font-semibold text-secondary">
            The Team Behind Your Success
          </h2>
          <p className="mx-auto max-w-2xl text-secondary-light">
            Meet our exceptional team of industry experts, innovators, and
            creative minds dedicated to transforming your digital vision into
            reality.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 aspect-[3/4]">
                <div className="absolute inset-3 border border-border/10" />
                {member.image.src ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-border/60" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-border/60" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-border/60" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-border/60" />
              </div>

              <div className="group px-2 text-center">
                <h3 className="mb-1 text-lg font-bold text-secondary">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm text-secondary-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
