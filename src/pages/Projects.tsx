import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToTop from '@/components/ToTop'
import Cursor from '@/components/Cursor'
import {
  BsBoxArrowUpRight,
  BsGithub,
  BsArrowRight
} from 'react-icons/bs'
import Fade from 'react-awesome-reveal'
import Image from 'next/image'

export default function Home() {

  return (
    <div className="h-screen snap-y overflow-scroll bg-white dark:bg-black dark:text-gray-100 cursor-none">
      <Head>
        <title>Kane Lariviere</title>

        {/** REMEMBER META!!!!!! */}

      </Head>
      <Cursor />
      <Header />
      <ToTop />
      <Footer />

      {/** Page */}
      <section id="" className="snap-center">
        <Fade>

          {/** 
           * viewports separated for better readability. 
           * mostly for myself and organziing my thoughts. 
           * will merge. but maybe not. but maybe.
           * 
           * i'm currently having a crisis because I turned 
           * this into a philosophical question rather than a 
           * question about readability and optimization. 
           * 
           * i will merge them... but only when i'm ready. 
           */}

          {/** MD & + VIEW PORT */}
          <div className="hidden md:grid grid-cols-6 grid-rows-6 justify-center gap-4 px-8 h-screen items-center max-w-6xl mx-auto">            
            
            {/** 1 */}
            <div className="row-start-2 col-start-1 row-span-2 col-span-3 border border-black dark:border-white text-center w-full h-full relative group">
              <Image 
                src="/abs.png"
                width="1000"
                height="0"
                alt=""
                className="hidden md:block md:group-hover:opacity-10 transition duration-300 object-fit h-full object-fit"
              />
              <div className="text-black dark:text-white absolute top-1/4 left-0 right-0 hidden group-hover:block px-4">
                <div className="flex items-center space-x-4">
                  <p className="font-thin text-2xl">Abstract</p>
                  <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                  <Link href="https://github.com/knlrvr/abstract">
                    <BsGithub 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                  <Link href="https://abstract-knlrvr.vercel.app/">
                    <BsBoxArrowUpRight 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                </div>
                <p className="font-thin mt-4 h-28">
                  An e-commerce site for Abstract, a company specializing in concepts related to materialism and consumerism.
                </p>
                <div className="flex justify-between px-2 font-thin text-gray-600 dark:text-gray-400">
                  <p>Next</p>
                  <p> | </p>
                  <p>Tailwind</p>
                  <p> | </p>
                  <p>MongoDB</p>
                </div>
              </div>
            </div>

            {/** 3 */}
            <div className="row-start-4 col-start-1 row-span-2 col-span-3 border border-black dark:border-white text-center w-full relative h-full group">
              <Image 
                src="/vt.png"
                width="1000"
                height="0"
                alt=""
                className="hidden md:block md:group-hover:opacity-10 transition duration-300 object-fit h-full object-fit"
              />
              <div className="text-black dark:text-white absolute top-1/4 left-0 right-0 hidden group-hover:block px-4">
                <div className="flex items-center space-x-4">
                  <p className="font-thin text-2xl">Vault-Tec Industries</p>
                  <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                  <Link href="https://github.com/knlrvr/vault-tec">
                    <BsGithub 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                  <Link href="https://knlrvr.github.io/vault-tec">
                    <BsBoxArrowUpRight 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                </div>
                <p className="font-thin mt-4 h-28">
                  If Vault-Tec was real, existed in 2022, and asked me to make a &quot;simple&quot; and &quot;modern&quot; website for them.
                </p>
                <div className="flex justify-between px-2 font-thin text-gray-600 dark:text-gray-400">
                  <p>React</p>
                  <p> | </p>
                  <p>CSS</p>
                  <p> | </p>
                  <p> Framer Motion</p>
                </div>
              </div>
            </div>

            {/** 2 */}
            <div className="col-start-4 row-start-2 col-span-3 row-span-2 border border-black dark:border-white text-center w-full relative h-full group">
              <Image 
                src="/ferd.png"
                width="1000"
                height="0"
                alt=""
                className="hidden md:block md:group-hover:opacity-10 transition duration-300 object-fit h-full object-fit"
              />
              <div className="text-black dark:text-white absolute top-1/4 left-0 right-0 hidden group-hover:block px-4">
                <div className="flex items-center space-x-4">
                  <p className="font-thin text-2xl">Ferd Automotive</p>
                  <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                  <Link href="https://github.com/knlrvr/ferd/">
                    <BsGithub 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                  <Link href="https://knlrvr.github.io/ferd/">
                    <BsBoxArrowUpRight 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                </div>
                <p className="font-thin mt-4 h-28">
                  A Tesla website clone, remade to represent Ferd Automotive (Ford).
                </p>
                <div className="flex justify-between px-2 font-thin text-gray-600 dark:text-gray-400">
                  <p>React</p>
                  <p> | </p>
                  <p>Redux</p>
                  <p> | </p>
                  <p>Styled Components</p>
                </div>
              </div>
            </div>

            {/** 4 */}
            <div className="col-start-4 row-start-4 col-span-3 row-span-2 border border-black dark:border-white text-center w-full relative h-full group">
              <Image 
                src="/new.png"
                width="1000"
                height="0"
                alt=""
                className="hidden md:block md:group-hover:opacity-10 transition duration-300 object-fit h-full object-fit"
              />
              <div className="text-black dark:text-white absolute top-1/4 left-0 right-0 hidden group-hover:block px-4">
                <div className="flex items-center space-x-4">
                  <p className="font-thin text-2xl">Personal Portfolio</p>
                  <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                  <Link href="https://github.com/knlrvr/knlrvr-portfolio">
                    <BsGithub 
                      className="cursor-none text-xl hover:text-gray-400" />
                  </Link>
                </div>
                <p className="font-thin mt-4 h-28">
                  Where you are now! 
                </p>
                <div className="flex justify-between px-2 font-thin text-gray-600 dark:text-gray-400">
                  <p>TypeScript</p>
                  <p> | </p>
                  <p>Next</p>
                  <p> | </p>
                  <p>Tailwind</p>
                  <p> | </p>
                  <p>Framer Motion</p>
                </div>
              </div>
            </div>

            <div className="items-center col-start-5 row-start-6 col-span-2 w-full h-1/2">
              <Link href="https://github.com/knlrvr/">
                <button className="flex items-center tracking-[5px] font-thin space-x-6 text-sm uppercase hover:text-gray-400">
                    <p>
                      View More
                    </p>
                    <BsArrowRight 
                      className="" />
                </button>
              </Link>
            </div>
          </div>
        </Fade>

        {/** MOBILE VIEWPORT */}
        <div className="grid grid-cols-1 grid-rows-4 md:hidden gap-1 px-4 h-screen items-center py-16">

          {/** 1 */}
          <div className="row-start-1 border border-black dark:border-white text-center w-full h-full relative group">
            <Image 
              src="/abs.png"
              width="1000"
              height="0"
              alt=""
              className="opacity-20 object-fit h-full object-fit"
            />
            <div className="text-black dark:text-white absolute top-2 left-0 right-0 px-4">
              <div className="flex items-center space-x-4">
                <p className="font-thin text-2xl">Abstract</p>
                <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                <Link href="https://github.com/knlrvr/abstract/">
                  <BsGithub 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
                <Link href="https://abstract-knlrvr.vercel.app/">
                  <BsBoxArrowUpRight 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
              </div>
              <p className="font-thin mt-4 h-28 description">
                An e-commerce site for Abstract, a company specializing in concepts related to materialism and consumerism.
              </p>
              <div className="text-black dark:text-white absolute bottom-2 left-0 right-0 px-4 flex justify-between font-thin details">
                <p>Next</p>
                <p> | </p>
                <p>Tailwind</p>
                <p> | </p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          {/** 2 */}
          <div className="row-start-2 border border-black dark:border-white text-center w-full h-full relative group">
            <Image 
              src="/ferd.png"
              width="1000"
              height="0"
              alt=""
              className="opacity-20 object-fit h-full object-fit"
            />
            <div className="text-black dark:text-white absolute top-2 left-0 right-0 px-4">
              <div className="flex items-center space-x-4">
                <p className="font-thin text-2xl">Ferd Automotive</p>
                <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                <Link href="https://github.com/knlrvr/ferd/">
                  <BsGithub 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
                <Link href="https://knlrvr.github.io/ferd/">
                  <BsBoxArrowUpRight 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
              </div>
              <p className="font-thin mt-4 h-28 description">
                A Tesla website clone, remade to represent Ferd Automotive (Ford).
              </p>
              <div className="text-black dark:text-white absolute bottom-2 left-0 right-0 px-4 flex justify-between font-thin details">
                <p>React</p>
                <p> | </p>
                <p>Redux</p>
                <p> | </p>
                <p>Styled Components</p>
              </div>
            </div>
          </div>
        
          {/** 3 */}
          <div className="row-start-3 border border-black dark:border-white text-center w-full h-full relative group">
            <Image 
              src="/vt.png"
              width="1000"
              height="0"
              alt=""
              className="opacity-20 object-fit h-full object-fit"
            />
            <div className="text-black dark:text-white absolute top-2 left-0 right-0 px-4">
              <div className="flex items-center space-x-4">
                <p className="font-thin text-2xl">Vault-Tec Industries</p>
                <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                <Link href="https://github.com/knlrvr/vault-tec">
                  <BsGithub 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
                <Link href="https://knlrvr.github.io/vault-tec">
                  <BsBoxArrowUpRight 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
              </div>
              <p className="font-thin mt-4 h-28 description">
                If Vault-Tec was real, existed in 2022, and asked me to make a &quot;simple&quot; and &quot;modern&quot; website for them.
              </p>
              <div className="text-black dark:text-white absolute bottom-2 left-0 right-0 px-4 flex justify-between font-thin details">
                <p>React</p>
                <p> | </p>
                <p>CSS</p>
                <p> | </p>
                <p>Framer Motion</p>
              </div>
            </div>
          </div>

          {/** 4 */}
          <div className="row-start-4 border border-black dark:border-white text-center w-full h-full relative group">
            <Image 
              src="/new.png"
              width="1000"
              height="0"
              alt=""
              className="opacity-20 object-fit h-full object-fit"
            />
            <div className="text-black dark:text-white absolute top-2 left-0 right-0 px-4">
              <div className="flex items-center space-x-4">
                <p className="font-thin text-2xl">Personal Portfolio</p>
                <hr className="bg-black border-0 h-px dark:bg-white flex-grow" />
                <Link href="https://github.com/knlrvr/knlrvr-portfolio">
                  <BsGithub 
                    className="cursor-none text-xl hover:text-gray-400" />
                </Link>
              </div>
              <p className="font-thin mt-4 h-28 description">
                Where you are now!
              </p>
              <div className="text-black dark:text-white absolute bottom-2 left-0 right-0 px-4 flex justify-between font-thin details">
                <p>Next</p>
                <p> | </p>
                <p>Tailwind</p>
                <p> | </p>
                <p>Framer Motion</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    
    </div>

  )
}