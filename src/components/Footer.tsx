import React from 'react'

import {
  BsMoon,
  BsSun
} from 'react-icons/bs'

import useDarkMode from './Theme'

type Props = {}

export default function Footer({}: Props) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="fixed bottom-6 text-xs text-center inset-x-0 w-full text-black dark:text-white tracking-[8px] z-50">
        &copy; / 2023
    </div>
  )
}