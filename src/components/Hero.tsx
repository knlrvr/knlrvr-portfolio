import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/Header'

import {
  BsChevronDoubleDown
} from 'react-icons/bs'

export default function Hero() {
    return (
      <div className="flex justify-center px-4 md:px-8 h-screen max-w-6xl mx-auto">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center font-thin py-64">
            <span className="text-6xl uppercase tracking-widest">kane</span>
            <span className="text-6xl uppercase">lariviere</span>
            <span className="text-lg uppercase mt-4">Software Engineer. Developer. Designer.</span>
          </div>
          <div className="flex justify-center animate-bounce text-3xl chevron-down">
            <Link href="#about">
              <BsChevronDoubleDown />
            </Link>
          </div>

        </div>
      </div>
    )
  }