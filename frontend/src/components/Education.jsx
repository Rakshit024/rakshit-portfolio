import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
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
                <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded text-xs font-medium">
                    {edu.status}
                  </span>
                </div>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {edu.university}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {edu.projects && edu.projects.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Academic Projects:
                </h4>
                {edu.projects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="mb-2"
                  >
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {project.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

