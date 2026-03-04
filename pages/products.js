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
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      productAPI.getById(id).then(res => setProduct(res.data));
    }
  }, [id]);

  return <div>{product?.name}</div>;
}