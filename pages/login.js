import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useStore from '../store';
import { userAPI } from '../lib/services';
import styles from '../styles/Auth.module.css';

export default function Login() {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const res = await userAPI.login(formData);
      const { token, user } = res.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user, token);
      
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - EcommHub</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Login</h1>
          
          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </>
  );
}
