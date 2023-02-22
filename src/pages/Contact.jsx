import Head from 'next/head'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

import { 
  BsChevronRight,
  BsArrowUpRight 
} from 'react-icons/bs'
import Fade from 'react-awesome-reveal'

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white h-screen">
      <Head>
        <title>Kane Lariviere</title>
        {/** meta */}

      </Head>

      <NewCursor />
      <Header />
      <Footer />

      {/** page */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mt-12 ">
          <h1 className=" text-gray-500 text-lg uppercase tracking-[10px] text-center md:text-left px-6">contact &bull; </h1>
        </div>

        <div className="flex flex-col mt-24 h-screen px-6">
          <Fade cascade>
            <p className="font-thin text-center md:text-left">Feel free to reach out to me directly at <br />
            <span className="hover:text-blue-400 hover:underline underline-offset-4 text-2xl font-mono">
              <Link href="mailto:hello@knlrvr.com">
                hello@knlrvr.com
              </Link>
            </span> <br />
              or send me a message on any of the platforms below!
            </p>

            <div className="text-left mt-32 flex flex-col font-thin space-y-4 text-lg">
      
              <p>
                <Link href="https://github.com/knlrvr"
                  className="hover:text-gray-500 flex items-center group space-x-12" >
                  <BsChevronRight 
                    className="hidden group-hover:block"/>
                  Github
                  <BsArrowUpRight />
                </Link>
              </p>
              <p>
                <Link href="https://linkedin.com/in/kane-lariviere"
                  className="hover:text-gray-500 flex items-center group space-x-8" >
                  <BsChevronRight 
                    className="hidden group-hover:block"/>
                  LinkedIn
                  <BsArrowUpRight />
                </Link>
              </p>
              <p>
                <Link href="https://twitter.com/knlrvr"
                  className="hover:text-gray-500 flex items-center group space-x-12" >
                  <BsChevronRight 
                    className="hidden group-hover:block"/>
                  Twitter
                  <BsArrowUpRight />
                </Link>
              </p>
              <p>
                <Link href="https://instagram.com/kanelarivieresucks"
                  className="hover:text-gray-500 flex items-center group space-x-4" >
                  <BsChevronRight 
                    className="hidden group-hover:block"/>
                  Instagram
                  <BsArrowUpRight />
                </Link>
              </p>
            </div>

          </Fade>
        </div>
      </div>
    </div>
    
  )
}