import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import './Header.css'

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon-box">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <span className="logo-text">KhutiNati Shop</span>
          </div>
        </div>

        <div className="header-center">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search products, categories..." 
              className="search-input"
            />
            <button className="search-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="header-right">
          <button className="icon-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Wishlist</span>
          </button>

          <button className="icon-button cart-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v1c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V7a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H9z"></path>
              <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9"></path>
            </svg>
            <span>Cart</span>
            <span className="cart-badge">3</span>
          </button>

          {isAuthenticated ? (
            <div className="header-user-menu" ref={userMenuRef}>
              <div 
                className="header-user-button"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="header-user-avatar">
                  <span>{user?.name?.charAt(0).toUpperCase() || 'U'}</span>
                </div>
                <span className="header-user-name">{user?.name || 'User'}</span>
                <svg className="user-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>

              {showUserMenu && (
                <div className="header-user-dropdown">
                  <div className="header-dropdown-header">
                    <div className="header-user-avatar large">
                      <span>{user?.name?.charAt(0).toUpperCase() || 'U'}</span>
                    </div>
                    <div className="header-user-details">
                      <div className="header-dropdown-name">{user?.name}</div>
                      <div className="header-dropdown-email">{user?.email}</div>
                    </div>
                  </div>
                  <div className="header-dropdown-menu">
                    <a href="/profile" className="header-menu-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>My Profile</span>
                    </a>
                    <a href="/orders" className="header-menu-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 2a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v1c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V7a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H9z"></path>
                        <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9"></path>
                      </svg>
                      <span>My Orders</span>
                    </a>
                    <div className="header-menu-divider"></div>
                    <button 
                      className="header-menu-item logout"
                      onClick={async () => {
                        await logout()
                        window.location.href = '/'
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <a href="/login" className="login-button">Login</a>
          )}
        </div>
      </div>
    </header>
  )
}

