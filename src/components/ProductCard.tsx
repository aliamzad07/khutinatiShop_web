import './ProductCard.css'

interface ProductCardProps {
  image: string
  badge?: string
  badgeType?: 'discount' | 'new' | 'hot'
  category: string
  name: string
  rating: number
  reviews: number
  price: number
  oldPrice?: number
}

export const ProductCard = ({
  image,
  badge,
  badgeType = 'discount',
  category,
  name,
  rating,
  reviews,
  price,
  oldPrice
}: ProductCardProps) => {
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          className="star"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <div className="product-image" style={{ backgroundImage: `url(${image})` }}>
          <button className="wishlist-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          {badge && (
            <div className={`product-badge ${badgeType}`}>
              {badge}
            </div>
          )}
        </div>
      </div>
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">
          <div className="stars">{renderStars()}</div>
          <span className="reviews">({reviews} reviews)</span>
        </div>
        <div className="product-price-row">
          <div className="product-pricing">
            <span className="product-price">৳{price}</span>
            {oldPrice && <span className="product-old-price">৳{oldPrice}</span>}
          </div>
          <button className="add-to-cart-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

