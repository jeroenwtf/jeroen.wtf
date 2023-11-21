import Head from 'next/head'
import ThemeToggle from 'components/ThemeToggle'
import Link from 'next/link';

export default function Hiring({ books, games }) {
  const textGradientClass = 'font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-300 to-rose-600 dark:from-green-400 dark:to-cyan-600';

  const socialLinks = [
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/jeroenwtf/', icon: 'linkedin' },
    { text: 'GitHub', url: 'https://github.com/jeroenwtf', icon: 'github' },
    { text: 'Twitter', url: 'https://twitter.com/jeroen_wtf', icon: 'twitter' },
    { text: 'Mastodon', url: 'https://m.stratonauts.co/@jeroen', icon: 'mastodon' },
    { text: 'Instagram', url: 'https://instagram.com/jeroenwtf', icon: 'instagram' },
  ]

  return (
    <>
      <Head>
        <title>Hiring - Jeroen van Meerendonk - UX Engineer</title>
        <meta name="description" content="UX Engineer and frontend developer focused on Design Systems with HTML, CSS and JavaScript." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-1.5 bg-gradient-to-r from-orange-300 to-rose-600 dark:from-green-400 dark:to-cyan-600'></div>

      <div className="container px-6 md:px-10 max-w-3xl relative lg:px-16 py-10 md:py-12 min-h-screen flex flex-col justify-center">
        <div className="prose dark:prose-invert prose-headings:mb-4 prose-p:my-2 prose-a:font-semibold prose-a:no-underline prose-a:border-orange-300 dark:prose-a:border-green-400 prose-a:border-b-2">
          <div className="flex justify-between gap-6">
            <h1 className="text-2xl font-semibold dark:text-white">Jeroen van Meerendonk</h1>
            <div className="flex justify-end mb-12">
              <ThemeToggle />
            </div>
          </div>

          <div className="text-sm bg-gradient-to-br from-pink-100 to-yellow-50 text-pink-700/70 dark:from-cyan-800/30 dark:to-green-400/20 dark:text-cyan-100/80 px-4 py-3 rounded-lg">
            <p>Dear recruiter or hiring manager,</p>
            <p>Maybe I&apos;ve sent you here because you sent me a position that didn&apos;t meet the points of &quot;About the offers&quot;. Check it out :)</p>
          </div>

          <h2 className='text-4xl'>Hiring</h2>

          <p>I decided to write this down to save everyone&apos;s time and speed up the conversations. If you have any questions after reading it, feel free to ask me!</p>

          <h3>About the offers</h3>
          <p>In order to consider an offer, it needs to fulfill the following points:</p>

          <ul>
            <li>
              <strong>Has to be 100% remote</strong>. I&apos;m fine to assist in specific situations (super important meetings, special events, team building) but the day to day life has to be remote.
              I&apos;ve been doing it for years with zero problems.
            </li>
            <li>
              <strong>I need to know the salary range</strong>. I&apos;m not greedy, I just have to take care of my family. If the salary range is below <strong>60k eur/year</strong>, it&apos;s not a currently viable option for me.
            </li>
          </ul>

          <p>Those requirements are fundamental and non-negotiable. If they are met, let&apos;s talk!</p>

          <h3>About me</h3>

          <p>Besides the info you can find <Link href="/">in my homepage</Link>, here are some points related to hiring:</p>

          <ul>
            <li>I&apos;m willing to relocate to be closer to teams and offices (but still 100% remote).</li>
            <li>I don&apos;t need equipment, I have my own.</li>
            <li>I value stability <em>a lot</em>. A hyper-growth company is a red flag for me.</li>
            <li>I love to learn and keep up to date. If I don&apos;t meet a requirement in the job position I will be happy to train or learn to acquire the skill.</li>
          </ul>

          <h3>Contact me</h3>
          <p>If you have any questions feel free to reach me on <Link href="https://linkedin.com/in/jeroenwtf">LinkedIn</Link> or via <Link href="mailto:hola@jeroen.wtf">email</Link>.</p>
          <p>Thank you for your time. I really appreciate it.</p>
        </div>
        <footer className="mt-12">
          <p className="italic">Sincerely,<br />Jeroen van Meerendonk</p>
          {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA &&
            <div className="border-t border-zinc-200 dark:border-zinc-700 mt-10 pt-4 text-xs text-zinc-400 dark:text-zinc-600">
              <p>Version: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}</p>
            </div>
          }
        </footer>
      </div>
    </>
  )
}
