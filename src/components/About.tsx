import { motion } from 'framer-motion';
import { text } from '../utils/constants';
import { AboutMeIcon } from '../assets/icons/AboutMeIcon';

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
                <AboutMeIcon />
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
                    {text.aboutDescription.paragraph1}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {text.aboutDescription.paragraph2}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {text.aboutDescription.paragraph3}
                </p>
                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {text.aboutDescription.paragraph4}
                </p>
            </motion.div>
        </div>
    );
}