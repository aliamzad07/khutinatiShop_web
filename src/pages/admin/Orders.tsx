import { AdminLayout } from '../../layouts/AdminLayout'
import './AdminPages.css'

export const AdminOrders = () => {
  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Order Management</h1>
            <p>Track and manage customer orders</p>
          </div>
          <button className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Export Orders</span>
          </button>
        </div>

        {/* Order Stats */}
        <div className="quick-stats">
          <div className="quick-stat">
            <span className="stat-count">42</span>
            <span className="stat-name">Pending</span>
          </div>
          <div className="quick-stat">
            <span className="stat-count">28</span>
            <span className="stat-name">Processing</span>
          </div>
          <div className="quick-stat">
            <span className="stat-count">156</span>
            <span className="stat-name">Shipped</span>
          </div>
          <div className="quick-stat">
            <span className="stat-count">1,020</span>
            <span className="stat-name">Delivered</span>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" placeholder="Search orders..." />
          </div>
          <div className="filter-actions">
            <select className="filter-select">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <select className="filter-select">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
              <option>Custom Range</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="data-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>#ORD-1246</strong></td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">AH</div>
                    <div className="customer-info">
                      <span className="customer-name">Ahmed Hassan</span>
                      <span className="customer-email">ahmed@example.com</span>
                    </div>
                  </div>
                </td>
                <td>Nov 8, 2024</td>
                <td>3 items</td>
                <td><strong>৳3,450</strong></td>
                <td><span className="status-badge delivered">Delivered</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>#ORD-1245</strong></td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">FR</div>
                    <div className="customer-info">
                      <span className="customer-name">Fatima Rahman</span>
                      <span className="customer-email">fatima@example.com</span>
                    </div>
                  </div>
                </td>
                <td>Nov 7, 2024</td>
                <td>2 items</td>
                <td><strong>৳2,100</strong></td>
                <td><span className="status-badge shipped">Shipped</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>#ORD-1244</strong></td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">KI</div>
                    <div className="customer-info">
                      <span className="customer-name">Karim Islam</span>
                      <span className="customer-email">karim@example.com</span>
                    </div>
                  </div>
                </td>
                <td>Nov 6, 2024</td>
                <td>5 items</td>
                <td><strong>৳5,890</strong></td>
                <td><span className="status-badge processing">Processing</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>#ORD-1243</strong></td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">NK</div>
                    <div className="customer-info">
                      <span className="customer-name">Nadia Khan</span>
                      <span className="customer-email">nadia@example.com</span>
                    </div>
                  </div>
                </td>
                <td>Nov 6, 2024</td>
                <td>1 item</td>
                <td><strong>৳1,750</strong></td>
                <td><span className="status-badge pending">Pending</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <span className="pagination-info">Showing 1-4 of 1,246 orders</span>
            <div className="pagination-buttons">
              <button className="pagination-btn" disabled>Previous</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">...</button>
              <button className="pagination-btn">312</button>
              <button className="pagination-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

