import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../lib/services';
import styles from '../styles/Products.module.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'];

  useEffect(() => {
    fetchProducts();
  }, [category, sort]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await productAPI.getAll(category, sort);
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Products - EcommHub</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Our Products</h1>
          <p>Browse our collection of quality products</p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Sort By:</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading products...</div>
        ) : products.length === 0 ? (
          <div className={styles.empty}>No products found</div>
        ) : (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
