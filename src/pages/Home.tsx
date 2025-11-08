import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <Features />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  )
}

