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
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-5xl mx-auto
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
            <Link href="https://github.com/knlrvr/abstract">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            <Link href="https://abstract-knlrvr.vercel.app">
              <BsArrowUpRight
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            An e-commerce site for Abstract, a company specializing in concepts related to materialism and consumerism.
          </div> 
          <div className="flex flex-wrap gap-2 items-end col-span-2 pb-4 px-4">
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              React.JS
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              Next.js
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              Tailwind CSS
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              MongoDB
            </div>
          </div>
        </div>

        {/** 2 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-5xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-4">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/ferd.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="px-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
            Ferd Automotive
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/ferd">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            <Link href="https://knlrvr.github.io/ferd">
              <BsArrowUpRight
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="p-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            A Tesla website clone, remade to represent Ferd Automotive (Ford).
          </div> 
          <div className="flex flex-wrap gap-2 items-end col-span-2 pb-4 px-4">
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              React.JS
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              React Redux
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              Redux Toolkit
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              Styled Components
            </div>
          </div>
        </div>

        {/** 3 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-5xl mx-auto
                        border border-gray-300 rounded-xl shadow-md md:shadow-none bg-gray-100 mb-4">
          <div className="hidden col-span-2 row-span-3 w-full h-full md:flex max-w-sm group">
            <Image 
              src="/waves.png"
              width="1000"
              height="0"
              alt=""
              className="rounded-l-xl filter grayscale group-hover:filter-none transition duration-300"
              />
          </div>
          <div className="p-4 row-span-1 col-span-2 w-full h-full flex justify-between items-center font-thin text-xl tracking-[10px]">
            FAKE Company
            <div className="flex space-x-6">
            <Link href="https://github.com/knlrvr/waves">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            <Link href="https://knlrvr.github.io/waves">
              <BsArrowUpRight
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            A landing page for FAKE, &quot;a company that does not exist.&quot;
            This site was an experiment for CSS Animations.
          </div> 
          <div className="flex flex-wrap gap-2 items-end col-span-2 pb-4 px-4">
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              HTML
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              CSS
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              JavaScript
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              CSS Animations
            </div>
          </div>
        </div>

        {/** 4 */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 group max-w-5xl mx-auto
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
            <Link href="https://github.com/knlrvr/knlrvr-portfolio">
              <BsGithub 
                className="hover:text-gray-500" />
            </Link>
            </div>
          </div>
          <div className="px-4 col-span-2 row-span-1 w-full h-full flex text-left font-thin">
            Where you are now!
          </div> 
          <div className="flex flex-wrap gap-2 items-end col-span-2 pb-4 px-4">
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              react.js
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              Next.js
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              TypeScript
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              Tailwind CSS
            </div>
            <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 md:bg-gray-300 inline-block px-2 py-1 rounded
                            group-hover:bg-blue-300 transition duration-300">
              CSS Animations
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
