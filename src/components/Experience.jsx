import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: 'easeOut'
            }}
            whileHover={{ opacity: 0.95 }}
            className="card mb-6 relative pl-8 border-l-4 border-primary-500 dark:border-primary-400"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {exp.company}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {exp.description.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

