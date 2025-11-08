import api from '../utils/api'

export interface AdminAnalytics {
  users: {
    total: number
    newThisMonth: number
  }
  products: {
    total: number
    active: number
    outOfStock: number
  }
  orders: {
    total: number
    pending: number
    processing: number
    shipped: number
    delivered: number
    cancelled: number
  }
  revenue: {
    total: string
    average: string
    monthly: Array<{
      _id: { year: number; month: number }
      revenue: number
      orders: number
    }>
  }
  topProducts: any[]
  recentOrders: any[]
}

class AdminService {
  // Analytics
  async getAnalytics(): Promise<{ success: boolean; data: AdminAnalytics }> {
    const response = await api.get('/admin/analytics')
    return response.data
  }

  // Orders Management
  async getAllOrders(params?: { page?: number; limit?: number; status?: string }): Promise<any> {
    const response = await api.get('/admin/orders', { params })
    return response.data
  }

  async updateOrderStatus(orderId: string, status: string): Promise<any> {
    const response = await api.put(`/admin/orders/${orderId}`, { status })
    return response.data
  }

  // User Management
  async getAllUsers(params?: { page?: number; limit?: number }): Promise<any> {
    const response = await api.get('/users', { params })
    return response.data
  }

  async getUser(userId: string): Promise<any> {
    const response = await api.get(`/users/${userId}`)
    return response.data
  }

  async updateUser(userId: string, data: any): Promise<any> {
    const response = await api.put(`/users/${userId}`, data)
    return response.data
  }

  async deleteUser(userId: string): Promise<any> {
    const response = await api.delete(`/users/${userId}`)
    return response.data
  }

  async updateUserRole(userId: string, role: string): Promise<any> {
    const response = await api.put(`/users/${userId}/role`, { role })
    return response.data
  }

  // Category Management
  async getCategories(): Promise<any> {
    const response = await api.get('/categories')
    return response.data
  }

  async createCategory(data: any): Promise<any> {
    const response = await api.post('/categories', data)
    return response.data
  }

  async updateCategory(id: string, data: any): Promise<any> {
    const response = await api.put(`/categories/${id}`, data)
    return response.data
  }

  async deleteCategory(id: string): Promise<any> {
    const response = await api.delete(`/categories/${id}`)
    return response.data
  }

  // Coupon Management
  async getCoupons(): Promise<any> {
    const response = await api.get('/coupons')
    return response.data
  }

  async createCoupon(data: any): Promise<any> {
    const response = await api.post('/coupons', data)
    return response.data
  }

  async updateCoupon(id: string, data: any): Promise<any> {
    const response = await api.put(`/coupons/${id}`, data)
    return response.data
  }

  async deleteCoupon(id: string): Promise<any> {
    const response = await api.delete(`/coupons/${id}`)
    return response.data
  }
}

export default new AdminService()

