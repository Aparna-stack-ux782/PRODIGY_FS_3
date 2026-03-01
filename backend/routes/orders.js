const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getUserOrders, getOrderById, createOrder, updateOrderStatus, getAllOrders } = require('../controllers/orderController');

router.get('/', auth, getUserOrders);
router.get('/:id', auth, getOrderById);
router.post('/', auth, createOrder);
router.put('/:id', auth, updateOrderStatus);
router.get('/admin/all', getAllOrders);

module.exports = router;
