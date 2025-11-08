import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">New Arrivals - up to 50% OFF</div>
          <h1 className="hero-title">
            Shop Smart,<br />
            <span className="hero-title-accent">Save More</span>
          </h1>
          <p className="hero-description">
            Discover amazing products at unbeatable prices. Quality guaranteed with fast delivery across Bangladesh.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Shop Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-secondary">View Deals</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="shopping-bags">
            <div className="bag bag-red-1"></div>
            <div className="bag bag-black-1"></div>
            <div className="bag bag-red-2"></div>
            <div className="bag bag-black-2"></div>
            <div className="discount-badge">50% OFF</div>
          </div>
        </div>
      </div>
    </section>
  )
}

