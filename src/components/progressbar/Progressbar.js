import React, { useState, useEffect } from "react";
import "./Progressbar.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Progressbar = ({ targetPercentage }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Set triggerOnce to false to trigger every time it's in view
  });

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      controls.start({ width: `${targetPercentage}%` });
    }
  }, [inView, hasAnimated, controls, targetPercentage]);

  return (
    <motion.div
      ref={ref}
      className="progress-bar"
      initial={{ width: "0%" }}
      animate={controls}
      transition={{ duration: 2 }}
    >
     
    </motion.div>
  );
};

const targetPercentages = [80, 80, 60, 80, 80, 70, 90, 50];
const elementTexts = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Redux",
  "RESTful API",
  "MUI - Tailwind",
  "Express.js",
];

export default () => {
  return (
    <div className="bars-wrapper">
      <div className="bars-wrapper-child">
        {targetPercentages.slice(0, 4).map((target, index) => (
          <div className="bar-wrapper" key={index}>
            <div className="bar-title">
              <h4>{elementTexts[index]}</h4>
              <h4>{target}%</h4>
            </div>
            <div className="bar">
              <Progressbar targetPercentage={target} />
            </div>
          </div>
        ))}
      </div>
      <div className="bars-wrapper-child">
        {targetPercentages.slice(4, 8).map((target, index) => (
          <div className="bar-wrapper" key={index}>
            <div className="bar-title">
              <h4>{elementTexts[index + 4]}</h4>
              <h4>{target}%</h4>
            </div>
            <div className="bar">
              <Progressbar targetPercentage={target} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
