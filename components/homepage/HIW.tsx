"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps } from "@/constants/global";
import StepCard from "@/components/homepage/hiw/StepCard";

gsap.registerPlugin(ScrollTrigger);

const HIW = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepWrapperRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${steps.length * 100}%`,
      pin: true,
      scrub: 1,
      anticipatePin: 1, // 👈 برای smooth release
      onUpdate: (self) => {
        const index = Math.max(
          0,
          Math.min(
            Math.floor(self.progress * steps.length),
            steps.length - 1
          )
        );

        if (index !== activeStepRef.current) {
          activeStepRef.current = index;
          setActiveStep(index);
        }
      },
    });

    return () => trigger.kill();
  }, []);

  // 🎬 Cinematic slide animation
  useEffect(() => {
    if (!stepWrapperRef.current) return;

    gsap.fromTo(
      stepWrapperRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power4.out",
        overwrite: "auto",
      }
    );
  }, [activeStep]);

  return (
    <section ref={sectionRef} className="relative h-screen">
      <div className="h-screen flex items-center justify-center">
        <div ref={stepWrapperRef}>
          <StepCard step={steps[activeStep]} index={activeStep} />
        </div>
      </div>
    </section>
  );
};

export default HIW;
