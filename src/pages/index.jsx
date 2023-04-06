import AboutSection from '@/page-sections/homepage/AboutSection'
import HeroSection from '@/page-sections/homepage/HeroSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>West Side International School</title>
        <meta name="description" content="Westside International School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <HeroSection/>
          <AboutSection/>
      </main>
    </>
  )
}
