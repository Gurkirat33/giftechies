const TechStackSlider = () => {
  const row1 = [
    "WordPress",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ];

  const row2 = [
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Figma",
    "AWS",
    "Docker",
    "Kubernetes",
    "Firebase",
    "Vercel",
    "Netlify",
  ];

  return (
    <div className="col-span-1 row-span-2 flex flex-col justify-end overflow-hidden rounded-lg bg-slate-200 p-10 dark:bg-primary-800">
      <p className="mb-2 text-xl font-semibold">Tech Stack</p>
      <p className="mb-8">
        I specialize in web development using the following technologies:
      </p>
      <div className="relative mt-auto">
        <div className="slider-container">
          <div className="slide-track-right">
            {row1.map((tech, index) => (
              <div
                key={`right-1-${index}`}
                className="slide whitespace-nowrap rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
            {row1.map((tech, index) => (
              <div
                key={`right-2-${index}`}
                className="slide whitespace-nowrap rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-container mt-4">
          <div className="slide-track-left">
            {row2.map((tech, index) => (
              <div
                key={`left-1-${index}`}
                className="slide whitespace-nowrap rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
            {row2.map((tech, index) => (
              <div
                key={`left-2-${index}`}
                className="slide whitespace-nowrap rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSlider;
