import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import ProductAdd from './ProductAdd';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(new Set());

  const addProduct = (newProduct) => {
    newProduct.id = new Date().getTime();
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  const handleCheckedProduct = (productId, isChecked) => {
    const updatedSelectedProducts = new Set(selectedProducts);
    if (isChecked) {
      updatedSelectedProducts.add(productId);
    } else {
      updatedSelectedProducts.delete(productId);
    }
    setSelectedProducts(updatedSelectedProducts);
  };

  const handleMassDelete = () => {
    const updatedProducts = products.filter((product) => !selectedProducts.has(product.id));
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
    setSelectedProducts(new Set());
  };

  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <Header onMassDelete={handleMassDelete} />
        <Switch>
          <Route exact path="/">
            <ProductList products={products} onCheckedProduct={handleCheckedProduct} />
          </Route>
          <Route path="/add-product">
            <ProductAdd addProduct={addProduct} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
