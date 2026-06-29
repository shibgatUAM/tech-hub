import { useMemo, useState } from 'react';
import { ProductContext } from '../context';
import { useProduct } from '../hooks';

export default function ProductProvider({ children }) {
  const { products, loading, error } = useProduct();

  // local state for search, filter & sorting

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');

  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredProducts = useMemo(() => {
    let result = Array.isArray(products) ? [...products] : [];

    if (result.length === 0) return [];

    // filter as per searchQuery
    if (searchQuery.trim() !== '') {
      result = result.filter((product) =>
        product.title?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // filter as per selectedCategory
    if (selectedCategory !== 'All') {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // sorting logic
    if (sortOption === 'price-low-to-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-to-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortOption === 'Oldest') {
      result.sort((a, b) => a.id - b.id);
    }

    // price filter
    if (selectedPriceRange === '0-2000') {
      result = result.filter((p) => p.price <= 2000);
    } else if (selectedPriceRange === '2000-5000') {
      result = result.filter((p) => p.price > 2000 && p.price <= 5000);
    } else if (selectedPriceRange === '5000+') {
      result = result.filter((p) => p.price > 5000);
    }

    // rating filter
    if (selectedRating > 0) {
      result = result.filter((p) => p.rating_rate >= selectedRating);
    }

    return result;
  }, [
    products,
    searchQuery,
    selectedCategory,
    sortOption,
    selectedPriceRange,
    selectedRating,
  ]);

  const categories = useMemo(() => {
    if (!Array.isArray(products) || products.length === 0) return ['All'];

    const allCategories = products.map((p) => p.category);
    return ['All', ...new Set(allCategories)];
  }, [products]);

  const value = {
    products,
    filteredProducts,
    loading,
    error,
    categories,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedRating,
    setSelectedRating,
  };

  return <ProductContext value={value}>{children}</ProductContext>;
}
