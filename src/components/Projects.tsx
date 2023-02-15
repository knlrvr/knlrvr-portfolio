import React from 'react'
import Link from 'next/link'
import { 
  BsChevronDoubleRight,
  BsGithub
} from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'

const style ={
  viewBtn: `text-sm border border-gray-800 px-4 rounded-md text-gray-600
            hover:text-white hover:bg-gray-800 p-1 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white`,
  viewBtnTwo: `text-sm border border-gray-400 px-4 rounded-md text-gray-400
            hover:text-white hover:bg-gray-400 p-1 dark:hover:text-black`,
}

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className="flex flex-col relative h-screen max-w-3xl justify-center mx-auto items-center px-10">
        <h3 className="absolute top-16 uppercase tracking-widest text-sm text-gray-400">
            Recent Projects
        </h3>
        <p className="absolute px-10 top-24 tracking-widest text-sm font-thin text-gray-600 dark:text-gray-200">
            Click the project title to view it live, or click the Github icon to view the code!
        </p>

        <Fade triggerOnce>
        {/** projects container */}
        <div className="flex flex-col mt-8 md:mt-24 gap-8 md:gap-28">
          <Fade cascade triggerOnce>

          {/** 1 */}
          <div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-center text-lg tracking-[5px] hover:text-gray-300">
                  <Link href="https://abstract-knlrvr.vercel.app/"
                    className="cursor-none">
                    Abstract
                  </Link>
                </p>
                <div className="flex-grow px-3">
                  <hr className="bg-black border-0 h-px dark:bg-white" />
                </div>
                <Link href="https://github.com/knlrvr/abstract/" className="text-xl hover:text-gray-300 cursor-none">
                  <BsGithub />
                </Link>
              </div>
              <p className="font-thin">
                An e-commerce site for Abstract, a company specializing in concepts 
                related to materialism and consumerism.
              </p>
              <p className="text-xs font-thin mb-2 flex justify-end">
                <em>* This is satire.</em>
              </p>
              <div className="font-thin text-sm flex justify-between">
                <p>Next</p>
                <p>|</p>
                <p>Tailwind</p>
                <p>|</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          {/** 2 */}
          <div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-center text-lg tracking-[5px] hover:text-gray-300">
                  <Link href="https://knlrvr.github.io/ferd/"
                    className="cursor-none">
                    Ferd Automotive
                  </Link>
                </p>
                <div className="flex-grow px-3">
                  <hr className="bg-black border-0 h-px dark:bg-white" />
                </div>
                <Link href="https://github.com/knlrvr/ferd/" className="text-xl hover:text-gray-300 cursor-none">
                  <BsGithub />
                </Link>
              </div>
              <p className="font-thin mb-2">
                A Tesla website clone, remade to represent Ferd Automotive (Ford).
              </p>
              <div className="font-thin text-sm flex justify-between">
                <p>React</p>
                <p>|</p>
                <p>Redux</p>
                <p>|</p>
                <p>Styled Components</p>
              </div>
            </div>
          </div>

          {/** 3 */}
          <div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-center text-lg tracking-[5px] hover:text-gray-300">
                  <Link href="https://knlrvr.github.io/to-do"
                    className="cursor-none">
                    To Do List
                  </Link>
                </p>
                <div className="flex-grow px-3">
                  <hr className="bg-black border-0 h-px dark:bg-white" />
                </div>
                <Link href="https://github.com/knlrvr/to-do/" className="text-xl hover:text-gray-300 cursor-none">
                  <BsGithub />
                </Link>
              </div>
              <p className="font-thin mb-2">
                A to do app that uses local storage to save your name (user) and the tasks you add. 
                Color codes and categorizes your tasks based on input.
              </p>
              <div className="font-thin text-sm flex justify-between">
                <p>HTML</p>
                <p>|</p>
                <p>CSS</p>
                <p>|</p>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          </Fade>

          <Link href="https://github.com/knlrvr">
          <div className="flex justify-center items-center mt-2 space-x-4 text-gray-800 font-thin dark:text-gray-200 cursor-none">
              <p className="text-gray=">View More</p>
              <BsChevronDoubleRight />
          </div>
          </Link>

        </div>
        </Fade>
    </div>
  )
}