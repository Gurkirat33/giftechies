const TechStackSlider = ({ data1, data2 }) => {
  return (
    <div className="relative mt-auto">
      <div className="slider-container">
        <div className="slide-track-right">
          {data1.map((tech, index) => (
            <div
              key={`right-1-${index}`}
              className="slide whitespace-nowrap rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
          {data1.map((tech, index) => (
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
          {data2.map((tech, index) => (
            <div
              key={`left-1-${index}`}
              className="slide whitespace-nowrap rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
          {data2.map((tech, index) => (
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
  );
};

export default TechStackSlider;
