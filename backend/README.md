# 🛍️ EcommHub - E-commerce Backend API

A robust Node.js Express backend for an e-commerce platform with MongoDB database integration.

## Features

- **Product Management**: Browse products with filtering and sorting
- **User Authentication**: Register and login with JWT
- **Shopping Cart**: Add/remove items from cart
- **Order Management**: Create and track orders
- **Product Reviews**: Add and view customer reviews
- **Admin Features**: Manage products and orders

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- bcryptjs for password hashing

## Installation

1. Clone the repository:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example` and configure:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Start MongoDB service on your machine

5. Run the server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (auth required)
- `PUT /api/users/profile` - Update user profile (auth required)

### Cart
- `GET /api/cart` - Get cart (auth required)
- `POST /api/cart/add` - Add item to cart (auth required)
- `POST /api/cart/remove` - Remove item from cart (auth required)
- `DELETE /api/cart/clear` - Clear cart (auth required)

### Orders
- `GET /api/orders` - Get user orders (auth required)
- `GET /api/orders/:id` - Get order by ID (auth required)
- `POST /api/orders` - Create order (auth required)
- `PUT /api/orders/:id` - Update order status (auth required)

### Reviews
- `GET /api/reviews/:productId` - Get product reviews
- `POST /api/reviews` - Create review (auth required)
- `DELETE /api/reviews/:id` - Delete review (auth required)

## Project Structure

```
backend/
├── models/          # Database schemas
├── routes/          # API routes
├── controllers/     # Route handlers
├── middleware/      # Authentication middleware
├── server.js        # Main server file
└── package.json
```

## Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `NODE_ENV`: Environment (development/production)

## License

MIT
