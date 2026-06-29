import { useProductContext } from '../context';

export default function ProductFilter() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    setSearchQuery,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedRating,
    setSelectedRating,
  } = useProductContext();

  // filter reset function
  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedPriceRange('All');
    setSelectedRating(0);
  };

  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            onClick={handleClearFilters}
            className="text-xs text-rose-500 font-semibold hover:text-rose-600 transition-colors cursor-pointer"
          >
            Clear
          </button>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategory === category}
                  onChange={() => {
                    setSelectedCategory(
                      selectedCategory === category ? 'All' : category,
                    );
                  }}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price range */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">
            Price Range
          </h4>
          <div className="space-y-2">
            {[
              { id: '0-2000', label: '$0 - $2000' },
              { id: '2000-5000', label: '$2000 - $5000' },
              { id: '5000+', label: '$5000+' },
            ].map((range) => (
              <label
                key={range.id}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="price"
                  checked={selectedPriceRange === range.id}
                  onChange={() => {
                    setSelectedPriceRange(
                      selectedPriceRange === range.id ? 'All' : range.id,
                    );
                  }}
                  className="w-4 h-4 text-rose-500"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            {[4.5, 4.0, 3.5].map((rate) => (
              <label key={rate} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRating === rate}
                  onChange={() => {
                    setSelectedRating(selectedRating === rate ? 0 : rate);
                  }}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {rate} ⭐ & up
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
