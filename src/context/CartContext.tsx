import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import cartService, { Cart } from '../services/cartService'
import { useAuth } from './AuthContext'

interface CartContextType {
  cart: Cart | null
  loading: boolean
  refreshCart: () => Promise<void>
  addToCart: (productId: string, quantity: number) => Promise<void>
  updateQuantity: (itemId: string, quantity: number) => Promise<void>
  removeItem: (itemId: string) => Promise<void>
  clearCart: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = useAuth()

  const refreshCart = async () => {
    if (!isAuthenticated) {
      setCart(null)
      return
    }

    try {
      setLoading(true)
      const response = await cartService.getCart()
      setCart(response.data)
    } catch (error) {
      console.error('Failed to fetch cart:', error)
      setCart(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshCart()
  }, [isAuthenticated])

  const addToCart = async (productId: string, quantity: number) => {
    await cartService.addToCart(productId, quantity)
    await refreshCart()
  }

  const updateQuantity = async (itemId: string, quantity: number) => {
    await cartService.updateCartItem(itemId, quantity)
    await refreshCart()
  }

  const removeItem = async (itemId: string) => {
    await cartService.removeFromCart(itemId)
    await refreshCart()
  }

  const clearCart = async () => {
    await cartService.clearCart()
    setCart(null)
  }

  const value = {
    cart,
    loading,
    refreshCart,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

