import { useProductContext } from '../context';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { filteredProducts, loading, error } = useProductContext();

  // loading skelton
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="soft-card overflow-hidden bg-white">
            <div className="aspect-square bg-slate-100 animate-pulse"></div>
            <div className="p-5 space-y-3">
              <div className="h-5 bg-slate-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
              <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3"></div>
              <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
              <div className="h-10 bg-slate-200 rounded-lg animate-pulse mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500 font-semibold bg-red-50 rounded-xl p-6">
        ❌ Error loading products: {error}
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16 text-slate-500 font-medium">
        🔍 No products found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
