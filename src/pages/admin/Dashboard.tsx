import { AdminLayout } from '../../layouts/AdminLayout'
import './Dashboard.css'

export const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card revenue">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Total Revenue</span>
              <div className="stat-value">৳458,350</div>
              <div className="stat-change positive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>+12.5% from last month</span>
              </div>
            </div>
          </div>

          <div className="stat-card orders">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 2a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v1c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V7a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H9z"></path>
                <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9"></path>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Total Orders</span>
              <div className="stat-value">1,246</div>
              <div className="stat-change positive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>+8.2% from last month</span>
              </div>
            </div>
          </div>

          <div className="stat-card customers">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Total Customers</span>
              <div className="stat-value">2,834</div>
              <div className="stat-change positive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>+15.3% from last month</span>
              </div>
            </div>
          </div>

          <div className="stat-card products">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Total Products</span>
              <div className="stat-value">584</div>
              <div className="stat-change negative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
                <span>-2.1% from last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Recent Orders */}
        <div className="dashboard-grid">
          {/* Sales Chart */}
          <div className="dashboard-card chart-card">
            <div className="card-header">
              <h2>Sales Overview</h2>
              <select className="time-selector">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="chart-container">
              <div className="chart-bars">
                <div className="bar" style={{ height: '60%' }}>
                  <span className="bar-value">৳45K</span>
                </div>
                <div className="bar" style={{ height: '80%' }}>
                  <span className="bar-value">৳68K</span>
                </div>
                <div className="bar" style={{ height: '50%' }}>
                  <span className="bar-value">৳38K</span>
                </div>
                <div className="bar" style={{ height: '95%' }}>
                  <span className="bar-value">৳85K</span>
                </div>
                <div className="bar" style={{ height: '70%' }}>
                  <span className="bar-value">৳55K</span>
                </div>
                <div className="bar" style={{ height: '85%' }}>
                  <span className="bar-value">৳72K</span>
                </div>
                <div className="bar active" style={{ height: '100%' }}>
                  <span className="bar-value">৳92K</span>
                </div>
              </div>
              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Order Statistics */}
          <div className="dashboard-card order-stats-card">
            <div className="card-header">
              <h2>Order Statistics</h2>
            </div>
            <div className="order-stats">
              <div className="order-stat-item">
                <div className="stat-circle pending">
                  <span>42</span>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Pending</span>
                  <span className="stat-subtitle">Orders to process</span>
                </div>
              </div>
              <div className="order-stat-item">
                <div className="stat-circle processing">
                  <span>28</span>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Processing</span>
                  <span className="stat-subtitle">In progress</span>
                </div>
              </div>
              <div className="order-stat-item">
                <div className="stat-circle shipped">
                  <span>156</span>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Shipped</span>
                  <span className="stat-subtitle">On the way</span>
                </div>
              </div>
              <div className="order-stat-item">
                <div className="stat-circle delivered">
                  <span>1,020</span>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Delivered</span>
                  <span className="stat-subtitle">Successfully delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts and Recent Orders */}
        <div className="dashboard-grid-2">
          {/* Low Stock Alerts */}
          <div className="dashboard-card alerts-card">
            <div className="card-header">
              <h2>Low Stock Alerts</h2>
              <span className="alert-count">5 items</span>
            </div>
            <div className="alerts-list">
              <div className="alert-item">
                <div className="alert-icon warning">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="alert-content">
                  <span className="alert-title">Premium Notebook Set</span>
                  <span className="alert-subtitle">Only 3 units left</span>
                </div>
                <button className="alert-action">Restock</button>
              </div>
              <div className="alert-item">
                <div className="alert-icon warning">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="alert-content">
                  <span className="alert-title">Wireless Headphones</span>
                  <span className="alert-subtitle">Only 2 units left</span>
                </div>
                <button className="alert-action">Restock</button>
              </div>
              <div className="alert-item">
                <div className="alert-icon critical">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div className="alert-content">
                  <span className="alert-title">Decorative Gift Box</span>
                  <span className="alert-subtitle">Out of stock</span>
                </div>
                <button className="alert-action urgent">Urgent</button>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="dashboard-card recent-orders-card">
            <div className="card-header">
              <h2>Recent Orders</h2>
              <a href="/admin/orders" className="view-all-link">View All</a>
            </div>
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORD-1246</td>
                    <td>Ahmed Hassan</td>
                    <td>৳3,450</td>
                    <td><span className="status-badge delivered">Delivered</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-1245</td>
                    <td>Fatima Rahman</td>
                    <td>৳2,100</td>
                    <td><span className="status-badge shipped">Shipped</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-1244</td>
                    <td>Karim Islam</td>
                    <td>৳5,890</td>
                    <td><span className="status-badge processing">Processing</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-1243</td>
                    <td>Nadia Khan</td>
                    <td>৳1,750</td>
                    <td><span className="status-badge pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-1242</td>
                    <td>Rahim Ali</td>
                    <td>৳4,200</td>
                    <td><span className="status-badge delivered">Delivered</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

