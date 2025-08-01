import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WalletDashboard from '../components/WalletDashboard'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wallet Dashboard | Pleroma Coin</title>
        <meta name="description" content="Manage your Pleroma holdings" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>💼 Pleroma Wallet Dashboard</h1>
        <WalletDashboard />
      </main>
      <Footer />
    </div>
  )
}