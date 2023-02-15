import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

const style = {
    heroButton: `px-4 md:px-10 lg:px-16 uppercase hover:text-gray-300 transition 
                 ease-in-out duration-500 tracking-widest text-xs cursor-none`
}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Full Stack Developer', 
            'UI / UX Designer', 
            'Artist'
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
        initial={{
            x: -1000,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
        >
        <div className="flex justify-center">
            <Image 
                src="/kane.jpeg"
                width="1000"
                height="0"
                alt="kane"
                className="relative rounded-full h-36 w-36 md:h-64 md:w-64 mx-auto object-fit mt-24"
            />           
        </div>

        <h2 className="md:text-xl uppercase font-thin text-black tracking-[10px] text-center mt-8 dark:text-white">
            software engineer 
            <br />
            &
        </h2>

        <h1 className="text-2xl text-center uppercase md:text-3xl">
            <span className="text-black dark:text-white">{text}</span>
            <Cursor cursorColor="#a0aec0;" />
        </h1>

        <div className="text-sm mt-20 mb-20 text-gray-800 dark:text-white">
            <Link href="#about">
                <button className={style.heroButton}>About</button>
            </Link>
            <Link href="#skills">
                <button className={style.heroButton}>Skills</button>
            </Link>
            <Link href="#projects">
                <button className={style.heroButton}>Projects</button>
            </Link>
            <Link href="#contact">
                <button className={style.heroButton}>Contact</button>
            </Link>
        </div>
        </motion.div>
    </div>
  )
}