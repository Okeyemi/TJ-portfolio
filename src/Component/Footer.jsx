import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#1F242D] shadow-lg text-white py-12 flex flex-col md:flex-row justify-between items-center px-6 md:px-16">
      <motion.div
        className="text-center md:text-left mb-4 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p>&copy; 2024 Tunde OKEYEMI. All rights reserved.</p>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="flex space-x-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://twitter.com/okeyemitunde1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/okeyemi-tunde/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/okeyemi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Footer;
