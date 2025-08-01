export default function Home() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', color: '#d4af37' }}>
      <h1>🌌 Pleroma Coin</h1>
      <p>The site is working — welcome to Pleroma.</p>
      <a href="/dashboard" style={{
        marginTop: '2rem',
        display: 'inline-block',
        backgroundColor: '#d4af37',
        color: '#0a192f',
        padding: '1rem 2rem',
        borderRadius: '40px',
        textDecoration: 'none'
      }}>
        👉 Launch Wallet Dashboard
      </a>
    </div>
  );
}
