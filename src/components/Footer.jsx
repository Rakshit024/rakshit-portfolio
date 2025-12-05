import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Rakshit Patel. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-600 mt-1">
              FullStack Developer (MERN Stack)
            </p>
          </div>

          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Rakshit024"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ opacity: 0.7, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/Rakshit024"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ opacity: 0.7, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:patelrakshit024@gmail.com"
              whileHover={{ opacity: 0.7, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

