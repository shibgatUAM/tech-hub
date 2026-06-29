import { useProductContext } from '../context';

export default function SortBy() {
  const { sortOption, setSortOption } = useProductContext();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-slate-700">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
}
