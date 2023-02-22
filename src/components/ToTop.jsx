import React from 'react'
import { 
  BsSun,
  BsMoon
} from 'react-icons/bs'
import useDarkMode from './Theme'

export default function ToTop() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
    <div className="fixed bottom-5 right-5 text-xl z-50 text-black dark:text-white">
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