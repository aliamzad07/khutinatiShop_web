import { AdminLayout } from '../../layouts/AdminLayout'
import './AdminPages.css'

export const AdminUsers = () => {
  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>User Management</h1>
            <p>Manage customers and administrators</p>
          </div>
        </div>

        {/* User Stats */}
        <div className="quick-stats">
          <div className="quick-stat">
            <span className="stat-count">2,834</span>
            <span className="stat-name">Total Users</span>
          </div>
          <div className="quick-stat">
            <span className="stat-count">245</span>
            <span className="stat-name">New This Month</span>
          </div>
          <div className="quick-stat">
            <span className="stat-count">1,542</span>
            <span className="stat-name">Active Users</span>
          </div>
          <div className="quick-stat">
            <span className="stat-count">12</span>
            <span className="stat-name">Admins</span>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" placeholder="Search users..." />
          </div>
          <div className="filter-actions">
            <select className="filter-select">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Customer</option>
            </select>
            <select className="filter-select">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="data-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">AH</div>
                    <div className="customer-info">
                      <span className="customer-name">Ahmed Hassan</span>
                      <span className="customer-email">Joined Nov 2024</span>
                    </div>
                  </div>
                </td>
                <td>ahmed@example.com</td>
                <td><span className="role-badge customer">Customer</span></td>
                <td>24</td>
                <td>৳45,200</td>
                <td><span className="status-badge active">Active</span></td>
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
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar admin">FR</div>
                    <div className="customer-info">
                      <span className="customer-name">Fatima Rahman</span>
                      <span className="customer-email">Joined Oct 2024</span>
                    </div>
                  </div>
                </td>
                <td>fatima@example.com</td>
                <td><span className="role-badge admin">Admin</span></td>
                <td>-</td>
                <td>-</td>
                <td><span className="status-badge active">Active</span></td>
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
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">KI</div>
                    <div className="customer-info">
                      <span className="customer-name">Karim Islam</span>
                      <span className="customer-email">Joined Sep 2024</span>
                    </div>
                  </div>
                </td>
                <td>karim@example.com</td>
                <td><span className="role-badge customer">Customer</span></td>
                <td>18</td>
                <td>৳32,150</td>
                <td><span className="status-badge active">Active</span></td>
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
            <span className="pagination-info">Showing 1-3 of 2,834 users</span>
            <div className="pagination-buttons">
              <button className="pagination-btn" disabled>Previous</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">...</button>
              <button className="pagination-btn">945</button>
              <button className="pagination-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

