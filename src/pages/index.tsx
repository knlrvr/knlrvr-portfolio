import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import NewCursor from '@/components/Cursor'
import ToTop from '@/components/ToTop'

import Fade from 'react-awesome-reveal'

export default function Home() {
  return (
    <div className="bg-white dark:bg-black h-screen snap-y snap-mandatory overflow-scroll cursor-none dark:text-white">
      <Head>
        <title>Kane Lariviere</title>
        {/** meta */}

      </Head>

      <NewCursor />
      <Header />
      <Footer />
      <ToTop />
      {/** page */}

      {/** Hero */}
      <section id="home" className="">
        <Hero />
      </section>

      {/** About */}
      <section id="about" className="">
        <About />
      </section>

      {/** Projects */}
      <section id="projects" className="">
        <Projects />
      </section>

      {/** Contact */}
      <section id="contact" className="">
        <Contact />
      </section>

    </div>
  )
}3