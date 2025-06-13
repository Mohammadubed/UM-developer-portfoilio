import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I’m an aspiring web developer and data scientist passionate about building intuitive, data-driven applications. I specialize in combining clean, responsive front-end development with insightful data analysis to create impactful digital experiences.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My journey began with my B.Tech in <b>2021</b>, where I developed a strong foundation in <b>programming, algorithms, and data science.</b> Though I’m early in my career, I’m eager to grow and learn new technologies such as <b>React.js, Node.js, Python, and SQL</b> to build meaningful projects.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I enjoy exploring tech communities, sharing ideas on <b>LinkedIn</b>, and contributing to open-source projects on <b>GitHub</b>. Feel free to connect with me or check out my projects as I embark on this exciting path.
        </p>
      </motion.div>
    </div>
  );
}
