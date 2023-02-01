import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronDoubleRight } from 'react-icons/bs'

const style ={
  viewBtn: `text-sm border border-gray-800 px-4 rounded-md text-gray-600
            hover:text-white hover:bg-gray-800 p-1 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white`,
  viewBtnTwo: `text-sm border border-gray-400 px-4 rounded-md text-gray-400
            hover:text-white hover:bg-gray-400 p-1 dark:hover:text-black`,
}

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className="flex flex-col relative h-screen max-w-3xl justify-center mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-widest text-sm text-gray-400">
            Recent Projects
        </h3>

        {/** projects container */}
        <div className="flex flex-col mt-20 md:mt-24 gap-4 md:gap-24">

          {/** project 1 */}
          <div className="flex flex-col md:flex-row items-center mb-4">
            {/** img container */}
            <div>
              <Image
                src="/abs.png"
                width="2000"
                height="0"
                alt="abstract"
                className="max-w-xs px-20 md:px-8"
              />
            </div>

            {/** info container */}
            <div className="flex flex-col">
              <p className="tracking-widest text-center">Abstract</p>
              <p className="font-thin px-4">
                An e-commerce site for Abstract, a company specializing in 
                concepts related to materialism and consumerism.
              <br />
              <em className="text-xs">* This is satire</em>.
              </p>
              <div className="flex justify-between px-4 text-sm text-gray-500 font-thin dark:text-gray-300">
                <p>Next</p>
                <p>|</p>
                <p>Tailwind</p>
                <p>|</p>
                <p>MongoDB</p>
              </div>
              <div className="flex justify-center space-x-24 px-4 mt-4 md:py-3">
                <div className={style.viewBtn}>
                  <Link href="https://abstract-knlrvr.vercel.app/">
                    View Live
                  </Link>
                </div>
                <div className={style.viewBtnTwo}>
                  <Link href="https://github.com/knlrvr/abstract">
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/** project 2 */}
          <div className="flex flex-col md:flex-row items-center mb-4">
            {/** img container */}
            <div>
              <Image
                src="/ferd.png"
                width="2000"
                height="0"
                alt="abstract"
                className="max-w-xs px-20 md:px-8"
              />
            </div>

            {/** info container */}
            <div className="flex flex-col">
              <p className="tracking-widest text-center">Ferd Automotive</p>
              <p className="font-thin px-4">
                A Tesla website clone, remade to represent Ferd Automotive (Ford).
              </p>
              <div className="flex justify-between px-4 mt-2 text-sm text-gray-500 font-thin dark:text-gray-300">
                <p>React</p>
                <p>|</p>
                <p>Redux</p>
                <p>|</p>
                <p>Styled Components</p>
              </div>
              <div className="flex justify-center space-x-24 px-4 mt-4 md:py-3">
                <div className={style.viewBtn}>
                  <Link href="https://knlrvr.github.io/ferd/">
                    View Live
                  </Link>
                </div>
                <div className={style.viewBtnTwo}>
                  <Link href="https://github.com/knlrvr/ferd/">
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="https://github.com/knlrvr">
          <div className="flex justify-center mt-4 items-center space-x-4 text-gray-800 font-thin dark:text-gray-200">
              <p>View More</p>
              <BsChevronDoubleRight />
          </div>
          </Link>

        </div>

    </div>
  )
}