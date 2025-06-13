import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub,FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava,FaFlask } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMysql,         // MySQL
  SiFastapi,       // FastAPI
  SiExpress,       // Express.js
  SiDatabricks,
  SiPostman     // (used here as a symbolic Data Science icon)
} from 'react-icons/si';


export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> ,link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    { id: 2, name: "Java", icon: <FaJava size={50} /> ,link:"https://www.java.com/"},
    { id: 3, name: "Python", icon: <FaPython size={50} /> ,link:"https://docs.python.org/"},
    { id: 4,name: "MySQL", icon: <SiMysql size={50} /> ,link:"https://dev.mysql.com/doc/"},
    { id: 5, name: "MongoDB", icon: <FaDatabase size={50} /> ,link:"https://www.mongodb.com/docs/"},
    { id: 6, name: "Express.js", icon: <SiExpress size={50} /> ,link:"https://expressjs.com/"},
    { id: 7, name: "React", icon: <FaReact size={50} /> ,link:"https://react.dev/"},
    { id: 8, name: "Node.js", icon: <FaNodeJs size={50} /> ,link:"https://nodejs.org/docs/latest/api/"},
    { id: 9, name: "Next.js", icon: <RiNextjsFill size={50} /> ,link:"https://nextjs.org/docs"},
    { id: 10, name: "FastAPI", icon: <SiFastapi size={50} /> ,link:"https://fastapi.tiangolo.com/"},
    { id: 11, name: "Flask", icon: <FaFlask size={50} /> ,link:"https://flask.palletsprojects.com/en/stable/quickstart/"},
    { id: 12, name: "Data Science", icon: <SiDatabricks size={50} /> ,link:"https://python-data-science.readthedocs.io/"},
    { id: 13, name: "GitHub", icon: <FaGithub size={50} /> ,link:"https://github.com/"},
    { id: 14, name: "Postman", icon: <SiPostman size={50} /> ,link:"https://www.postman.com/"},
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "TechPelement",
      role: "Web Developer Intern",
      period: "Oct 2024 - Jan 2025",
      description:
        "As a Web Development Intern at Tech Pelement, I contributed to the front-end development of real-world client projects using React.js, HTML/CSS, and JavaScript. I collaborated closely with the design and backend teams to translate UI/UX wireframes into functional components, ensuring responsive design and cross-browser compatibility.During the internship, I demonstrated strong debugging skills, improved performance on dynamic pages, and introduced reusable components to streamline development. I also deepened my understanding of REST APIs, Git workflows, and modern web development best practices.Key Impact: Accelerated feature delivery timelines by developing efficient, clean code — and quickly adapted to team standards, tools, and agile workflows.",
      logo: "/assets/Techpelement.jpg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              onClick={() => window.open(skill.link, '_blank')}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-20" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
