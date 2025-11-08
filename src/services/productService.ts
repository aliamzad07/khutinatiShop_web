import api from '../utils/api'

export interface ProductFilters {
  page?: number
  limit?: number
  category?: string
  minPrice?: number
  maxPrice?: number
  search?: string
  sort?: string
}

export interface Product {
  _id: string
  name: string
  description?: string
  price: number
  discountPrice?: number
  category: {
    _id: string
    name: string
  }
  brand?: string
  images: Array<{
    url: string
    public_id: string
  }>
  stock: number
  ratings?: {
    average: number
    count: number
  }
  isFeatured?: boolean
}

export interface ProductsResponse {
  success: boolean
  count: number
  total: number
  page: number
  pages: number
  data: Product[]
}

class ProductService {
  async getProducts(filters?: ProductFilters): Promise<ProductsResponse> {
    const response = await api.get('/products', { params: filters })
    return response.data
  }

  async getProduct(id: string): Promise<{ success: boolean; data: Product }> {
    const response = await api.get(`/products/${id}`)
    return response.data
  }

  async createProduct(data: Partial<Product>): Promise<any> {
    const response = await api.post('/products', data)
    return response.data
  }

  async updateProduct(id: string, data: Partial<Product>): Promise<any> {
    const response = await api.put(`/products/${id}`, data)
    return response.data
  }

  async deleteProduct(id: string): Promise<any> {
    const response = await api.delete(`/products/${id}`)
    return response.data
  }

  async getFeaturedProducts(): Promise<ProductsResponse> {
    const response = await api.get('/products', { 
      params: { isFeatured: true, limit: 8 } 
    })
    return response.data
  }
}

export default new ProductService()

