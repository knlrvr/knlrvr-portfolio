import Link from 'next/link'
import Head from 'next/head'

import Fade from 'react-awesome-reveal'
import {
  BsGithub,
  BsArrowUpRight
} from 'react-icons/bs'

export default function Projects() {
  return (
    <div className="flex justify-center items-center px-4 md:px-8 max-w-6xl mx-auto mb-16">
      <div className="w-full">
        <div className="font-thin px-6 mb-4">
          <span className="text-sm text-red-400">03. </span>
          <span className="text-lg pl-4">Recent Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 mb-8">
          
          <Fade cascade triggerOnce>
          {/** 1 */}
            <div className="relative group overflow-hidden m-auto border border-black dark:border-white text-black dark:text-white">
              <img className="object-cover w-full h-full transform duration-700 group-hover:opacity-10" 
                src="/abs.png" 
              />
              <div className="absolute w-full h-full opacity-10 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
              <div className="absolute w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div className="absolute w-full flex place-content-center">
                    <p className="uppercase font-thin text-2xl text-center mt-10 group-hover:mt-6 hidden group-hover:block tracking-widest">
                      Abstract
                    </p>
                  </div>
                <div className="absolute w-full flex place-content-center mt-24">
                  <p className="font-thin text-center w-4/5">
                    An e-commerce site for Abstract, a company specializing in concepts related to materialism and consumerism.
                  </p>
                </div>
                <div className="flex">
                  <Link href="https://github.com/knlrvr/abstract" target="_blank">
                    <button
                      className="px-4 absolute left-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Code
                    </button>
                  </Link>
                  <Link href="https://abstract-knlrvr.vercel.app">
                    <button 
                      className="px-4 absolute right-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/** 2 */}
            <div className="relative group overflow-hidden m-auto border border-black dark:border-white text-black dark:text-white">
              <img className="object-cover w-full h-full transform duration-700 group-hover:opacity-10" 
                src="/ferd.png" 
              />
              <div className="absolute w-full h-full opacity-10 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
              <div className="absolute w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div className="absolute w-full flex place-content-center">
                    <p className="uppercase font-thin text-2xl text-center mt-10 group-hover:mt-6 hidden group-hover:block tracking-widest">
                      Ferd Automotive
                    </p>
                  </div>
                <div className="absolute w-full flex place-content-center mt-24">
                  <p className="font-thin text-center w-4/5">
                    A Tesla website clone, remade to represent Ferd Automotive (Ford).
                  </p>
                </div>
                <div className="flex">
                  <Link href="https://github.com/knlrvr/ferd" target="_blank">
                    <button 
                      className="px-4 absolute left-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Code
                    </button>
                  </Link>
                  <Link href="https://knlrvr.github.io/ferd" target="_blank">
                    <button 
                      className="px-4 absolute right-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/** 3 */}
            <div className="relative group overflow-hidden m-auto border border-black dark:border-white">
              <img className="object-cover w-full h-full transform duration-700 group-hover:opacity-10" 
                src="/vt.png" 
              />
              <div className="absolute w-full h-full opacity-10 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
              <div className="absolute w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div className="absolute w-full flex place-content-center">
                    <p className="uppercase font-thin text-2xl text-center mt-10 group-hover:mt-6 hidden group-hover:block tracking-widest">
                      Vault-Tec Industries
                    </p>
                  </div>
                <div className="absolute w-full flex place-content-center mt-24">
                  <p className="font-thin text-center w-4/5">
                    If Vault-Tec was real, existed in 2022, and asked me to make a "simple" and "modern" website for them.
                  </p>
                </div>
                <div className="flex">
                  <Link href="https://github.com/knlrvr/vault-tec" target="_blank">
                    <button 
                      className="px-4 absolute left-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Code
                    </button>
                  </Link>
                  <Link href="https://knlrvr.github.io/vault-tec" target="_blank">
                    <button 
                      className="px-4 absolute right-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/** 4 */}
            <div className="relative group overflow-hidden m-auto border border-black dark:border-white">
              <img className="object-cover w-full h-full transform duration-700 group-hover:opacity-10" 
                src="/waves.png" 
              />
              <div className="absolute w-full h-full opacity-10 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
              <div className="absolute w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div className="absolute w-full flex place-content-center">
                    <p className="uppercase font-thin text-2xl text-center mt-10 group-hover:mt-6 hidden group-hover:block tracking-widest">
                      Fake Company
                    </p>
                  </div>
                <div className="absolute w-full flex place-content-center mt-24">
                  <p className="font-thin text-center w-4/5">
                    A landing page for Fake, a company that does not exist.
                  </p>
                </div>
                <div className="flex">
                  <Link href="https://github.com/knlrvr/fake" target="_blank">
                    <button 
                      className="px-4 absolute left-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Code
                    </button>
                  </Link>
                  <Link href="https://knlrvr.github.io/fake" target="_blank">
                    <button 
                      className="px-4 absolute right-10 bottom-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-thin h-10 hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                      View Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>


        </div>

        {/**
        <div className="font-thin px-6 mb-4">
          <span className="text-sm text-green-400">03.5. </span>
          <span className="text-lg pl-2">Skills</span>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 place-items-center mb-8">
          <Fade cascade triggerOnce>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" 
              alt="html5" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" 
              alt="css3" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" 
              alt="sass" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
              alt="javascript" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
              alt="react" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" 
              alt="typescript" 
              width="60" 
              height="60"
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" 
              alt="redux" 
              width="60" 
              height="60" 
            /> 
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
              alt="tailwind" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" 
              alt="bootstrap" 
              width="60" 
              height="60" 
            /> 
          </Fade>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5  gap-8 place-items-center mb-8">
          <Fade cascade triggerOnce>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
              alt="python" 
              width="60" 
              height="60"
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
              alt="nodejs" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" 
              alt="express" 
              width="60" 
              height="60" 
              className="bg-white p-1"
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" 
              alt="mongodb" 
              width="60" 
              height="60" 
            /> 
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase" 
              width="60" 
              height="60"
            /> 
          </Fade>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5  gap-8 place-items-center mb-24">
          <Fade cascade triggerOnce>
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" 
              alt="git" 
              width="60" 
              height="60"
            /> 
            <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" 
              alt="figma" 
              width="60" 
              height="60" 
            /> 
            <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" 
              alt="xd" 
              width="60" 
              height="60" 
            /> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" 
              alt="photoshop" 
              width="60" 
              height="60" 
            /> 
            <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" 
              alt="jest" 
              width="60" 
              height="60" 
            />
          </Fade>
        </div>
        */}

      </div>
    </div>
  )
}