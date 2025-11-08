# KhutiNati Shop - Frontend

A modern React + TypeScript + Vite e-commerce frontend application.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
khutinatiShop_web/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable React components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   ├── App.css         # App styles
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Navigation (ready to use)
- **ESLint** - Code linting

## 📝 Development Guidelines

### Adding Components

Create new components in `src/components/`:

```tsx
// src/components/MyComponent.tsx
export const MyComponent = () => {
  return <div>My Component</div>
}
```

### Adding Pages

Create new pages in `src/pages/`:

```tsx
// src/pages/HomePage.tsx
export const HomePage = () => {
  return <div>Home Page</div>
}
```

### Adding Types

Create type definitions in `src/types/`:

```tsx
// src/types/product.ts
export interface Product {
  id: string
  name: string
  price: number
}
```

### Adding Utilities

Create utility functions in `src/utils/`:

```tsx
// src/utils/formatPrice.ts
export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`
}
```

## 🌟 Features

- ⚡ Lightning fast HMR with Vite
- 🎯 Full TypeScript support
- 📱 Responsive design ready
- 🎨 Modern CSS with gradients and animations
- 🔧 ESLint configured
- 📦 Optimized build output

## 🚧 Next Steps

1. Set up routing with React Router
2. Create your component library
3. Add state management (Context API, Zustand, or Redux)
4. Integrate with your backend API
5. Add authentication
6. Build your product catalog
7. Implement shopping cart functionality

## 📄 License

This project is private and proprietary.

---

Happy coding! 🎉

