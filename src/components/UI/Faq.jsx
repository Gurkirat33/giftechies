"use client";

import React, { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { faqData } from "../data/FAQ";

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-100/10 dark:border-gray-700/50">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-indigo-400"
      >
        <span className="text-xl font-medium dark:text-white">{question}</span>
        <div className="relative h-6 w-6 scale-[0.6] dark:text-white">
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
              isOpen ? "rotate-180 scale-0" : ""
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-6 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
              isOpen ? "rotate-180 scale-0" : ""
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
              isOpen ? "" : "scale-0"
            }`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-lg leading-relaxed text-gray-400 dark:text-gray-300">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState("services-offered");

  return (
    <div className="bg-white py-24 dark:bg-primary-900">
      <div className="section-container">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Frequently Asked Question
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Trusted in more than 100 countries and 5 million customers.
            </p>

            <div className="mt-10 rounded-2xl bg-gray-50 p-8 dark:bg-primary-800">
              <div className="mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  You have different questions?
                </h2>
              </div>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Our team will answer all your questions. We ensure a quick
                response.
              </p>
              <button className="group flex items-center gap-3 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                <Phone className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                Contact Our Team
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-px">
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openId === faq.id}
                  toggleOpen={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
