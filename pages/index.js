import Head from 'next/head'
import Image from 'next/image'
import ThemeToggle from 'components/ThemeToggle'
import { ReactSVG } from 'react-svg'
import Logos from 'components/Logos'
import Reading from 'components/Reading'
import Playing from 'components/Playing'
import WorldMap from 'components/WorldMap'
import Tag from 'components/Tag'

export default function Home({ books, games }) {
  const textGradientClass = 'font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-300 to-rose-600 dark:from-green-400 dark:to-cyan-600';

  const socialLinks = [
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/jeroenwtf/', icon: 'linkedin' },
    { text: 'GitHub', url: 'https://github.com/jeroenwtf', icon: 'github' },
    { text: 'Twitter', url: 'https://twitter.com/jeroen_wtf', icon: 'twitter' },
    { text: 'Mastodon', url: 'https://mastodon.social/@jeroenwtf', icon: 'mastodon' },
    { text: 'Instagram', url: 'https://instagram.com/jeroenwtf', icon: 'instagram' },
  ]

  return (
    <>
      <Head>
        <title>Jeroen van Meerendonk - UX Engineer</title>
        <meta name="description" content="UX Engineer and frontend developer focused on Design Systems with HTML, CSS and JavaScript." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-1.5 bg-gradient-to-r from-orange-300 to-rose-600 dark:from-green-400 dark:to-cyan-600'></div>

      <div className="container px-6 md:px-10 max-w-3xl relative lg:px-16 py-10 md:py-12 min-h-screen flex flex-col justify-center">
        <div className="flex justify-end mb-12">
          <ThemeToggle />
        </div>
        <div className="w-20 pizza mb-4 aspect-square">
          <Image
            className="w-20 h-20"
            src="/pizza.png"
            alt="A glourious flying pizza slice"
            title="Pizza yay"
            width={80}
            height={80}
          />
        </div>

        <p className="text-3xl sm:text-4xl lg:text-5xl dark:text-zinc-100 lg:leading-[1.15] mb-10">
          Hello there! <br className="hidden lg:inline-block" />My name is <strong className={textGradientClass}>Jeroen</strong> and <br className="hidden md:inline-block" />I&apos;m a <strong className={textGradientClass}>UX Engineer</strong>.
        </p>

        <div className="prose dark:prose-invert prose-headings:mb-4 prose-p:my-2 prose-a:font-semibold prose-a:no-underline prose-a:border-orange-300 dark:prose-a:border-green-400 prose-a:border-b-2">
          <div className="not-prose mt-4 mb-12">
            <ul className="flex gap-3 flex-wrap">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="bg-gradient-to-br from-zinc-200 to-zinc-100 hover:from-zinc-300 hover:to-zinc-200 text-zinc-700 hover:text-zinc-900 dark:from-zinc-700 dark:to-zinc-600 dark:hover:from-zinc-600 dark:hover:to-zinc-500 dark:text-zinc-200 dark:hover:text-white group flex items-center gap-2 text-sm block px-3 py-2 rounded"
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={`Visit my ${link.text} account`}
                  >
                    <ReactSVG
                      className="w-4 fill-zinc-700 dark:fill-zinc-400 group-hover:fill-zinc-800 dark:group-hover:fill-white"
                      alt={`${link.text}'s icon`}
                      src={`icons/${link.icon}.svg`}
                    />
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="text-lg leading-normal" cite="https://dev.to/emmawedekind/ux-engineering-3hem">
            <p>A UX Engineer is a Front-End Engineer who sits on a cross-functional design team and helps facilitate collaboration between design and engineering.</p>
            <footer className="text-sm text-zinc-500 mt-2">&mdash; Emma Bostian, <a target="_blank" href="https://dev.to/emmabostian/ux-engineering-3hem" rel="noreferrer">What Is A UX Engineer?</a></footer>
          </blockquote>

          <p>I started as a freelance designer and developer, but in recent years I&apos;ve focused on frontend development. This has given me a special perspective on how to approach a project and visually implement it effectively.</p>
          <p>I&apos;m comfortable working with different teams, including Design, Content, and Engineering, to find the right solutions and deliver high-quality products.</p>
          <p>This helps to avoid unrealistic requirements and surprises, resulting in less frustration and better products. A solid design system is key to a smooth workflow, strong brand, and maintainable code.</p>

          <h3>Buzzwords</h3>
          <p>Some of the following things are part of my daily workflow and some are used ocasionally. And some I forgot to add.</p>
          <div className='not-prose mb-10 mt-6'>
            <div className='flex gap-2 flex-wrap'>
              <Tag type="language">HTML</Tag>
              <Tag type="language">CSS</Tag>
              <Tag type="language">JavaScript</Tag>
              <Tag type="service">Design Systems</Tag>
              <Tag type="library">React</Tag>
              <Tag type="library">TailwindCSS</Tag>
              <Tag type="library">Next.js</Tag>
              <Tag type="library">Astro</Tag>
              <Tag type="library">Eleventy</Tag>
              <Tag type="language">SCSS</Tag>
              <Tag type="library">Prisma</Tag>
              <Tag type="library">Framer Motion</Tag>
              <Tag type="language">Ruby</Tag>
              <Tag type="library">View Components</Tag>
              <Tag type="library">Stimulus</Tag>
              <Tag type="service">Figma</Tag>
              <Tag type="service">Adobe Photoshop</Tag>
            </div>
          </div>

          <h3>Things I do when I&apos;m not coding</h3>
          <p>I enjoy life off screen, doing photography (you can check <a href="https://instagram.com/jeroenwtf" target="_blank" rel="noreferrer">my Instagram</a>), playing music or hiking and climbing.</p>

          <h2 className="dark:text-zinc-100">Coded for</h2>
          <div className="not-prose mb-10">
            <ul className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 mt-4">
              <Logos />
            </ul>
          </div>

          <h2 className="dark:text-zinc-100">Now</h2>
          <p className="italic">December, 2023</p>
          <p>I&apos;m getting ready to move back to the center of Barcelona, to the same studio I was living back in 2020.</p>
          <p>Codewise I&apos;ve been learning Ruby on Rails. Reminds me of the time I was doing PHP, kind of missed it. Aside from that, in the last week I&apos;ve been feeling more curiosity about AI technologies. Maybe I will get into it more seriously soon.</p>

          <h2 className="dark:text-zinc-100">Get in touch</h2>
          <p>If you have any questions, just drop me a line in any social media or just...</p>

          <div className="mt-4 not-prose">
            <a className="inline-block bg-gradient-to-br from-orange-300 to-rose-600 dark:from-green-400 dark:to-cyan-600 text-white text-sm uppercase font-bold px-5 py-3 tracking-widest rounded" href="mailto:hola@jeroen.wtf">Send me an email</a>
          </div>

          <h2 className="dark:text-zinc-100">Random</h2>
          <p>Some unnecessary information just to make me look more human.</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-10">
            <div className="w-1/2">
              <Reading books={books} />
            </div>
            <div className="w-1/2">
              <Playing games={games} />
            </div>
          </div>

          <WorldMap />
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

export async function getStaticProps() {
  const booksInfo = [
    { title: 'Project Hail Mary', isbn: '978-1529100617', cover: '' },
    { title: 'The Alchemist', isbn: '978-0060834838', cover: '' },
    { title: 'Harry Potter and the Prisoner of Azkaban', isbn: '978-0439554923', cover: '' },
  ]

  const books = booksInfo.map(book => {
    book.cover = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
    return book;
  })

  const gameIds = '6880,25076,165351'

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials'
    })
  };

  const accessToken = await fetch('https://id.twitch.tv/oauth2/token', options).then(response => response.json())

  const games = await fetch("https://api.igdb.com/v4/games", {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${accessToken.access_token}`,
    },
    body: `fields name,cover.image_id; where id = (${gameIds});`,
  })
    .then(response => response.json());

  return {
    props: { books, games },
  }
}
