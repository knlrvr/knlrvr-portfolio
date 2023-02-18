import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="absolute bottom-6 text-xs text-center inset-x-0 w-full text-black dark:text-white tracking-[8px] z-50">
        &copy; 2023
    </div>
  )
}