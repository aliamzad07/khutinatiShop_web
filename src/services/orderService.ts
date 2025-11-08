import api from '../utils/api'

export interface ShippingAddress {
  fullName: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface OrderItem {
  product: string
  name: string
  quantity: number
  image: string
  price: number
}

export interface CreateOrderData {
  orderItems: OrderItem[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
}

export interface Order {
  _id: string
  orderItems: OrderItem[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  orderStatus: string
  isPaid: boolean
  paidAt?: string
  isDelivered: boolean
  deliveredAt?: string
  createdAt: string
}

class OrderService {
  async createOrder(data: CreateOrderData): Promise<{ success: boolean; data: Order }> {
    const response = await api.post('/orders', data)
    return response.data
  }

  async getMyOrders(): Promise<{ success: boolean; count: number; data: Order[] }> {
    const response = await api.get('/orders')
    return response.data
  }

  async getOrder(id: string): Promise<{ success: boolean; data: Order }> {
    const response = await api.get(`/orders/${id}`)
    return response.data
  }

  async cancelOrder(id: string): Promise<any> {
    const response = await api.put(`/orders/${id}/cancel`)
    return response.data
  }
}

export default new OrderService()

