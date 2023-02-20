import React, { useState } from "react"
import Link from 'next/link'
import {
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai'

import Fade from 'react-awesome-reveal'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); 
  return (
    <main className="sticky top-0 z-40 bg-white dark:bg-black">

          <div className="flex justify-between items-center py-4 px-4 max-w-6xl mx-auto">

            <div className="px-2 text-xl font-thin tracking-[10px]">
              <Link href="#home">
                <span> &lt;/ </span>
                <span className="text-green-400"> knlrvr</span>
                <span> &gt; </span>
              </Link>
            </div>

            <ul className="hidden md:flex dark:text-white text-lg font-thin gap-8">
              <li>
                <Link href="#home" 
                  className="cursor-none">
                  <span className="text-sm pr-2 hover:no-underline text-yellow-400"> 01 /</span>
                  <span className="hover:text-gray-600 hover:underline hover:underline-offset-4">Home</span>
                </Link>
              </li>
              <li>
                <Link href="#about"
                  className="cursor-none">
                  <span className="text-sm pr-2 hover:no-underline text-blue-400"> 02 /</span>
                  <span className="hover:text-gray-700 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">About</span>
                </Link>
              </li>
              <li>
                <Link href="#projects"
                  className="cursor-none">
                  <span className="text-sm pr-2 hover:no-underline text-red-400"> 03 /</span>
                  <span className="hover:text-gray-600 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="#contact"
                  className="cursor-none">
                  <span className="text-sm pr-2 hover:no-underline text-orange-400"> 04 /</span>
                  <span className="hover:text-gray-700 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">Contact</span>
                </Link>
              </li>
            </ul>

          </div>

          <div className="open absolute top-0 right-4 px-4 py-4"
            onClick={() => setIsNavOpen((prev) => !prev)} >
            <AiOutlineMenu className="text-3xl cursor-pointer text-black dark:text-white md:hidden"/>
          </div>

          <div className={isNavOpen ? "showMenuNav dark:bg-black" : "hideMenuNav"}> 

            <div className="close absolute top-0 right-4 px-4 py-4"
              onClick={() => setIsNavOpen(false)} >
                <AiOutlineClose className="text-3xl cursor-pointer dark:text-gray-300"/>
            </div>

            <Fade cascade>
            <ul onClick={() => setIsNavOpen(false)}
            className="flex flex-col justify-between min-h-[250px] dark:text-gray-300 text-5xl font-thin gap-16 mb-16">
              <li>
                <Link href="#home"
                  className="cursor-none">
                  <span className="text-xs pr-6 hover:no-underline text-yellow-400">01 /</span>
                  <span className="hover:text-gray-300 hover:underline hover:underline-offset-4">Home</span>
                </Link>
              </li>
              <li>
                <Link href="#projects"
                  className="cursor-none">
                  <span className="text-xs pr-6 hover:no-underline text-red-400">02 /</span>
                  <span className="hover:text-gray-300 hover:underline hover:underline-offset-4">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="#about"
                  className="cursor-none">
                  <span className="text-xs pr-6 hover:no-underline text-blue-400">03 /</span>
                  <span className="hover:text-gray-300 hover:underline hover:underline-offset-4">About</span>
                </Link>
              </li>
              <li>
                <Link href="#contact"
                  className="cursor-none">
                  <span className="text-xs pr-6 hover:no-underline text-orange-400">04 /</span>
                  <span className="hover:text-gray-300 hover:underline hover:underline-offset-4">Contact</span>
                </Link>
              </li>
            </ul>
            </Fade>

          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
      `}</style>

      </div>
    </main>
  );
}