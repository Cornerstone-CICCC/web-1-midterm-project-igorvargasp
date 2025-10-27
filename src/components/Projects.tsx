
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Ticket Management System – ACT Digital",
        description:
            "A suite of responsive web applications built with React.js and Next.js to enhance user engagement and streamline digital experiences. Integrated RESTful APIs and optimized performance across multiple client platforms.",
        image: "/actdigital.com.jpeg",
        link: "https://actdigital.com/",
    },
    {
        id: 2,
        title: "Call center plataform – Next IP",
        description:
            "Developed a web and mobile dashboard using React.js, Next.js, and React Native with Expo for monitoring cloud infrastructure and network performance in real time. Improved scalability and cross-platform consistency.",
        image: "/nextip.com.br.jpeg",
        link: "https://nextip.com.br/",
    },
    {
        id: 3,
        title: "Workforce Management App – Crowdkeep",
        description:
            "Built a responsive front-end application using React.js, TypeScript, and GraphQL for time-tracking and workforce analytics. Integrated RESTful APIs and collaborated with designers to create a highly interactive and accessible UI.",
        image: "/crowdkeep.com.jpeg",
        link: "https://crowdkeep.com/",
    },
    {
        id: 4,
        title: "Cloud Analytics Portal – IBM",
        description:
            "Developed interactive analytics dashboards using React.js and GraphQL to visualize large datasets. Authored internal documentation and implemented Quarkus-based microservices to enhance API performance and maintainability.",
        image: "/ibm.com.jpeg",
        link: "https://www.ibm.com/",
    },
    {
        id: 5,
        title: "Lavouro App – Compass UOL",
        description:
            "Engineered backend services and REST APIs with Node.js and Spring Boot to support real-time customer analytics. Integrated MongoDB for scalable data storage and React-based dashboards for live insights.",
        image: "/compass.uol.jpeg",
        link: "https://compass.uol/",
    },
];


export default function Projects() {
    return (
        <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
            <h2 className="text-2xl lg:text-4xl text-center text-white">
                My <span className="font-extrabold">Projects</span>
            </h2>

            <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
                            <img
                                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                                src={project.image}
                                alt={project.title}
                            />
                        </div>

                        <div className="lg:w-1/2 lg:space-y-6 space-y-4">
                            <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                                {String(project.id).padStart(2, "0")}
                            </h2>
                            <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

                            <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                                {project.description}
                            </p>
                            <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                                <TbExternalLink size={23} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}