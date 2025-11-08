import './Features.css'

export const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <h3 className="feature-title">Free Delivery</h3>
          <p className="feature-description">On orders over ৳500</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
          </div>
          <h3 className="feature-title">Secure Payment</h3>
          <p className="feature-description">100% secure transaction</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          </div>
          <h3 className="feature-title">Easy Returns</h3>
          <p className="feature-description">7 days return policy</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <h3 className="feature-title">24/7 Support</h3>
          <p className="feature-description">Dedicated support team</p>
        </div>
      </div>
    </section>
  )
}

