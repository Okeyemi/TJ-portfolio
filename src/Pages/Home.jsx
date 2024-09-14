import { motion } from 'framer-motion';
import HeroImage from '../assets/images/hero.png'
import Okeyemi from '../assets/images/okeyemi.png'

const Home =()=> {
  const cvUrl ='https://drive.google.com/file/d/1RhuWqu7VmHYN3tEi3AvBaOTCd8FlIM13/view?usp=sharing'
  return (
<section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
  <div className="absolute inset-0 bg-[#1F242D] opacity-85"></div>
  <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between p-6">
    {/* Left Side: Text */}
    <motion.div
      className="text-left max-w-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Hello, I&apos;m <span className="text-[#00EEFF]">Tunde OKEYEMI</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        A passionate Frontend Developer creating awesome web experiences with modern technologies.
      </p>
      <a href={cvUrl} download>
      <div className='flex space-x-6'>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="px-4  bg-[#00EEFF] text-sm md:text-base  text-[#1F242D]/80 font-semibold rounded-xl shadow-md hover:bg-blue-300 transition duration-300"
      >
       Download CV
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="px-5  bg-[#00EEFF] text-sm md:text-base  text-[#1F242D]/80 font-semibold rounded-xl shadow-md hover:bg-blue-300 transition duration-300"
      >
      Portfolio
      </motion.button>
      </div>
</a>
    </motion.div>

    {/* Right Side: Image */}
    <motion.div
      className="mt-6 md:mt-0 md:w-1/2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={Okeyemi}
        alt="Okeyemi Tunde"
        className="rounded-full shadow-lg"
      />
    </motion.div>
  </div>
</section>

  );
}

export default Home;
