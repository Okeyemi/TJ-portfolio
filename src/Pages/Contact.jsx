import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const formEndpoint = "https://formspree.io/f/xanwzkjq"; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch(formEndpoint, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Error sending message!");
    });
  };
  

  return (
    <section className="bg-[#1F242D] text-white min-h-screen flex items-center justify-center pt-10">
      <div className="container mx-auto p-6 md:p-12">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact <span className=' text-[#00EEFF]'>Me</span></h1>
          <p className="text-lg md:text-lg text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello! <a href="mailto:okeyemitunde@gmail.com" className="text-[#00EEFF]">okeyemitunde@gmail.com</a>.

          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-7 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-3">
            <label className="block text-sm font-semibold text-black mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-black mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-black mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF] h-28"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-[#00EEFF]  text-white font-bold rounded-lg shadow-md hover:bg-blue-300 transition duration-300"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
