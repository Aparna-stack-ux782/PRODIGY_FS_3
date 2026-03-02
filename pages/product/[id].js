import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useStore from '../../src/store';
import { productAPI, cartAPI, reviewAPI } from '../../src/lib/services';
import styles from '../../styles/ProductDetail.module.css';
export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useStore();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    if (id) {
      fetchProduct();
      fetchReviews();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await productAPI.getById(id);
      setProduct(res.data);
    } catch (err) {
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await reviewAPI.get(id);
      setReviews(res.data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      router.push('/login');
      return;
    }
    try {
      await cartAPI.add({ productId: id, quantity });
      alert('Product added to cart!');
      router.push('/cart');
    } catch (err) {
      alert('Error adding to cart');
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      router.push('/login');
      return;
    }
    try {
      await reviewAPI.create({ productId: id, ...newReview });
      setNewReview({ rating: 5, comment: '' });
      fetchReviews();
      fetchProduct();
      alert('Review submitted!');
    } catch (err) {
      alert('Error submitting review');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Head>
        <title>{product.name} - EcommHub</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src={product.image} alt={product.name} />
          </div>

          <div className={styles.details}>
            <h1>{product.name}</h1>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.rating}>⭐ {product.rating?.toFixed(1) || 'N/A'} ({product.reviews} reviews)</p>
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.pricing}>
              <h2 className={styles.price}>₹{product.price}</h2>
              <p className={styles.stock}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </p>
            </div>

            <div className={styles.actions}>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={styles.addBtn}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className={styles.reviews}>
          <h2>Customer Reviews</h2>
          
          {user && (
            <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
              <textarea
                placeholder="Write your review..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
              />
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>{r} Stars</option>
                ))}
              </select>
              <button type="submit">Submit Review</button>
            </form>
          )}

          <div className={styles.reviewList}>
            {reviews.length === 0 ? (
              <p>No reviews yet</p>
            ) : (
              reviews.map((review) => (
                <div key={review._id} className={styles.reviewItem}>
                  <div className={styles.reviewHeader}>
                    <strong>{review.userName}</strong>
                    <span className={styles.rating}>{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
