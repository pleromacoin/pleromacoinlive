import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CoinDisplay from '../components/CoinDisplay'
import QuoteSection from '../components/QuoteSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pleroma Coin | In Logos, Fullness</title>
        <meta name="description" content="A decentralized cryptocurrency inspired by Gnostic philosophy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>🌌 Pleroma Coin</h1>
        <h2 className={styles.subtitle}>In Logos, Fullness</h2>
        <p className={styles.description}>
          Pleroma is a decentralized cryptocurrency inspired by Gnostic philosophy. It stands for divine fullness and sovereignty, built to return value and control to its users.
        </p>
        <CoinDisplay />
        <QuoteSection />
        <div className={styles.cta}>
          <a href="/dashboard">👉 Launch Wallet Dashboard</a><br />
          <a href="https://gofund.me/1ad6dcae" target="_blank">❤️ Support the Pleroma Project</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}