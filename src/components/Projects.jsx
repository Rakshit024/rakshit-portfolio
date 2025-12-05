import { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudCog, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = ['All', 'Frontend', 'FullStack'];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of the projects I've worked on</p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-4 mb-8 flex-wrap"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onClick={() => setFilter(category)}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm ${
              filter === category
                ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={filter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ opacity: 0.95 }}
            transition={{ duration: 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (index * 0.05) + (techIndex * 0.02), duration: 0.3 }}
                  whileHover={{ opacity: 0.8 }}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transition-opacity duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Features List */}
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  {feature}
                </li>
              ))}
            </ul>

            {/* View Code Button */}
            <motion.button
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
              onClick={() => {
                window.open(project.projectLink, '_blank');
                console.log(`View code for ${project.name}`);
                console.log(project.projectLink);
              }}
            >
              View Code <ExternalLink size={16} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

