import api from '../utils/api'

export interface ValidateCouponData {
  code: string
  cartTotal: number
}

export interface CouponResponse {
  success: boolean
  message: string
  data: {
    code: string
    discountAmount: string
    finalAmount: string
  }
}

class CouponService {
  async validateCoupon(data: ValidateCouponData): Promise<CouponResponse> {
    const response = await api.post('/coupons/validate', data)
    return response.data
  }
}

export default new CouponService()

