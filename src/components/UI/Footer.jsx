"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Code,
  BarChart,
  Layers,
  Users,
  Zap,
} from "lucide-react";

const footerData = {
  services: [
    { name: "Web Development", icon: <Code size={18} /> },
    { name: "UI/UX Design", icon: <Layers size={18} /> },
    { name: "Digital Marketing", icon: <BarChart size={18} /> },
    { name: "Brand Strategy", icon: <Users size={18} /> },
    { name: "App Development", icon: <Zap size={18} /> },
  ],
  resources: [
    "Case Studies",
    "Blog",
    "Portfolio",
    "Client Testimonials",
    "Tech Stack",
  ],
  company: ["About Us", "Our Team", "Careers", "Contact Us", "Privacy Policy"],
};

const socialIcons = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/youragency" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/youragency" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/youragency",
  },
  { name: "GitHub", icon: Github, url: "https://github.com/youragency" },
];

const FooterColumn = ({ title, items, isService = false }) => (
  <div>
    <h3 className="mb-4 text-lg font-semibold text-tertiary-500">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <motion.li
          key={isService ? item.name : item}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="#"
            className="flex items-center transition-colors hover:text-secondary-500"
          >
            {isService && <span className="mr-2">{item.icon}</span>}
            {isService ? item.name : item}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ name, icon: Icon, url }) => (
  <a href={url} className="text-slate-300 transition-colors hover:text-white">
    <span className="sr-only">{name}</span>
    <Icon size={24} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-primary-900 pb-4 pt-8 text-white">
      <div className="section-container">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold text-secondary-600">
                WebCraft Agency
              </span>
            </div>
            <p className="mb-4 max-w-[26rem]">
              Transforming ideas into digital realities. We're a full-service
              web agency dedicated to creating stunning, functional, and
              innovative online experiences that drive business growth and user
              engagement.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <SocialIcon key={social.name} {...social} />
              ))}
            </div>
          </div>

          <FooterColumn
            title="Services"
            items={footerData.services}
            isService={true}
          />
          <FooterColumn title="Resources" items={footerData.resources} />
          <FooterColumn title="Company" items={footerData.company} />
        </div>

        <div className="border-border flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="mb-4 text-slate-300 md:mb-0">
            © 2024 WebCraft Agency. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-slate-300 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-slate-300 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
