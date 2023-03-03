import Head from 'next/head'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

import Fade from 'react-awesome-reveal'
import {
  BsArrowRight
} from 'react-icons/bs'

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white h-screen">
      <Head>
        <title>Kane Lariviere</title>
        <meta name="description" content="Portfolio | Kane Lariviere" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <NewCursor />
      <Header />
      <Footer />

      {/** page */}
      <div className="content flex flex-col justify-center items-center h-screen">
        <Fade cascade>
          <h2 className="text_shadows font-outline-2 pl-2">welcome!</h2>
          <h3 className="text-xl font-thin uppercase text-black tracking-[10px] mb-3">
            kane lariviere
          </h3>
          <span className="text-gray-500 text-sm uppercase">
            software engineer. developer. designer.
          </span>
          <div className="py-16 flex space-x-14">
            <div>
              <Link href="/Projects"
                className="items-center flex space-x-2 font-thin hover:text-blue-400 hover:underline underline-offset-8">
                <span>Recent Projects</span>
                <BsArrowRight /> 
              </Link>
            </div>
            <div>
              <Link href="/About"
                className="items-center flex space-x-2 font-thin hover:text-blue-400 hover:underline underline-offset-8">
                <span>About Me</span>
                <BsArrowRight /> 
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
