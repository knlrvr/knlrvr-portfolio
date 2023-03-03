import React from 'react'
import Link from 'next/link'

import { FaBomb } from 'react-icons/fa'

import useDarkMode from './Theme'

type Props = {}

export default function Footer({}: Props) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
    <div className="fixed bottom-6 text-xs text-center inset-x-0 w-full text-black dark:text-white tracking-[8px] z-50">
        &copy; / 2023
    </div>
    <div className="fixed bottom-6 left-6 text-xs w-full text-black dark:text-white tracking-widest z-50">
        <Link href="/Minesweeper">
          <FaBomb />
        </Link>
    </div>
    </>
  )
}
