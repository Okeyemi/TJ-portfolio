import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      number: "01",
      title: "QUARDMAN LOGISTICS",
      description: "A website for a logistics company",
      link: "https://www.quardmanlogistics.com/",
    },
    {
      number: "02",
      title: "Reback Finance",
      description: "Invoice System..",
      link: "https://www.reback.finance",
    },
    {
      number: "03",
      title: "Reback Finance",
      description: "Invoice System..",
      link: "https://www.reback.finance",
    },
  ];

  return (
    <section className="bg-[#1F242D] text-white min-h-screen md:pt-16 pt-10">
      <div className="text-center py-12">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-[#00EEFF]">Projects</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore some of my recent works.
        </motion.p>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="bg-white text-black rounded-lg shadow-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="md:text-3xl text-base font-bold text-gray-700 text-right">
                {project.number}
              </h3>
              <h3 className="md:text-3xl text-lg font-bold text-gray-700">
                {project.title}
              </h3>
              <p className="mt-4 md:text-lg text-base text-gray-500">
                {project.description}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
