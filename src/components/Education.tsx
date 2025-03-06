
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="education" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Academic Background
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Education
          </h3>
          <p className="text-blue-400/80 max-w-2xl mx-auto">
            My educational journey and academic achievements.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div 
            className="bg-blue-950/10 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-16 flex justify-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h4 className="text-xl font-semibold">University of Western Ontario</h4>
                <span className="text-sm text-blue-400 mt-1">Aug. 2023 – May 2027</span>
              </div>
              
              <p className="text-blue-200/90 mb-3">Bachelor of Science in Computer Science</p>
              <p className="text-blue-300/70 text-sm">London, ON</p>
              
              <div className="mt-4 text-blue-400/80">
                <p>Focusing on computer science fundamentals, software development, and artificial intelligence studies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
