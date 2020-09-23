import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function weight() {
    return (
    <div className={styles.container}>
        <Head>
          <title>Track your Sight</title>
          <link rel="icon" href="/glasses-icon.svg" />
        </Head>
        
        <header className={styles.header}>
        <Link href="/">
          <a>
            <img src="/main-icon.svg" alt="Sight Logo" className={styles.logo} />
          </a>
        </Link>
        </header>

    </div>
    ) 
  }