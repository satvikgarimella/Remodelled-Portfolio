
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="experience" className="section-padding bg-blue-950/5">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Professional Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Work Experience
          </h3>
          <p className="text-blue-400/80 max-w-2xl mx-auto">
            My professional experiences that have shaped my skills and expertise in the tech industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div 
            className="relative pl-8 border-l-2 border-blue-500/20 pb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute w-4 h-4 bg-blue-500/30 rounded-full -left-[9px] top-0 shadow-glow"></div>
            
            <div className="bg-blue-950/10 backdrop-blur-sm p-6 rounded-lg border border-blue-500/10">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Full Stack Developer</h4>
                <span className="text-sm text-blue-400 mt-1">May 2024 – August 2024</span>
              </div>
              
              <p className="text-blue-200/90 mb-1">Saidham Food Bank, Toronto, Canada</p>
              
              <ul className="mt-4 space-y-3 text-blue-400/80">
                <li className="flex">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-2 mt-1.5"></span>
                  <p>I designed and implemented dynamic, responsive web interfaces using React JS, which significantly enhanced the overall user experience and streamlined navigation throughout the platform.</p>
                </li>
                <li className="flex">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-2 mt-1.5"></span>
                  <p>I developed secure server-side logic using Node.js and Django frameworks, successfully handling complex data processing tasks and ensuring reliable communication between front-end and back-end systems.</p>
                </li>
                <li className="flex">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-2 mt-1.5"></span>
                  <p>I leveraged PostgreSQL database technology for efficient data management and query optimization, resulting in improved application performance and more responsive data retrieval operations.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
