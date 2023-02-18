import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToTop from '@/components/ToTop'
import Cursor from '@/components/Cursor'
import Fade from 'react-awesome-reveal'
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram
} from 'react-icons/bs'

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
        <div className="flex flex-col md:flex-row justify-center max-w-5xl mx-auto px-4 mt-12 md:mt-32">
          
          <Fade>
            <div className="flex flex-col justify-center gap-4 px-4 md:max-w-3xl">

              {/** top */}
              <div className="text-xl">
                <div className="flex items-center">
                  <p>Hello! I&apos;m <span className="text-gray-400">Kane</span>!</p>
                  <div className="flex-grow px-3">
                    <hr className="bg-black border-0 h-px dark:bg-white" />
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <Fade cascade>
                    <BsGithub 
                      className="hover:text-gray-300" />
                    <BsLinkedin 
                      className="hover:text-gray-300" />
                    <BsTwitter 
                      className="hover:text-gray-300" />
                    <BsInstagram 
                      className="hover:text-gray-300" />
                    </Fade>
                  </div>
                </div>
                <div className="text-4xl py-2 titles">
                  <Fade cascade duration={1000}>
                  <p className="text-4xl">
                    Software Engineer.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Developer.
                  </p>
                  <p className="text-gray-400 dark:text-gray-500">
                    UI / UX Designer.
                  </p>
                  <p className="text-gray-300 dark:text-gray-600">
                  Artist. 
                  </p>
                  </Fade>
                </div>
              </div>

              {/** details */}
              <div className="font-thin">
                <p className="mb-2">
                  I love to create things. <strong>Anything</strong>. I have a fierce passion for web 
                  development, and a deep understanding that design drives everything. Because of this, 
                  I strongly believe that <em>accessibility</em> and <em>affordability</em> are essential 
                  to maintaining the universality of the web
                  <br /><br />
                  I have over two years of experience in building responsive, functional, and 
                  successful sites and applications using modern technologies, leveraging 
                  creative and analytical skills to provide performant solutions. 
                  I have an eternal passion for all things tech and dedicate myself to 
                  continuous learning and improvement.
                  <br /><br />
                </p>
                <div className="flex md:hidden items-center">
                  <div className="flex-grow pr-4">
                    <hr className="bg-black border-0 h-px dark:bg-white" />
                  </div>
                  <div className="flex space-x-8 ">
                    <Fade cascade delay={1000}>
                    <BsGithub 
                      className="hover:text-gray-300" />
                    <BsLinkedin 
                      className="hover:text-gray-300" />
                    <BsTwitter 
                      className="hover:text-gray-300" />
                    <BsInstagram 
                      className="hover:text-gray-300" />
                    </Fade>
                  </div>
                  <div className="flex-grow pl-4">
                    <hr className="bg-black border-0 h-px dark:bg-white" />
                  </div>
                </div>
              </div>

            </div>
          </Fade>
          
        </div>
      </section>

    </div>
  )
}