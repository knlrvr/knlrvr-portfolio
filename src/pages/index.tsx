import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-awesome-reveal'
import { 
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll bg-white cursor-none">
      <Head>
        <title>Kane Lariviere</title>

        {/** REMEMBER META!!!!!! */}

      </Head>
      <NewCursor />
      <Header />
      <Footer />

      {/** Page */}
      <section id="" className="snap-start">
        <div className="h-screen flex flex-col relative md:flex-row justify-center items-center">
          <Image
            src="https://images.unsplash.com/photo-1674509597419-c75d0c27b1be"
            width="2000"
            height="0"
            alt=""
            className="object-cover h-screen"
          />
          <div className="flex flex-col justify-center absolute text-black h-1/2 px-10 mt-32">
            <Fade>
              <div className="flex justify-end">   
                <h2 className="text-6xl md:text-8xl uppercase font-thin tracking-[10px] text-end mt-12  text-white">
                  kane
                </h2>
              </div>
              <div>
                <h3 className="text-6xl md:text-8xl uppercase font-thin tracking-[10px] text-end mb-4 text-black">
                  Lariviere
                </h3>
              </div>
            
            {/** 
            <h1 className="text-3xl md:text-4xl text-center uppercase font-thin text-white">
                <span>{text}</span>
                <Cursor cursorColor="#fff;" />
            </h1>
             */}

              <h1 className="text-xl text-center uppercase font-thin text-white">
                software engineer & full stack developer
              </h1>
            </Fade>
             
            <Fade>
            <div className="text-lg mt-12 text-white flex justify-between px-4">
              <Link href="https://github.com/knlrvr/"
                className="cursor-none hover:text-black transition duration-300">
                <BsGithub />
              </Link>
              <Link href="https://linkedin.com/in/kane-lariviere/"
                className="cursor-none hover:text-black transition duration-300">
                <BsLinkedin />
              </Link>
              <Link href="https://twitter.com/knlrvr/"
                className="cursor-none hover:text-black transition duration-300">
                <BsTwitter />
              </Link>
              <Link href="https://instagram.com/kanelarivieresucks/"
                className="cursor-none hover:text-black transition duration-300">
                <BsInstagram />
              </Link>
            </div>
            </Fade>
          </div>
        </div>
      </section>

    </div>
  )
}
