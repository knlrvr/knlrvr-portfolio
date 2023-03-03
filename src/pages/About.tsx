import Head from 'next/head'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

import Fade from 'react-awesome-reveal'
import { 
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsArrowRight,
} from 'react-icons/bs'

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white h-screen">
      <Head>
        <title>Kane Lariviere</title>
        <meta name="description" content="About | Kane Lariviere" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewCursor />
      <Header />
      <Footer />

      {/** page */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mt-12 ">
          <h1 className=" text-gray-500 text-lg uppercase tracking-[10px] text-center md:text-left px-6">about &bull;</h1>
        </div>

        <div className="flex flex-col mt-24 h-screen px-6 max-w-4xl">
          <Fade cascade>
            <p className="text-center md:text-left mb-8 text-gray-500 uppercase text-sm tracking-[10px]">kane lariviere</p>
            <p className="font-thin text-center md:text-left">
              I love to create things. I have a fierce passion for web development, 
              and a deep understanding that design drives everything. Because of this, I 
              strongly believe that accessibility and affordability are essential to maintaining 
              the universality of the web.
              <br/><br />
              I have over two years of experience in building responsive, functional, and 
              successful sites and applications using modern technologies, leveraging creative 
              and analytical skills to provide performant solutions. I have an eternal passion 
              for all things tech and dedicate myself to continuous learning and improvement.
            </p>

            <div className="text-left mt-12 flex justify-evenly md:justify-start md:space-x-24 font-thin text-lg">
              <Link href="https://github.com/knlrvr">
                <BsGithub className="hover:text-gray-500" />
              </Link>
              <Link href="https://linkedin.com/in/kane-lariviere">
                <BsLinkedin className="hover:text-gray-500" />
              </Link>
              <Link href="https://twitter.com/knlrvr">
                <BsTwitter className="hover:text-gray-500" />
              </Link>
              <Link href="https://instagram.com/kanelarivieresucks">
                <BsInstagram className="hover:text-gray-500" />
              </Link>
            </div>

            <Link href="/Contact"
              className="flex justify-center md:justify-start items-center mt-12 md:mt-24 text-sm space-x-4 hover:text-blue-400 hover:underline underline-offset-8">

              <span>Contact Me</span>
              <BsArrowRight />
            </Link>
          
          </Fade>
        </div>


      </div>
    </div>
    
  )
}
