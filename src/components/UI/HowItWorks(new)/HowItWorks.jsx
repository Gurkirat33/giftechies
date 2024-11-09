"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image";
import { steps } from "@/components/data/HowItWorks";
import { CloseIcon } from "./CloseButton";

const HowItWorks = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="bg-white dark:bg-primary-900">
      <div className="section-container max-w-7xl py-20">
        <div className="bg-white px-4 py-5 text-center dark:bg-primary-900">
          <div>
            <div className="mb-6 inline-block rounded-full bg-tertiary-600 px-3 py-1.5 text-sm text-white">
              5-Phase Process
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              A strategic workflow for timely launch
              <br />
              and market success
            </h2>
          </div>
        </div>

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 h-full w-full bg-black/20"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 z-[100] grid place-items-center">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-primary-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                  />
                </motion.div>

                <div>
                  <div className="flex items-start justify-between px-4 pt-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                    </div>
                  </div>
                  <div className="relative px-4 pt-3">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="relative space-y-6">
          <div className="absolute left-12 top-0 h-full w-0.5 bg-slate-500/20"></div>
          {steps.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="flex cursor-pointer flex-col items-center justify-between rounded-xl bg-slate-100 px-4 py-6 dark:bg-primary-800 md:flex-row"
            >
              <div className="relative flex flex-col items-center gap-4 md:flex-row">
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="group flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 transition-colors duration-300 hover:bg-[#FF6B6B] dark:border-gray-700 dark:bg-primary-800"
                >
                  <card.icon className="h-6 w-6 text-gray-600 transition-colors duration-300 group-hover:text-white dark:text-gray-300" />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                  >
                    {card.subTitle}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                  >
                    {card.title}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="md:w-2/3 md:pt-3"
              >
                <span className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {" "}
                  {card.description}
                </span>
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
