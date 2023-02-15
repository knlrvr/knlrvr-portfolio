import React from 'react'
import { 
  BsChevronBarUp,
  BsSun,
  BsMoon
} from 'react-icons/bs'
import Link from 'next/link'
import useDarkMode from './Theme'
import { motion } from 'framer-motion'

export default function ToTop() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
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
    >
      <div className="flex absolute bottom-5 right-16 text-xl z-40">
        {colorTheme === "light" ? (
          <BsSun  
            onClick={() => setTheme("light")}
            className="cursor-none hover:text-gray-300"
          />
        ) : (
          <BsMoon 
            onClick={() => setTheme("dark")}
            className="cursor-none hover:text-gray-300"
          />
        )}
      </div>
      <div className="flex absolute bottom-4 right-5 text-3xl z-40">
          <Link href="#home">
              <BsChevronBarUp 
                className="cursor-none hover:text-gray-300" 
              />
          </Link>
      </div>
    </motion.div>
  )
}