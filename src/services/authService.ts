import api from '../utils/api'

export interface RegisterData {
  name: string
  email: string
  password: string
  phone: string
}

export interface LoginData {
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  message: string
  data: {
    _id: string
    name: string
    email: string
    role: string
    token: string
  }
}

class AuthService {
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post('/auth/register', data)
    if (response.data.success) {
      this.setAuthData(response.data.data)
    }
    return response.data
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data)
    if (response.data.success) {
      this.setAuthData(response.data.data)
    }
    return response.data
  }

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout')
    } finally {
      this.clearAuthData()
    }
  }

  async forgotPassword(email: string): Promise<any> {
    const response = await api.post('/auth/forgot-password', { email })
    return response.data
  }

  setAuthData(data: any) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('userRole', data.role)
    localStorage.setItem('user', JSON.stringify({
      id: data._id,
      name: data.name,
      email: data.email,
      role: data.role
    }))
  }

  clearAuthData() {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('user')
  }

  getUser() {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isAuthenticated() {
    return !!this.getToken()
  }

  isAdmin() {
    return localStorage.getItem('userRole') === 'admin'
  }
}

export default new AuthService()

