import { ReactNode, useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import './AdminLayout.css'

interface AdminLayoutProps {
  children: ReactNode
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, logout } = useAuth()
  
  const notificationRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon-box">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            {sidebarOpen && <span className="logo-text">KhutiNati Shop</span>}
          </div>
          <span className="admin-badge">Admin</span>
        </div>

        <nav className="sidebar-nav">
          <a href="/admin/dashboard" className="nav-item active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            {sidebarOpen && <span>Dashboard</span>}
          </a>

          <a href="/admin/products" className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {sidebarOpen && <span>Products</span>}
          </a>

          <a href="/admin/orders" className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v1c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V7a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H9z"></path>
              <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9"></path>
            </svg>
            {sidebarOpen && <span>Orders</span>}
          </a>

          <a href="/admin/users" className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {sidebarOpen && <span>Users</span>}
          </a>

          <a href="/admin/analytics" className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            {sidebarOpen && <span>Analytics</span>}
          </a>

          <a href="/admin/settings" className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6m5.2-14.8l-4.2 4.2m-1 1l-4.2 4.2m14.8-.2l-6-2.6m-6 2.6l-6 2.6m14.8 5.2l-4.2-4.2m-1-1l-4.2-4.2"></path>
            </svg>
            {sidebarOpen && <span>Settings</span>}
          </a>

          <div className="nav-divider"></div>

          <button 
            onClick={async () => {
              await logout()
              window.location.href = '/login'
            }}
            className="nav-item logout-nav"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Top Bar */}
        <header className="admin-topbar">
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className="topbar-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="topbar-actions">
            <div className="notification-wrapper" ref={notificationRef}>
              <button 
                className="topbar-btn"
                onClick={() => {
                  setShowNotifications(!showNotifications)
                  setShowUserMenu(false)
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="notification-badge">3</span>
              </button>

              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="dropdown-header">
                    <h3>Notifications</h3>
                    <span className="notification-count">3 new</span>
                  </div>
                  <div className="notification-list">
                    <div className="notification-item unread">
                      <div className="notification-icon order">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M9 2a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v1c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V7a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H9z"></path>
                          <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9"></path>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-text"><strong>New order #ORD-1247</strong> received</p>
                        <span className="notification-time">2 minutes ago</span>
                      </div>
                    </div>
                    <div className="notification-item unread">
                      <div className="notification-icon warning">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-text"><strong>Low stock alert:</strong> Wireless Headphones</p>
                        <span className="notification-time">1 hour ago</span>
                      </div>
                    </div>
                    <div className="notification-item">
                      <div className="notification-icon user">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-text"><strong>New user</strong> registered</p>
                        <span className="notification-time">3 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-footer">
                    <a href="#notifications">View all notifications</a>
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu-wrapper" ref={userMenuRef}>
              <div 
                className="topbar-user"
                onClick={() => {
                  setShowUserMenu(!showUserMenu)
                  setShowNotifications(false)
                }}
              >
                <div className="user-avatar">
                  <span>{user?.name?.charAt(0).toUpperCase() || 'A'}</span>
                </div>
                <div className="user-info">
                  <span className="user-name">{user?.name || 'Admin User'}</span>
                  <span className="user-role">Administrator</span>
                </div>
                <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>

              {showUserMenu && (
                <div className="user-dropdown">
                  <div className="user-dropdown-header">
                    <div className="user-avatar large">
                      <span>{user?.name?.charAt(0).toUpperCase() || 'A'}</span>
                    </div>
                    <div className="user-details">
                      <div className="user-name">{user?.name || 'Admin User'}</div>
                      <div className="user-email">{user?.email || 'admin@khutinatishop.com'}</div>
                    </div>
                  </div>
                  <div className="user-dropdown-menu">
                    <a href="/admin/profile" className="menu-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>My Profile</span>
                    </a>
                    <a href="/admin/settings" className="menu-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6m0 6v6m5.2-14.8l-4.2 4.2m-1 1l-4.2 4.2m14.8-.2l-6-2.6m-6 2.6l-6 2.6m14.8 5.2l-4.2-4.2m-1-1l-4.2-4.2"></path>
                      </svg>
                      <span>Settings</span>
                    </a>
                    <div className="menu-divider"></div>
                    <button 
                      className="menu-item logout"
                      onClick={async () => {
                        await logout()
                        window.location.href = '/login'
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
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  )
}

