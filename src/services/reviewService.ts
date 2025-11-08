import api from '../utils/api'

export interface Review {
  _id: string
  user: {
    _id: string
    name: string
  }
  product: string
  rating: number
  title: string
  comment: string
  createdAt: string
}

export interface CreateReviewData {
  product: string
  rating: number
  title: string
  comment: string
}

class ReviewService {
  async getProductReviews(productId: string): Promise<{ success: boolean; data: Review[] }> {
    const response = await api.get(`/reviews/product/${productId}`)
    return response.data
  }

  async createReview(data: CreateReviewData): Promise<any> {
    const response = await api.post('/reviews', data)
    return response.data
  }

  async getMyReviews(): Promise<{ success: boolean; data: Review[] }> {
    const response = await api.get('/reviews/my-reviews')
    return response.data
  }

  async updateReview(id: string, data: Partial<CreateReviewData>): Promise<any> {
    const response = await api.put(`/reviews/${id}`, data)
    return response.data
  }

  async deleteReview(id: string): Promise<any> {
    const response = await api.delete(`/reviews/${id}`)
    return response.data
  }
}

export default new ReviewService()

