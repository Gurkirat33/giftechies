"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  MessageSquare,
  ClipboardCheck,
  Code,
  Rocket,
  Check,
  Users,
  Zap,
  Monitor,
  Shield,
  FileSearch,
  PenTool,
  Smartphone,
  Layers,
  Target,
  TrendingUp,
  Coffee,
  Play,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const VerticalJourneySection = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const stepRefs = useRef([]);
  const controls = useAnimation();

  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description:
        "We dive deep into your vision, goals, and challenges to craft a tailored web solution.",
      content: <Step1 />,
    },
    {
      icon: ClipboardCheck,
      title: "Strategy & Planning",
      description:
        "We develop a comprehensive roadmap for your web project, ensuring alignment with your business objectives.",
      content: <Step2 />,
    },
    {
      icon: Code,
      title: "Design & Development",
      description:
        "Our expert team brings your vision to life with cutting-edge design and robust development practices.",
      content: <Step3 />,
    },
    {
      icon: Rocket,
      title: "Launch & Growth",
      description:
        "We ensure a smooth launch and provide ongoing support to drive your online success.",
      content: <Step4 />,
    },
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveStep(-1);

    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
        stepRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, index * 2000);
    });

    setTimeout(() => {
      setIsAnimating(false);
      setActiveStep(-1);
      controls.start({ opacity: 1, scale: 1 });
    }, steps.length * 2000);
  };

  useEffect(() => {
    if (activeStep >= 0) {
      controls.start((i) => ({
        opacity: i === activeStep ? 1 : 0.5,
        scale: i === activeStep ? 1.05 : 0.98,
        transition: { duration: 0.5 },
      }));
    }
  }, [activeStep, controls]);

  return (
    <section className="bg-primary-900 text-white">
      <div className="section-container py-16">
        <SectionHeading
          subheading="Our Process"
          heading="Your Journey to Digital Excellence"
          description="From concept to launch and beyond, we're with you every step of the way."
        />

        <div className="flex justify-center">
          <motion.button
            onClick={startAnimation}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAnimating}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-md transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gray-800">
              <Play className="h-6 w-6" />
            </div>
          </motion.button>
        </div>

        <div className="mt-12 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              custom={index}
              animate={controls}
              className="overflow-hidden rounded-xl bg-primary-800 shadow-xl"
            >
              <div className="flex flex-col items-stretch md:flex-row">
                <div className="relative flex flex-col justify-between p-4 sm:p-8 md:w-2/5">
                  <div>
                    <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-tertiary-600 text-white">
                      <step.icon size={32} />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold">{step.title}</h3>
                    <p className="text-lg text-gray-300">{step.description}</p>
                  </div>
                  <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-primary-700 p-4 sm:p-8 md:w-3/5">
                  {step.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalJourneySection;
