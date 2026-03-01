# 🛍️ EcommHub - Local Store E-commerce Platform

A complete full-stack e-commerce application for local stores to enable customers to browse and purchase products online.

## Project Overview

EcommHub is a modern e-commerce platform built with React/Next.js frontend and Node.js/Express backend with MongoDB database. It provides a seamless shopping experience with product browsing, cart management, order tracking, and customer reviews.

## Features

### Core Features ✨
- **Product Catalog**: Browse products with filtering by category and sorting by price/rating
- **Shopping Cart**: Add/remove items, manage quantities
- **User Authentication**: Secure login and registration
- **Order Management**: Place orders and track order status
- **Product Reviews**: Read and submit customer reviews with ratings
- **User Profiles**: Manage personal information and address

### Optional Features 🎁
- **Order Tracking**: Real-time order status updates
- **Product Filters**: Sort by price, rating, category
- **User Reviews**: Customer feedback and ratings
- **Customer Support**: Contact information available

## Tech Stack

### Frontend
- React 18
- Next.js 14
- Zustand (state management)
- Axios (HTTP client)
- CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (authentication)
- bcryptjs (password hashing)

## Project Structure

```
ecommerce/
├── frontend/
│   ├── pages/              # Next.js pages
│   ├── components/         # Reusable components
│   ├── styles/             # CSS modules
│   ├── lib/                # Utilities and services
│   ├── package.json
│   └── README.md
├── backend/
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── middleware/         # Authentication
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (running locally or remote)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

Backend runs on: `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:3000`

## API Documentation

See [Backend README](backend/README.md) for detailed API documentation.

### Main API Endpoints
- `/api/products` - Product management
- `/api/users` - User authentication and profile
- `/api/cart` - Shopping cart
- `/api/orders` - Order management
- `/api/reviews` - Product reviews

## Environment Setup

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Usage

1. **Register**: Create a new account on `/register`
2. **Browse**: Explore products on `/products` page
3. **Shop**: Add items to cart and view product details
4. **Checkout**: Review cart and place order
5. **Track**: View order history on `/orders` page
6. **Review**: Leave reviews on product pages

## Features in Detail

### Product Management
- Display all products with images, descriptions, and prices
- Filter products by category
- Sort by price (ascending/descending) or rating
- View detailed product information

### Shopping Experience
- Add items to cart with quantity management
- View cart summary
- Proceed to checkout with shipping information
- Real-time cart updates

### User Authentication
- Secure registration with password hashing
- JWT-based login system
- Protected routes for authenticated users
- User profile management

### Order System
- Create orders from cart
- Automatic cart clearing after purchase
- Order status tracking (pending, processing, shipped, delivered)
- Order history view

### Product Reviews
- Submit reviews with ratings (1-5 stars)
- View all reviews for a product
- Display average rating based on reviews
- Delete your own reviews

## Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- Email notifications for orders
- Admin dashboard for store management
- Advanced search and filters
- Product recommendations
- Wishlist functionality
- Customer support chat
- Analytics and reporting

## Directory Guide

- **Frontend Pages**:
  - `/` - Homepage with store information
  - `/products` - Product listing page
  - `/product/[id]` - Product details page
  - `/cart` - Shopping cart page
  - `/login` - Login form
  - `/register` - Registration form
  - `/profile` - User profile page
  - `/orders` - Order history page

- **Backend Routes**:
  - `routes/products.js` - Product CRUD operations
  - `routes/users.js` - User authentication
  - `routes/cart.js` - Cart management
  - `routes/orders.js` - Order management
  - `routes/reviews.js` - Product reviews

## Database Models

- **User**: Email, password, profile information
- **Product**: Name, description, price, stock, category, image, ratings
- **Order**: User, items, total amount, shipping address, status
- **Review**: Product, user, rating, comment
- **Cart**: User, items

## Support

For issues or questions, please refer to the individual README files in the frontend and backend directories.

## License

MIT

## Author

Aparna's E-commerce Platform
