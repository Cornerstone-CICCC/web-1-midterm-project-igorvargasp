import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiTypescript, SiMongodb } from "react-icons/si";


const skills = [
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "TypeScript", icon: <SiTypescript size={50} /> },
    { id: 5, name: "Nestjs", icon: <SiNestjs size={50} /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb size={50} /> },
    { id: 7, name: "Postgresql", icon: <BiLogoPostgresql size={50} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "AWS", icon: <FaAws size={50} /> },
]

export default function Skills() {

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

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {skill.icon}
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}