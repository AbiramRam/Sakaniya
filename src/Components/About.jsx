import aboutImg from "../assets/AboutAbi.jpg"; 
import { ABOUT_TEXT} from "../constants"; 
import { motion } from "motion/react"

const About = () => {
    return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span> 
        </motion.h1>
        
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{x: -100, opacity: 0}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img 
                        initial={{x: -100,opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5,delay:0.5}}
                        className="rounded-2xl" src={aboutImg} alt="about" /> </div>
                </motion.div>
        
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{x: 100, opacity: 0}}
                    transition={{duration:0.5,delay: 0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center text-1xl font-medium lg:justify-start">
                        <p>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
        </div>
    </div>
  );
}

export default About