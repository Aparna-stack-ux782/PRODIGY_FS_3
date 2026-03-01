import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useStore from '../store';
import { cartAPI, orderAPI } from '../lib/services';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const router = useRouter();
  const { user } = useStore();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchCart();
  }, [user]);

  const fetchCart = async () => {
    try {
      const res = await cartAPI.get();
      setCart(res.data);
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await cartAPI.remove({ productId });
      fetchCart();
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const orderData = {
        shippingAddress: shippingInfo,
        paymentMethod: 'cash',
      };
      await orderAPI.create(orderData);
      alert('Order placed successfully!');
      router.push('/orders');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) return null;

  const total = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <>
      <Head>
        <title>Cart - EcommHub</title>
      </Head>

      <div className={styles.container}>
        <h1>Shopping Cart</h1>

        {loading ? (
          <p>Loading cart...</p>
        ) : !cart || cart.items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is empty</p>
            <a href="/products">Continue Shopping</a>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.cartItems}>
              {cart.items.map((item) => (
                <div key={item.productId} className={styles.item}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.details}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} x {item.quantity}</p>
                  </div>
                  <div className={styles.total}>
                    ₹{item.price * item.quantity}
                  </div>
                  <button onClick={() => handleRemove(item.productId)}>Remove</button>
                </div>
              ))}
            </div>

            <div className={styles.checkout}>
              <h2>Checkout</h2>
              <form onSubmit={handleCheckout}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="State"
                  value={shippingInfo.state}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={shippingInfo.zipCode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                  required
                />

                <div className={styles.summary}>
                  <div className={styles.row}>
                    <span>Subtotal:</span>
                    <span>₹{total}</span>
                  </div>
                  <div className={styles.row}>
                    <span>Shipping:</span>
                    <span>₹0</span>
                  </div>
                  <div className={styles.total}>
                    <span>Total:</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button type="submit" disabled={submitting} className={styles.checkoutBtn}>
                  {submitting ? 'Processing...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
