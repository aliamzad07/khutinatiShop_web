import { AdminLayout } from '../../layouts/AdminLayout'
import './AdminPages.css'

export const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Analytics & Reports</h1>
            <p>Track your store performance and insights</p>
          </div>
          <select className="time-selector">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
            <option>Last Year</option>
          </select>
        </div>

        {/* Analytics Cards */}
        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>Sales Performance</h3>
            <div className="analytics-value">৳458,350</div>
            <div className="analytics-trend positive">
              <span>+12.5% vs last period</span>
            </div>
            <div className="analytics-chart">
              <div className="mini-bars">
                <div className="mini-bar" style={{ height: '40%' }}></div>
                <div className="mini-bar" style={{ height: '60%' }}></div>
                <div className="mini-bar" style={{ height: '50%' }}></div>
                <div className="mini-bar" style={{ height: '80%' }}></div>
                <div className="mini-bar" style={{ height: '70%' }}></div>
                <div className="mini-bar" style={{ height: '90%' }}></div>
                <div className="mini-bar" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Order Volume</h3>
            <div className="analytics-value">1,246</div>
            <div className="analytics-trend positive">
              <span>+8.2% vs last period</span>
            </div>
            <div className="analytics-chart">
              <div className="mini-bars">
                <div className="mini-bar" style={{ height: '60%' }}></div>
                <div className="mini-bar" style={{ height: '50%' }}></div>
                <div className="mini-bar" style={{ height: '70%' }}></div>
                <div className="mini-bar" style={{ height: '65%' }}></div>
                <div className="mini-bar" style={{ height: '80%' }}></div>
                <div className="mini-bar" style={{ height: '75%' }}></div>
                <div className="mini-bar" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Average Order Value</h3>
            <div className="analytics-value">৳3,678</div>
            <div className="analytics-trend positive">
              <span>+4.1% vs last period</span>
            </div>
            <div className="analytics-chart">
              <div className="mini-bars">
                <div className="mini-bar" style={{ height: '70%' }}></div>
                <div className="mini-bar" style={{ height: '75%' }}></div>
                <div className="mini-bar" style={{ height: '60%' }}></div>
                <div className="mini-bar" style={{ height: '85%' }}></div>
                <div className="mini-bar" style={{ height: '90%' }}></div>
                <div className="mini-bar" style={{ height: '80%' }}></div>
                <div className="mini-bar" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Conversion Rate</h3>
            <div className="analytics-value">3.24%</div>
            <div className="analytics-trend negative">
              <span>-0.3% vs last period</span>
            </div>
            <div className="analytics-chart">
              <div className="mini-bars">
                <div className="mini-bar" style={{ height: '100%' }}></div>
                <div className="mini-bar" style={{ height: '90%' }}></div>
                <div className="mini-bar" style={{ height: '85%' }}></div>
                <div className="mini-bar" style={{ height: '80%' }}></div>
                <div className="mini-bar" style={{ height: '75%' }}></div>
                <div className="mini-bar" style={{ height: '70%' }}></div>
                <div className="mini-bar" style={{ height: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="data-card">
          <h2>Top Selling Products</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Sales</th>
                <th>Revenue</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" alt="Product" />
                    </div>
                    <span className="product-name">Wireless Headphones</span>
                  </div>
                </td>
                <td>Electronics</td>
                <td>342 units</td>
                <td>৳1,196,000</td>
                <td><span className="trend-badge up">↑ 15%</span></td>
              </tr>
              <tr>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1517842264229-8e0439c15c89?w=100" alt="Product" />
                    </div>
                    <span className="product-name">Premium Notebook Set</span>
                  </div>
                </td>
                <td>Stationery</td>
                <td>286 units</td>
                <td>৳343,200</td>
                <td><span className="trend-badge up">↑ 8%</span></td>
              </tr>
              <tr>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100" alt="Product" />
                    </div>
                    <span className="product-name">Best Seller Collection</span>
                  </div>
                </td>
                <td>Books</td>
                <td>198 units</td>
                <td>৳316,800</td>
                <td><span className="trend-badge down">↓ 3%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}

