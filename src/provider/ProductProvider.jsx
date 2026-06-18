import { useMemo, useState } from 'react';
import { ProductContext } from '../context';
import { useProduct } from '../hooks';

export default function ProductProvider({ children }) {
  const { products, loading, error } = useProduct();

  // local state for search, filter & sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // filter as per searchQuery
    if (searchQuery.trim() !== '') {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
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

    return result;
  }, [products, searchQuery, selectedCategory, sortOption]);

  const categories = useMemo(() => {
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
  };

  return <ProductContext value={value}>{children}</ProductContext>;
}
