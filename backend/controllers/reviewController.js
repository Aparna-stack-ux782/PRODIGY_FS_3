const Review = require('../models/Review');
const Product = require('../models/Product');

// Get reviews for a product
exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a review
exports.createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const user = await require('../models/User').findById(req.userId);

    const review = new Review({
      productId,
      userId: req.userId,
      userName: user.name,
      rating,
      comment,
    });

    await review.save();

    // Update product rating
    const reviews = await Review.find({ productId });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    
    await Product.findByIdAndUpdate(productId, {
      rating: avgRating,
      reviews: reviews.length,
    });

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Update product rating after deleting review
    const reviews = await Review.find({ productId: review.productId });
    const avgRating = reviews.length > 0 
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
      : 0;
    
    await Product.findByIdAndUpdate(review.productId, {
      rating: avgRating,
      reviews: reviews.length,
    });

    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
