import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

const style = {
    heroButton: `px-8 md:px-10 lg:px-16 uppercase hover:text-gray-300 transition 
                 ease-in-out duration-500 tracking-widest text-xs`
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
        <div className="flex justify-center">

            {/** full app bg img */}
            {/**
            <Image 
                src="/kane.jpeg"
                width="1000"
                height="0"
                alt="kane"
                className="absolute rounded-full h-64 w-64 mx-auto object-fit blur-3xl top-50"
            />
            */}

            <Image 
                src="/kane-crop-2.svg"
                width="1000"
                height="0"
                alt="kane"
                className="relative rounded-full h-64 w-64 md:h-80 md:w-80 mx-auto object-fit mt-16"
            />
        </div>

        {/** // Are circles overrated? 
        <div className="py-2 mb-4 flex space-x-16 md:space-x-24">
            <div className="rounded-full bg-gray-700 h-5 w-5"></div>
            <div className="rounded-full bg-gray-600 h-5 w-5"></div>
            <div className="rounded-full bg-gray-400 h-5 w-5"></div>
        </div>
        */}

        <h2 className="md:text-xl uppercase font-thin text-black tracking-[10px] text-center mt-10 dark:text-white">
            software engineer 
            <br />
            &
        </h2>

        <h1 className="text-2xl text-center uppercase md:text-3xl">
            <span className="text-black dark:text-white">{text}</span>
            <Cursor cursorColor="#a0aec0;" />
        </h1>

        <div className="text-sm mt-20 text-gray-800 dark:text-white">
            {/** // does this line look weird? i haven't slept in 33 hours
            <div className="flex mb-4">
                <hr className="border-black w-2/3 flex-grow"/>
            </div>
            */}
            <Link href="#about">
                <button className={style.heroButton}>About</button>
            </Link>
            <Link href="#projects">
                <button className={style.heroButton}>Projects</button>
            </Link>
            <Link href="#contact">
                <button className={style.heroButton}>Contact</button>
            </Link>
        </div>
    </div>
  )
}