import { Quicksand } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={quicksand.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
