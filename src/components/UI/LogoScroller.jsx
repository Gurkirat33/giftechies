"use client";

import React, { useState, useEffect, useRef } from "react";

const LogoScroller = () => {
  const [direction, setDirection] = useState("right");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const scrollerRef = useRef(null);

  const logos = [
    { id: 1, name: "Company 1", url: "/api/placeholder/150/60" },
    { id: 2, name: "Company 2", url: "/api/placeholder/150/60" },
    { id: 3, name: "Company 3", url: "/api/placeholder/150/60" },
    { id: 4, name: "Company 4", url: "/api/placeholder/150/60" },
    { id: 5, name: "Company 5", url: "/api/placeholder/150/60" },
    { id: 6, name: "Company 6", url: "/api/placeholder/150/60" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const scroller = scrollerRef.current;
    let animationId;
    let speed = 1;

    const animate = () => {
      if (!isDragging && scroller) {
        if (direction === "right") {
          scroller.scrollLeft += speed;
          if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
            scroller.scrollLeft = 0;
          }
        } else {
          scroller.scrollLeft -= speed;
          if (scroller.scrollLeft <= 0) {
            scroller.scrollLeft = scroller.scrollWidth / 2;
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - scrollerRef.current.offsetLeft;
    const diff = x - startX;

    if (Math.abs(diff) > 50) {
      setDirection(diff > 0 ? "left" : "right");
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full overflow-hidden bg-primary-900 py-4">
      <div
        ref={scrollerRef}
        className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-8 px-4">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 h-16 w-40 bg-[#282a2e] rounded-lg shadow-sm flex items-center justify-center select-none pointer-events-none"
            >
              <img
                src="../../images/google-log.png"
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
