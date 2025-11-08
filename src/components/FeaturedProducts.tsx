import { ProductCard } from './ProductCard'
import './FeaturedProducts.css'

export const FeaturedProducts = () => {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1517842264229-8e0439c15c89?w=500',
      badge: '-30%',
      badgeType: 'discount' as const,
      category: 'STATIONERY',
      name: 'Premium Notebook Set',
      rating: 5,
      reviews: 48,
      price: 1200,
      oldPrice: 1700
    },
    {
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500',
      badge: 'NEW',
      badgeType: 'new' as const,
      category: 'GIFTS',
      name: 'Decorative Gift Box',
      rating: 5,
      reviews: 32,
      price: 850,
      oldPrice: undefined
    },
    {
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      badge: 'HOT',
      badgeType: 'hot' as const,
      category: 'ELECTRONICS',
      name: 'Wireless Headphones',
      rating: 4,
      reviews: 128,
      price: 3500,
      oldPrice: undefined
    },
    {
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
      badge: '-20%',
      badgeType: 'discount' as const,
      category: 'BOOKS',
      name: 'Best Seller Collection',
      rating: 5,
      reviews: 95,
      price: 1600,
      oldPrice: 2000
    }
  ]

  return (
    <section className="featured-products">
      <div className="featured-products-container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our handpicked collection of trending items</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="section-footer">
          <button className="view-all-btn">
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

