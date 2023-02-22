import React, { useEffect, useRef } from 'react'

export default function NewCursor() {

    const cursorRef = useRef(null)

    useEffect(() => {
        if (cursorRef.current == null || cursorRef == null)
            return;

        document.addEventListener('mousemove', e => {
            if (cursorRef.current == null)
                return;
            cursorRef.current.setAttribute("style", "top: " + (e.clientY - 16) + "px; left: " + (e.clientX - 16) + "px;")
        })

        document.addEventListener('click', () => {
            if (cursorRef.current == null)
                return;
            cursorRef.current.classList.add("expand");

            setTimeout(() => {
                if (cursorRef.current == null)
                    return;
                cursorRef.current.classList.remove("expand");
            }, 500)
        })
    }, [])

    return (
        <div className='z-50 cursor border border-black dark:border-white' ref={cursorRef}>

        </div>
    )
}