import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'

import pic from '../public/pic.png'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session = useSession()
  const router = useRouter()
  console.log('session', session)

  if (session.data === null) {
    return (
      <div className={styles.login}>
        <Image src={pic} alt='Illustrator' width={280} height={187}></Image>
        <h2>Hello, Please login to proceed.</h2>
        <button className={styles.btn} onClick={signIn}>
          Login
        </button>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.header}>
        <h1>Hello {session?.data?.user?.name}, </h1>
        {session?.data && (
          <button onClick={signOut} className={styles.btn}>
            Logout
          </button>
        )}
      </div>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <Image src={pic} alt='Illustrator' width={180} height={137}></Image>
        </div>

        <div className={styles.grid}>
          <a
            href='/products'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              CSR <span>-&gt;</span>
            </h2>
            <p>Client Side Rendering</p>
          </a>

          <a
            href='/ssr'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              SSR <span>-&gt;</span>
            </h2>
            <p>Server Side Rendering</p>
          </a>

          <a
            href='/ssg'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              SSG <span>-&gt;</span>
            </h2>
            <p>Static Site Generation</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <Image
          src={
            'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
          alt='Illustrator'
          width={480}
          height={237}
        ></Image>
      </main>
    </>
  )
}