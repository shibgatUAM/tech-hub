import { createContext, useContext } from 'react';

const ProductContext = createContext(null);

function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }

  return context;
}

export { ProductContext, useProductContext };
