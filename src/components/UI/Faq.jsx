"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BgGrid from "./BgGrid";

const faqData = [
  {
    q: "What technologies do you use for web development?",
    a: "We use cutting-edge technologies like React, Next.js, and Node.js to build fast, scalable, and responsive websites.",
  },
  {
    q: "How long does it typically take to complete a website?",
    a: "Project timelines vary, but most websites take 6-12 weeks from concept to launch, depending on complexity and scope.",
  },
  {
    q: "Do you offer UI/UX design services?",
    a: "Yes, we provide comprehensive UI/UX design services to create intuitive and visually appealing user experiences.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely! We specialize in website redesigns, enhancing both aesthetics and functionality of existing sites.",
  },
  {
    q: "What digital marketing services do you offer?",
    a: "We offer a full suite of digital marketing services, including SEO, PPC, social media marketing, and content strategy.",
  },
  {
    q: "How do you measure the success of digital marketing campaigns?",
    a: "We use advanced analytics tools to track KPIs such as traffic, conversions, and ROI, providing regular reports and insights.",
  },
  {
    q: "How do you determine the cost of a project?",
    a: "Project costs are based on scope, complexity, and timeline. We provide detailed quotes after an initial consultation.",
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "Yes, we offer various maintenance and support packages to keep your website secure, updated, and performing optimally.",
  },
];

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const filteredFAQs = faqData.filter(
    (q) =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-primary-900 pb-12 text-white">
      <BgGrid />
      <div className="section-container max-w-5xl">
        <SectionHeading
          subheading="Frequently Asked Questions"
          heading="Have Questions? We’ve Got Answers!"
          description="Find answers to the most commonly asked questions below. If you need further assistance, feel free to reach out to us!"
        />

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full bg-primary-600 px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none"
          />
          <Search className="absolute left-4 top-3 text-border" />
        </div>

        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-4 overflow-hidden rounded-lg bg-primary-600"
              >
                <motion.button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === index ? null : index)
                  }
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-medium">{item.q}</span>
                  <HelpCircle
                    className={`h-5 w-5 transition-all duration-300 ${
                      activeQuestion === index
                        ? "rotate-180 text-secondary-500"
                        : ""
                    }`}
                  />
                </motion.button>
                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 text-gray-300"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="mb-4 text-gray-400">Question not found</p>
            <button className="inline-flex items-center rounded-lg bg-tertiary-600 px-8 py-4 font-semibold text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
