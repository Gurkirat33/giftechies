import Breadcrumb from "./Breadcrumb";

export const SectionHeading = ({ 
  title, 
  description, 
  showBreadcrumb = true,
  className = ""
}) => {
  return (
    <div className={`relative mb-16 ${className}`}>
      <div className="section-container">
        {showBreadcrumb && <Breadcrumb />}
        
        <div className="relative mt-8 grid gap-8 md:grid-cols-[1fr,1fr] lg:gap-16">
          <div className="relative">
            <h2 className="relative text-left text-5xl font-medium leading-[1.2] tracking-tight text-secondary md:text-6xl lg:text-7xl">
              {title}
            </h2>
          </div>

          <div className="relative flex items-center justify-center">
            <p className="text-lg text-secondary-light md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};