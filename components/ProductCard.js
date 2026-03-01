import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description.substring(0, 60)}...</p>
        
        <div className={styles.footer}>
          <div className={styles.priceRating}>
            <span className={styles.price}>₹{product.price}</span>
            <span className={styles.rating}>⭐ {product.rating?.toFixed(1) || 'N/A'}</span>
          </div>
          <Link href={`/product/${product._id}`} className={styles.viewBtn}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
