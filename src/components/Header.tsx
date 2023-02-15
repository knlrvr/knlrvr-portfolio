import React from 'react'
import { motion } from 'framer-motion'
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsDownload,
} from 'react-icons/bs'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-6xl mx-auto py-2 z-50 w-full">
      <motion.div 
        initial={{
          x: -500,
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
        className="flex flex-row items-center"
      >
      <div className="flex flex-row items-center">
        <p className="px-4 font-mono text-black py-2 text-lg dark:text-white">
          / k n l r v r
        </p>
      </div>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
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
        className="flex flex-row items-center"
      >
      <div className="flex space-x-4 md:space-x-8 lg:space-x-12 px-4 py-2 text-2xl">
        <Link href="https://github.com/knlrvr" target="_blank">
          <BsGithub 
            className="cursor-none hover:text-gray-300"/>
        </Link>
        <Link href="https://linkedin.com/in/kane-lariviere" target="_blank">
          <BsLinkedin 
            className="cursor-none hover:text-gray-300" />
        </Link>
        <Link href="https://twitter.com/knlrvr" target="_blank">
          <BsTwitter 
            className="cursor-none hover:text-gray-300" />
        </Link>
        <Link href="/LARIVIERE, KANE.pdf" target="_blank">
          <BsDownload 
            className="cursor-none hover:text-gray-300" />
        </Link>
      </div>
      </motion.div>

    </header>
  )
}