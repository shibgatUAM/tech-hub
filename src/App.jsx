import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <HeroSection />
      </main>
    </>
  );
}
