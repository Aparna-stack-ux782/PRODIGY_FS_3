import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EcommHub - Your Local E-commerce Store</title>
        <meta name="description" content="Browse and buy products online" />
      </Head>

      <div style={styles.container}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Welcome to EcommHub</h1>
          <p style={styles.subtitle}>Your trusted local e-commerce store</p>
          <a href="/products" style={styles.button}>Shop Now</a>
        </section>

        <section style={styles.features}>
          <h2 style={styles.heading}>Why Choose Us</h2>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📦</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>💳</div>
              <h3>Easy Payments</h3>
              <p>Multiple payment options for your convenience</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔒</div>
              <h3>Secure</h3>
              <p>Your data is protected with advanced security</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⭐</div>
              <h3>Quality Products</h3>
              <p>Verified sellers and quality assurance</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '10px',
    marginTop: '40px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '30px',
    opacity: 0.9,
  },
  button: {
    display: 'inline-block',
    backgroundColor: 'white',
    color: '#667eea',
    padding: '12px 30px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  features: {
    padding: '60px 0',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  featureIcon: {
    fontSize: '40px',
    marginBottom: '15px',
  },
};
