import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import ProductListingPage from './pages/ProductListingPage';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <HeroSection />
        <ProductListingPage />
      </main>
      <Footer />
    </>
  );
}
