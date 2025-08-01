import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a192f',
      color: '#e6e6e6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <Image
        src="/images/pleroma-seal.png"
        alt="Pleroma Seal"
        width={180}
        height={180}
      />
      <h1 style={{
        fontSize: '2.8rem',
        color: '#d4af37',
        marginTop: '2rem'
      }}>
        🌌 Pleroma Coin
      </h1>
      <p style={{
        maxWidth: '700px',
        marginTop: '1rem',
        fontSize: '1.2rem',
        lineHeight: '1.6'
      }}>
        A decentralized cryptocurrency inspired by Gnostic philosophy. Built for wisdom, self-sovereignty, and value beyond speculation.
      </p>
      <a href="/dashboard" style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        background: 'linear-gradient(to right, #d4af37, #f2d57e)',
        color: '#0a192f',
        borderRadius: '40px',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}>
        👉 Launch Wallet Dashboard
      </a>
    </main>
  );
}
