import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trackr</title>
        <link rel="icon" href="/main-icon.svg" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <img src="/main-icon.svg" alt="Trackr Logo" className={styles.logo} />
          </a>
        </Link>
          <a className={styles.buttonText}>
              Login | Sign up
          </a>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Trackr!</a>
        </h1>

        <p className={styles.description}>
          What do you want to track?
        </p>

        <div className={styles.grid}>
          <a href="weight" className={styles.card}>
            <h3>Weight </h3>
          </a>

          <a href="sight" className={styles.card}>
            <h3>  Sight </h3>
          </a>
        </div>
      </main>


    </div>
  )
}
