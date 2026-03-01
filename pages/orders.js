import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useStore from '../store';
import { orderAPI } from '../lib/services';
import styles from '../styles/Orders.module.css';

export default function Orders() {
  const router = useRouter();
  const { user } = useStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      const res = await orderAPI.getAll();
      setOrders(res.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>My Orders - EcommHub</title>
      </Head>

      <div className={styles.container}>
        <h1>My Orders</h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <div className={styles.empty}>
            <p>You haven't placed any orders yet</p>
            <a href="/products">Start Shopping</a>
          </div>
        ) : (
          <div className={styles.ordersList}>
            {orders.map((order) => (
              <div key={order._id} className={styles.orderCard}>
                <div className={styles.header}>
                  <h3>Order #{order._id.substring(0, 8)}</h3>
                  <span className={`${styles.status} ${styles[order.status]}`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>
                
                <p className={styles.date}>
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

                <div className={styles.items}>
                  {order.items.map((item) => (
                    <div key={item.productId} className={styles.item}>
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                      <span>₹{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.total}>
                  Total: <strong>₹{order.totalAmount}</strong>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
