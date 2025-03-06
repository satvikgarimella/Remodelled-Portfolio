
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const aboutContent = {
  heading: "About Me",
  bio: [
    "I am a second year Computer Science student at the University of Western Ontario, proficient in Python, Java, JavaScript, React.js, and Machine Learning.",
    "With strong communication and collaborative skills, I have successfully led multiple projects, showcasing creativity and teamwork. Committed to continuous learning, I bring technical expertise and innovative problem solving to every challenge and opportunity.",
    "I'm particularly passionate about AI and autonomy. My next project will involve building an autonomous drone, which aligns with my interest in pushing the boundaries of what's possible with today's technology."
  ],
  name: "Satvik Garimella"
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Column */}
          <div ref={ref} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                {/* Your actual image */}
                <img 
                  src="/lovable-uploads/808b976b-df28-4493-bf97-598facbe7526.png" 
                  alt="Satvik Garimella" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-5 -left-5 w-full h-full border-2 border-blue-500/10 rounded-xl z-0"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: { opacity: 0.8 }
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"
            ></motion.div>
          </div>
          
          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {aboutContent.heading}
              </h3>
              
              <div className="space-y-4 mb-8 text-blue-400/80">
                {aboutContent.bio.map((paragraph, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
