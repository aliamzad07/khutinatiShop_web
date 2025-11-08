import './Newsletter.css'

export const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Get exclusive deals, new arrivals, and special offers directly to your inbox!
        </p>
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

