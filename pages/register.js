import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useStore from '../store';
import { userAPI } from '../lib/services';
import styles from '../styles/Auth.module.css';

export default function Register() {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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
      const res = await userAPI.register(formData);
      const { token, user } = res.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user, token);
      
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register - EcommHub</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Create Account</h1>
          
          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>

          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </>
  );
}
