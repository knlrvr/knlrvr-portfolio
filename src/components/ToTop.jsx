import React from 'react'
import { 
  BsChevronBarUp,
  BsSun,
  BsMoon
} from 'react-icons/bs'
import useDarkMode from './Theme'

export default function ToTop() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
    <div className="flex absolute bottom-6 right-5 md:right-10 text-xl z-50 text-black dark:text-white">
      {colorTheme === "light" ? (
        <BsSun  
          onClick={() => setTheme("light")}
          className="cursor-none hover:text-gray-300"
        />
      ) : (
        <BsMoon 
          onClick={() => setTheme("dark")}
          className="cursor-none hover:text-gray-300"
        />
      )}
    </div>
    </>
  )
}