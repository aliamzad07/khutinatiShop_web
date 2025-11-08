import { AdminLayout } from '../../layouts/AdminLayout'
import './AdminPages.css'

export const AdminProducts = () => {
  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Product Management</h1>
            <p>Manage your product catalog and inventory</p>
          </div>
          <button className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add Product</span>
          </button>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" placeholder="Search products..." />
          </div>
          <div className="filter-actions">
            <select className="filter-select">
              <option>All Categories</option>
              <option>Stationery</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Books</option>
            </select>
            <select className="filter-select">
              <option>All Status</option>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>
            <button className="filter-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="data-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1517842264229-8e0439c15c89?w=100" alt="Product" />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Premium Notebook Set</span>
                      <span className="product-sku">SKU: NB-001</span>
                    </div>
                  </div>
                </td>
                <td>Stationery</td>
                <td>৳1,200</td>
                <td><span className="stock-badge low">3 units</span></td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="action-btn delete">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" alt="Product" />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Wireless Headphones</span>
                      <span className="product-sku">SKU: EL-045</span>
                    </div>
                  </div>
                </td>
                <td>Electronics</td>
                <td>৳3,500</td>
                <td><span className="stock-badge low">2 units</span></td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="action-btn delete">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=100" alt="Product" />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Decorative Gift Box</span>
                      <span className="product-sku">SKU: GF-012</span>
                    </div>
                  </div>
                </td>
                <td>Gifts</td>
                <td>৳850</td>
                <td><span className="stock-badge out">0 units</span></td>
                <td><span className="status-badge inactive">Inactive</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="action-btn delete">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100" alt="Product" />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Best Seller Collection</span>
                      <span className="product-sku">SKU: BK-089</span>
                    </div>
                  </div>
                </td>
                <td>Books</td>
                <td>৳1,600</td>
                <td><span className="stock-badge good">45 units</span></td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="action-btn delete">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <span className="pagination-info">Showing 1-4 of 584 products</span>
            <div className="pagination-buttons">
              <button className="pagination-btn" disabled>Previous</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">...</button>
              <button className="pagination-btn">146</button>
              <button className="pagination-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

