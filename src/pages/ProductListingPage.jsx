import ProductFilter from '../features/ProductFilter';
import ProductList from '../features/ProductList';
import SortBy from '../features/SortBy';

export default function ProductListingPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Product Filter */}
      <ProductFilter />

      <div className="md:col-span-3">
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">Showing 12 products</p>

          {/* Sort By */}
          <SortBy />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Products List */}
          <ProductList />
        </div>
      </div>
    </div>
  );
}
