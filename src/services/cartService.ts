import api from '../utils/api'

export interface CartItem {
  _id: string
  product: {
    _id: string
    name: string
    price: number
    images: Array<{ url: string }>
  }
  quantity: number
  price: number
}

export interface Cart {
  _id: string
  user: string
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

class CartService {
  async getCart(): Promise<{ success: boolean; data: Cart }> {
    const response = await api.get('/cart')
    return response.data
  }

  async addToCart(productId: string, quantity: number): Promise<any> {
    const response = await api.post('/cart', { productId, quantity })
    return response.data
  }

  async updateCartItem(itemId: string, quantity: number): Promise<any> {
    const response = await api.put(`/cart/${itemId}`, { quantity })
    return response.data
  }

  async removeFromCart(itemId: string): Promise<any> {
    const response = await api.delete(`/cart/${itemId}`)
    return response.data
  }

  async clearCart(): Promise<any> {
    const response = await api.delete('/cart')
    return response.data
  }
}

export default new CartService()

