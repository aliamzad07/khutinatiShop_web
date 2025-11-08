import { AdminLayout } from '../../layouts/AdminLayout'
import './AdminPages.css'

export const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your store settings and configuration</p>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="settings-grid">
          {/* Store Settings */}
          <div className="settings-card">
            <h2>Store Information</h2>
            <form className="settings-form">
              <div className="form-group">
                <label>Store Name</label>
                <input type="text" value="KhutiNati Shop" className="form-control" />
              </div>
              <div className="form-group">
                <label>Store Email</label>
                <input type="email" value="info@khutinatishop.com" className="form-control" />
              </div>
              <div className="form-group">
                <label>Store Phone</label>
                <input type="tel" value="+880 0XXX-XXXXXX" className="form-control" />
              </div>
              <div className="form-group">
                <label>Store Address</label>
                <textarea className="form-control" rows={3}>Dhaka, Bangladesh</textarea>
              </div>
              <button type="submit" className="btn-primary">Save Changes</button>
            </form>
          </div>

          {/* Payment Settings */}
          <div className="settings-card">
            <h2>Payment Methods</h2>
            <div className="payment-methods">
              <div className="payment-method">
                <div className="payment-info">
                  <div className="payment-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="payment-name">Cash on Delivery</div>
                    <div className="payment-desc">Accept cash payments on delivery</div>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="payment-method">
                <div className="payment-info">
                  <div className="payment-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="payment-name">bKash</div>
                    <div className="payment-desc">Mobile banking payment</div>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="payment-method">
                <div className="payment-info">
                  <div className="payment-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="payment-name">Credit/Debit Card</div>
                    <div className="payment-desc">Accept card payments</div>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Shipping Settings */}
          <div className="settings-card">
            <h2>Shipping Configuration</h2>
            <form className="settings-form">
              <div className="form-group">
                <label>Free Shipping Threshold</label>
                <input type="number" value="500" className="form-control" />
                <small>Orders above this amount get free shipping</small>
              </div>
              <div className="form-group">
                <label>Standard Delivery Fee</label>
                <input type="number" value="60" className="form-control" />
              </div>
              <div className="form-group">
                <label>Express Delivery Fee</label>
                <input type="number" value="120" className="form-control" />
              </div>
              <div className="form-group">
                <label>Estimated Delivery Time</label>
                <input type="text" value="3-5 business days" className="form-control" />
              </div>
              <button type="submit" className="btn-primary">Save Changes</button>
            </form>
          </div>

          {/* Notification Settings */}
          <div className="settings-card">
            <h2>Notifications</h2>
            <div className="notification-settings">
              <div className="notification-item">
                <div>
                  <div className="notification-title">New Orders</div>
                  <div className="notification-desc">Get notified of new orders</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="notification-item">
                <div>
                  <div className="notification-title">Low Stock Alerts</div>
                  <div className="notification-desc">Alert when products are low in stock</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="notification-item">
                <div>
                  <div className="notification-title">Customer Reviews</div>
                  <div className="notification-desc">Notify about new customer reviews</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

