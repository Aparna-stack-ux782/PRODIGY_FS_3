
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useStore from '../../store';
import { productAPI, cartAPI } from '../../lib/services';
import styles from '../../styles/ProductDetail.module.css';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { user } = useStore();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // ✅ FIXED
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await productAPI.getById(id);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <div className={styles.container}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>₹{product.price}</p>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
    </>
  );
}