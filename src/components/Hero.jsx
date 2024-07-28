import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

function Hero() {
    return (
        <div className="border-b border-x-neutral-900 pb-4 lg:mb-3.5 text-center">
            <div className="flex flex-wrap">
                {/* <div className="m-auto w-full lg:w-1/2"> */}
                <div className="w-3/4 mx-auto flex flex-col items-center lg:items-start text-center">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="mx-auto pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Arpit Dobariya</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="mx-auto bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="mx-auto my-2 w-4/5 py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Hero
