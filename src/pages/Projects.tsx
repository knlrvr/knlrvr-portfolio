import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

import {
  BsGithub,
  BsArrowUpRight
} from 'react-icons/bs'
import Fade from 'react-awesome-reveal'

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white h-screen overflow-x-scroll">
      <Head>
        <title>Kane Lariviere</title>
        <meta name="description" content="Projects | Kane Lariviere" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewCursor />
      <Header />
      <Footer />

      {/** page */}
      <div className="flex flex-col mt-12 max-w-6xl mx-auto">
        <h1 className="px-6 text-gray-500 text-lg uppercase tracking-[5px] text-center md:text-left">recent projects &bull; </h1>
      </div>
          
      <div className="mt-12 p-6">

        {/** 1 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-6xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-4">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/abs.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="p-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
            ABSTRACT Store
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/abstract" target="_blank">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            <Link href="https://github.com/knlrvr/abstract" target="_blank">
              <BsArrowUpRight
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            An e-commerce site for Abstract, a company specializing in concepts related to materialism and consumerism.
          </div> 
          <div className="flex flex-wrap justify-evenly items-center col-span-2 pb-4 px-4">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
              alt="react" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" 
              alt="nextjs" 
              width="40" 
              height="40"
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
              alt="tailwind" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" 
              alt="mongodb" 
              width="50" 
              height="50" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-6xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-4">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/workout2.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="p-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
            Workout Tracker
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/workout-tracker" target="_blank">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            <Link href="https://workout-tracker-cd97a.web.app/" target="_blank">
              <BsArrowUpRight
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            A workout tracker that allows you to create, update or delete any entries. 
            This tracks workout name, group (ex. legs, chest, etc), sets and reps. 
          </div> 
          <div className="flex flex-wrap justify-evenly items-end col-span-2 pb-4 px-4">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
              alt="react" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
              alt="tailwind" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" 
              alt="firebase" 
              width="40" 
              height="40"
              className="md:grayscale group-hover:filter-none transition duration-300"
            /> 
          </div>
        </div>
        
        {/* 3 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-6xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-4">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/sheep.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="p-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
            sheepBot
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/sheepBot" target="_blank">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            A simple discord bot made with Node.js & discord.js. This bot currently has two commands. 
            /sheep will return a bleat, and /lessons will return a random bleat from an array and a random 
            translation from an array.
          </div> 
          <div className="flex flex-wrap justify-evenly items-end col-span-2 pb-4 px-4">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
              alt="react" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
          </div>
        </div>

        {/** 4 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-6xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-4">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/react-notes.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="px-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
            React Notes
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/react-notes" target="_blank">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            <Link href="https://react-notes-one.vercel.app/" target="_blank">
              <BsArrowUpRight
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="p-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            A notes app built with React. Features include creating, updating, or deleting notes, search bar for easily finding
            notes, and a button to toggle between light/dark mode!
          </div> 
          <div className="flex flex-wrap justify-evenly items-end col-span-2 pb-4 px-4 group">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
              alt="react" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" 
              alt="css3" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
          </div>
        </div>

        {/** 5 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-6xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-12">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/portfolio.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter md:grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="p-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
              Personal Portfolio
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/knlrvr-portfolio" target="_blank">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            Where you are now!
          </div> 
          <div className="flex flex-wrap justify-evenly items-end col-span-2 pb-4 px-4">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
              alt="react" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" 
              alt="nextjs" 
              width="40" 
              height="40"
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
              alt="tailwind" 
              width="40" 
              height="40" 
              className="md:grayscale group-hover:filter-none transition duration-300"
            />
          </div>
        </div>


      </div>
    </div>
  )
}

