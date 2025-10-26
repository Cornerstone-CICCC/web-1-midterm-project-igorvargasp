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


const experiences = [
    {
        id: 1,
        company: "ACT Digital",
        role: "Fullstack Developer",
        period: "May 2025 - Present",
        description:
            "Technology consulting and digital solutions company based in Brazil. Developed responsive web applications using React.js and Next.js, enhancing user engagement and satisfaction. Collaborated with cross-functional teams to define project requirements and deliver high-quality software solutions. Implemented RESTful APIs and integrated third-party services to optimize application performance. Mentored junior developers and conducted code reviews to maintain best practices and code integrity.",
        logo: "/logo_act_blue.png",
    },
    {
        id: 2,
        company: "Next IP",
        role: "Fullstack Developer",
        period: "Mar 2023 - May 2025",
        description:
            "Technology company focused on digital infrastructure, cloud solutions, and network innovation. Developed and maintained responsive web and mobile applications using React.js, Next.js, and React Native with Expo, improving performance and user experience across platforms. Collaborated with cross-functional teams to design and implement new features. Mentored junior developers and conducted code reviews to ensure quality and efficiency. Engaged with clients to gather requirements and deliver tailored solutions.",
        logo: "/nextipbr_logo.jpg",
    },
    {
        id: 3,
        company: "Crowdkeep",
        role: "Fullstack Developer (Freelance)",
        period: "Aug 2024 - Nov 2024",
        description:
            "Workforce management and time-tracking software company. Developed responsive front-end applications using React.js, TypeScript, and GraphQL to deliver dynamic and data-driven user interfaces. Collaborated with UI/UX designers to enhance user experience through interactive and accessible designs. Integrated RESTful APIs and engineered seamless data integration using GraphQL. Conducted code reviews and provided mentorship to junior developers to ensure best practices.",
        logo: "/crowdkeep_logo.png",
    },
    {
        id: 4,
        company: "IBM",
        role: "Cloud Developer",
        period: "Dec 2021 - Mar 2023",
        description:
            "Engineered seamless user experiences by integrating and visualizing analytical data in React components using GraphQL and REST APIs. Authored documentation to convey company standards and best practices, reducing onboarding time for new team members. Designed accessible, responsive, and functional interfaces, resulting in a 135% increase in 5-star UX/UI reviews. Developed object-oriented Node.js code and innovated new services using the Quarkus framework to enhance API performance.",
        logo: "/ibm-logo-ibm.jpg",
    },
    {
        id: 5,
        company: "Compass.uol",
        role: "Backend Developer",
        period: "Mar 2020 - May 2021",
        description:
            "Global digital transformation company specializing in cloud, AI, and IT solutions. Designed wireframes and mock layouts for new product concepts. Created RESTful APIs and real-time solutions using Node.js, WebSocket, and MongoDB. Developed responsive web and mobile applications using React.js, Next.js, and React Native with Expo. Implemented Spring Boot and JUnit for API development and unit testing, ensuring code reliability and quality.",
        logo: "compasso-uol-logo.png",
    },
];




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
                                    <img className="w-7" src={exp.logo} alt="" />
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