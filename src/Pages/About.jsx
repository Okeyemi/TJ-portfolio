import { motion } from 'framer-motion';
import MyPhoto from '../assets/images/my-photo2.jpg'; 

const About = () => {
  return (
    <section className="bg-[#1F242D] text-white min-h-screen py-12 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center pt-16">
        About <span className="text-[#00EEFF]">Me</span>
      </h1>
      
      <div className="flex flex-col md:flex-row items-center  w-full md:px-16 px-4 ">
        {/* Left Side: Image */}
        <motion.div
          className="mb-8 md:mb-0 md:w-[40%] "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={MyPhoto}
            alt="Okeyemi Tunde"
            className="rounded-lg shadow-lg md:w-96 md:h-80 object-cover"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="md:text-xl font-semibold mb-2">Hello, I am a Front-End Developer</p>
          <p className="mb-4">With 2+ Years of Experience</p>
          <p className="text-lg mb-6 text">
            Hi there! I am a dedicated and passionate front-end developer with a strong foundation in modern web development technologies. I have hands-on experience in building dynamic and responsive web applications using a variety of modern tools and frameworks. I thrive in fast-paced environments and excel at solving complex problems. My ability to collaborate effectively with teams and my commitment to continuous learning enable me to deliver high-quality, user-centric solutions.
          </p>
      

        </motion.div>
      </div>
         {/* Skills Section */}
        <motion.div
          className="md:w-1/2 md:ml-10 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <h2 className="text-3xl font-bold mb-8">Programming Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl">JavaScript</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl">HTML & CSS</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md"></div>
              </div>
          
        
          <div>
           
          </div>
        </motion.div>
    </section>
  );
};

export default About;
