import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import useStore from '../store';

function MyApp({ Component, pageProps }) {
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    // Load user from localStorage on app start
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setUser(JSON.parse(user), token);
    }
  }, [setUser]);

  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 300px)' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
