import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
