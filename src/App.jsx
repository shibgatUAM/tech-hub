import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import ProductListingPage from './pages/ProductListingPage';
import { ProductProvider } from './provider';

export default function App() {
  return (
    <ProductProvider>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <HeroSection />
        <ProductListingPage />
      </main>
      <Footer />
    </ProductProvider>
  );
}
