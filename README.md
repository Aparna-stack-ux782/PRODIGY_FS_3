# 🛍️ EcommHub - E-commerce Frontend

A modern React/Next.js frontend for the EcommHub e-commerce platform.

## Features

- 🏠 Home page with featured products
- 📦 Product catalog with filtering and sorting
- 🔍 Product search and details page
- 🛒 Shopping cart functionality
- 👤 User authentication (login/register)
- 📋 User profile management
- 📑 Order tracking
- ⭐ Product reviews and ratings
- 📱 Responsive design

## Tech Stack

- React 18
- Next.js 14
- Zustand (state management)
- Axios (HTTP client)
- CSS Modules for styling

## Installation

1. Clone the repository:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Project Structure

```
frontend/
├── pages/           # Next.js pages
├── components/      # Reusable React components
├── styles/          # CSS modules
├── lib/             # Utilities and API services
├── store.js         # Zustand store
└── package.json
```

## Pages

- `/` - Home page
- `/products` - Product catalog
- `/product/[id]` - Product details
- `/cart` - Shopping cart
- `/login` - User login
- `/register` - User registration
- `/profile` - User profile
- `/orders` - Order history

## Components

- `Header` - Navigation header
- `Footer` - Footer section
- `ProductCard` - Product card component

## State Management

The app uses Zustand for global state management. Store includes:
- User data
- Authentication token
- Shopping cart items

## API Integration

The app connects to the backend API at `http://localhost:5000/api`. Make sure the backend is running before starting the frontend.

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
