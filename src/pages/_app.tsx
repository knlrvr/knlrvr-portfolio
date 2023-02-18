import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
  <motion.div
  key={router.route}
    initial="initial"
    animate="animate"
    transition={{
      delay: 0.3
    }}
    variants={{
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    }}
  >
  <Component {...pageProps} />
  </motion.div>
  )
}
