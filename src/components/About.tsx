import React from 'react'
import { Fade } from 'react-awesome-reveal'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen md:text-left md:flex-row
                    max-w-6xl px-6 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-widest text-sm text-gray-400">
            About
        </h3>

        {/** // REPLACE WITH SVG OR ANYTHING NOT ME LOL
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
          }}
          src="./kane.jpeg"
          className="flex-shrink-0 w-48 h-48 rounded-full object-fit mt-24 md:mt-2 md:w-64 md:h-64 ml-4"
        />
        */}
        <Fade triggerOnce>
          <div className="px-2 md:px-20">
              <p className="md:px-10 font-thin">
                <br />
                Hello! My name is <strong>Kane Lariviere</strong>. I&apos;m a software engineer 
                based in Charlotte, North Carolina.
                <br /><br />
                I love to create things. <strong>Anything</strong>. I have a fierce passion for 
                web development, and a deep understanding that design drives 
                <em> everything</em>. Because of this, I strongly believe that 
                <em> accessibility</em> and <em> affordability</em> are essential to maintaining 
                the universality of the web.
                <br /><br />
                When I&apos;m not building and designing while slouched over my computer, I love to 
                play video games, make music, and spend time with my family, all while 
                complaining about my neck and back pain.
              </p>

              <div className="flex flex-col items-center mt-4 font-thin space-y-2">
                <p className="font-semibold text-xs uppercase"> 
                  education 
                </p>
                <p> 
                  AS Applications Development, <em><strong>Gaston College</strong></em>, 2021 
                </p>
              </div>
              <div className="flex flex-col items-center mt-4 mb-16 font-thin space-y-2">
                <p className="font-semibold text-xs uppercase"> 
                  work experience 
                </p>
                <p> 
                  Full Stack Developer, <em><strong>Freelance</strong></em>, 2021 - Present
                </p>
              </div>

          </div>
        </Fade>
    </div>
  )
}