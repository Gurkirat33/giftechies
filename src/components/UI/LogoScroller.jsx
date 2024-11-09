"use client";

import React, { useState, useEffect, useRef } from "react";
import Logo from "../../images/google-log.png";

const LogoScroller = () => {
  const [direction, setDirection] = useState("right");
  const scrollerRef = useRef(null);
  const animationRef = useRef(null);

  const logos = [
    {
      id: 1,
      name: "Company 1",
      url: "/api/placeholder/150/60",
    },
    { id: 2, name: "Company 2", url: "/api/placeholder/150/60" },
    { id: 3, name: "Company 3", url: "/api/placeholder/150/60" },
    { id: 4, name: "Company 4", url: "/api/placeholder/150/60" },
    { id: 5, name: "Company 5", url: "/api/placeholder/150/60" },
    { id: 6, name: "Company 6", url: "/api/placeholder/150/60" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth / 3;
    }

    const animate = () => {
      const scroller = scrollerRef.current;
      if (scroller) {
        const speed = 0.8;

        if (direction === "right") {
          scroller.scrollLeft += speed;
          if (scroller.scrollLeft >= (scroller.scrollWidth * 2) / 3) {
            scroller.scrollLeft = scroller.scrollWidth / 3;
          }
        } else {
          scroller.scrollLeft -= speed;
          if (scroller.scrollLeft <= 0) {
            scroller.scrollLeft = scroller.scrollWidth / 3;
          }
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction]);

  const handleMouseMove = (e) => {
    const container = scrollerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    setDirection(e.clientX > centerX ? "left" : "right");
  };

  return (
    <div className="w-full overflow-hidden bg-primary-900 py-4">
      <div
        ref={scrollerRef}
        className="flex select-none overflow-x-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-8 px-4">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-lg bg-[#282a2e] shadow-sm"
            >
              <img
                src={Logo}
                alt={logo.name}
                className="max-h-12 w-auto object-contain"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;
