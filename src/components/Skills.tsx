import React from 'react'
import { Fade } from 'react-awesome-reveal'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen md:text-left md:flex-row
                    max-w-6xl px-6 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-widest text-sm text-gray-400">
            Skills
        </h3>
        <p className="absolute px-10 top-24 tracking-widest text-sm font-thin text-gray-600 dark:text-gray-200">
            * This is not an exhaustive list! *
        </p>

        <Fade triggerOnce>
        <div className="flex flex-col gap-4">
            <p className="text-sm uppercase text-center">front</p>
            <div className="grid grid-cols-4 gap-4 mb-4 md:grid-cols-5">
                <Fade cascade damping={0.3} triggerOnce>
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" 
                    alt="svelte" 
                    width="50" 
                    height="50"
                /> 
                </Fade>
            </div>
            <p className="text-sm uppercase text-center">back</p>
            <div className="grid grid-cols-4 gap-8 mb-4">
                <Fade cascade damping={0.8} triggerOnce>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                    alt="nodejs" 
                    width="60" 
                    height="60"
                />
                {/** I hate this. I really, really hate this. */}
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" 
                    alt="express" 
                    width="60" 
                    height="60"
                    className="bg-white py-2 p-1"
                />
                {/** I no longer hate this. */}
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
            <p className="text-sm uppercase text-center">other</p>
            <div className="grid grid-cols-5 gap-4 mb-8">
                <Fade cascade damping={0.6} triggerOnce>
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
        </div>
        </Fade>
    </div>
  )
  }
