import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

import Fade from 'react-awesome-reveal'

export default function About() {
  return (
    <div className="flex justify-center items-center px-4 md:px-8 max-w-6xl mx-auto mb-16">
      <div className="border border-black w-full dark:border-white">
        
        <div className="font-thin px-6 mt-4">
          <span className="text-sm text-blue-400">02. </span>
          <span className="text-lg pl-4">About</span>
        </div>

        <div className="h-full px-8 md:pl-16 mt-8">
          <div className="flex flex-col justify-center md:flex-row md:justify-between items-center">
            <Fade cascade triggerOnce>
            <div className="left ">

            </div>
            <div className="right flex flex-col text-center md:text-right font-thin text-xl tracking-[10px] max-w-2xl mx-auto">
              <span className="">/knlrvr</span>
              <span className="text-gray-400 py-4">kane lariviere</span>
              <p className="text-sm tracking-tight md:ml-24 mb-16">
                I love to create things. I have a fierce passion for web development, 
                and a deep understanding that design drives everything. Because of this, I 
                strongly believe that accessibility and affordability are essential to maintaining 
                the universality of the web
                <br /><br />
                I have over two years of experience in building responsive, functional, and 
                successful sites and applications using modern technologies, leveraging creative 
                and analytical skills to provide performant solutions. I have an eternal passion 
                for all things tech and dedicate myself to continuous learning and improvement.
              </p>
            </div>
            </Fade>
          </div>
        </div>

      </div>
    </div>
  )
}