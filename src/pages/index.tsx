import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ToTop from '@/components/ToTop'
import Cursor from '@/components/Cursor'

export default function Home() {

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll dark:bg-black dark:text-gray-100 cursor-none">
      <Head>
        <title>Kane Lariviere</title>

        {/** REMEMBER META!!!!!! */}

      </Head>
      <Cursor />

      {/** Header */}
      <Header />

      {/** Top Button bc Stephen requested it */}
      <ToTop />

      {/** Hero */}
      <section id="home" className="snap-start">
        <Hero />
      </section>

      {/** About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/** Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/** Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/** Contact */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      {/** Footer */}
      <Footer />

    </div>
  )
}
