"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  Activity,
  Award,
  Clock,
} from "lucide-react";

const CTASection = () => {
  const features = [
    "Custom web design tailored to your brand",
    "Responsive development for all devices",
    "SEO optimization included",
    "24/7 customer support",
  ];

  const timelineSteps = [
    {
      icon: Calendar,
      title: "Project Kickoff",
      description: "Schedule within 24 hours",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Activity,
      title: "Development Phase",
      description: "2-4 weeks of focused work",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Launch & Success",
      description: "Go live with full support",
      color: "from-cyan-500 to-green-500",
    },
  ];

  return (
    <section className="bg-primary-900 py-20">
      <div className="section-container relative">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-lg text-gray-400">
              Join hundreds of satisfied clients who have elevated their digital
              footprint with our expertise. Let's create something extraordinary
              together.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-blue-700">
                Start Your Project
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-lg border border-border px-8 py-4 font-semibold text-white">
                Schedule a Call
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 blur-xl" />
            <div className="relative rounded-2xl bg-primary-600 p-8">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  Your Success Journey
                </h3>
                <Clock className="h-6 w-6 text-blue-400" />
              </div>

              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {index !== timelineSteps.length - 1 && (
                      <div className="absolute left-6 top-12 h-16 w-0.5 bg-gray-800" />
                    )}
                    <div className="flex items-start">
                      <div
                        className={`h-12 w-12 flex-shrink-0 bg-gradient-to-br ${step.color} flex items-center justify-center rounded-full`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="mb-1 text-lg font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-gray-800 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      Need it faster?
                    </h4>
                    <p className="text-sm text-gray-400">
                      Ask about our expedited timeline
                    </p>
                  </div>
                  <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600">
                    Fast Track
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
