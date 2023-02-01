import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ToTop from '@/components/ToTop'
export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory z-0 overflow-scroll dark:bg-black dark:text-gray-100">
      <Head>
        <title>Kane Lariviere</title>

        {/** REMEMBER META!!!!!! */}

      </Head>

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
