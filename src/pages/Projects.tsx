import Head from 'next/head'
import Link from 'next/link'

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
        {/** meta */}

      </Head>

      <NewCursor />
      <Header />
      <Footer />

      {/** page */}
      <div className="flex flex-col mt-12 max-w-6xl mx-auto">
        <h1 className="px-6 text-gray-500 text-lg uppercase tracking-[5px] text-center md:text-left">recent projects &bull; </h1>
      </div>

      <div className="px-6 flex flex-col gap-8 font-thin justify-center items-start py-16 max-w-3xl mx-auto">
          
        {/** 1 */}
        <div className="container mx-auto">
          <div>
            <div className="bg-gray-100 rounded p-6 md:flex justify-between">
              <div>
                <Link href="https://abstract-knlrvr.vercel.app" target="_blank" className="flex items-center space-x-4 hover:text-gray-500">
                  <h4 className="text-2xl font-thin tracking-[5px]">
                    Abstract
                  </h4>
                  <BsArrowUpRight />
                </Link>
                <p className="my-2 text-lg">
                  An e-commerce site for Abstract, a company specializing in concepts related to materialism and consumerism.
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    React.JS
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    Next.js
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    Tailwind CSS
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    MongoDB
                  </div>
                </div>
              </div>
              <div className="text-right md:ml-8 flex justify-end items-center mt-4 md:mt-0 space-x-8 px-2 text-2xl">
                <Link href="https://github.com/knlrvr/abstract">
                  <BsGithub 
                    className="hover:text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/** 2 */}
        <div className="container mx-auto">
          <div>
            <div className="bg-gray-100 rounded p-6 border border-gray-300 md:flex justify-between">              <div>
                <Link href="https://laravel-notification-channels.com/" target="_blank" className="flex items-center space-x-4 hover:text-gray-500">
                  <h4 className="text-2xl font-thin tracking-[5px]">
                    Ferd Automotive
                  </h4>
                  <BsArrowUpRight />
                </Link>
                <p className="my-2 text-lg">
                  A Tesla website clone, remade to represent Ferd Automotive (Ford).
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    React.js
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    Redux Toolkit
                  </div> 
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    Styled Components
                  </div>
                </div>
              </div>
              <div className="text-right md:ml-8 flex justify-end items-center mt-4 md:mt-0 space-x-8 px-2 text-2xl">
                <Link href="https://github.com/knlrvr/ferd">
                  <BsGithub 
                    className="hover:text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/** 3 */}
        <div className="container mx-auto">
          <div>
            <div className="bg-gray-100 rounded p-6 border border-gray-300 md:flex justify-between">

              <div>
                <Link href="https://knlrvr.github.io/fake" target="_blank" className="flex items-center space-x-4 hover:text-gray-500">
                  <h4 className="text-2xl font-thin tracking-[5px]">
                    FAKE Company
                  </h4>
                  <BsArrowUpRight />
                </Link>
                <p className="my-2 text-lg">
                  A landing page for FAKE, &quot;a company that does not exist.&quot;
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    HTML
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    CSS
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    JavaScript
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    CSS Animations
                  </div>
                </div>
              </div>
              <div className="text-right md:ml-8 flex justify-end items-center mt-4 md:mt-0 space-x-8 px-2 text-2xl">
                <Link href="https://github.com/knlrvr/fake">
                  <BsGithub 
                    className="hover:text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/** 4 */}
        <div className="container mx-auto">
          <div>
            <div className="bg-gray-100 rounded p-6 border border-gray-300 md:flex justify-between">
              <div>
                <Link href="https://knlrvr.github.io/REST-Countries" target="_blank" className="flex items-center space-x-4 hover:text-gray-500">
                  <h4 className="text-2xl font-thin tracking-[5px]">
                    REST Countries
                  </h4>
                  <BsArrowUpRight />
                </Link>
                <p className="my-2 text-lg">
                  My REST Countries API solution.
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    HTML
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    CSS
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    JavaScript
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider bg-blue-300 inline-block px-2 py-1 rounded mr-2">
                    REST API
                  </div>
                </div>
              </div>
              <div className="text-right md:ml-8 flex justify-end items-center mt-4 md:mt-0 space-x-8 px-2 text-2xl">
                <Link href="https://github.com/knlrvr/REST-Countries">
                  <BsGithub 
                    className="hover:text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}
