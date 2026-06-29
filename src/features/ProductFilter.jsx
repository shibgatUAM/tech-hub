import { useProductContext } from '../context';

export default function ProductFilter() {
  const { categories, selectedCategory, setSelectedCategory, setSearchQuery } =
    useProductContext();

  // filter reset function
  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
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
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="price"
                className="w-4 h-4 text-rose-500"
              />
              <span className="ml-3 text-sm text-slate-700">$0 - $2000</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="price"
                className="w-4 h-4 text-rose-500"
              />
              <span className="ml-3 text-sm text-slate-700">$2000 - $5000</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="price"
                checked
                className="w-4 h-4 text-rose-500"
              />
              <span className="ml-3 text-sm text-slate-700">$5000+</span>
            </label>
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked
                className="w-4 h-4 text-rose-500 rounded border-slate-300"
              />
              <span className="ml-3 text-sm text-slate-700">4.5 ⭐ & up</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-rose-500 rounded border-slate-300"
              />
              <span className="ml-3 text-sm text-slate-700">4.0 ⭐ & up</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-rose-500 rounded border-slate-300"
              />
              <span className="ml-3 text-sm text-slate-700">3.5 ⭐ & up</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
