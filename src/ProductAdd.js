import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProductAdd.css';


const ProductAdd = ({ addProduct }) => {
  const [type, setType] = useState('DVD');
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [attribute, setAttribute] = useState({});

  const history = useHistory();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleAttributeChange = (e) => {
    setAttribute({ ...attribute, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (sku.length === 0) {
      alert('SKU field is empty');
      return false;
    } else if (name.length === 0) {
      alert('Name field is empty');
      return false;
    } else if (price.length === 0) {
      alert('Price field is empty');
      return false;
    } else if (Object.keys(attribute).length === 0) {
      alert('Attribute field is empty');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addProduct({ type, sku, name, price, attribute });
      history.push('/');
    }
  };

  const attributeInput = () => {
    switch (type) {
      case 'DVD':
        return (
          <div className="form-field">
            <label htmlFor="attribute">Size in MB</label>
            <input
              type="number"
              name="size"
              id="attribute"
              min="0"
              step="1"
              value={attribute.size || ''}
              onChange={handleAttributeChange}
            />
          </div>
        );
      case 'Book':
        return (
          <div className="form-field">
            <label htmlFor="attribute">Weight in kg</label>
            <input
              type="number"
              name="weight"
              id="attribute"
              min="0"
              step="0.1"
              value={attribute.weight || ''}
              onChange={handleAttributeChange}
            />
          </div>
        );
      case 'Furniture':
        return (
          <>
            <div className="form-field">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                name="height"
                id="height"
                min="0"
                step="1"
                value={attribute.height || ''}
                onChange={handleAttributeChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="width">Width (cm)</label>
              <input
                type="number"
                name="width"
                id="width"
                min="0"
                step="1"
                value={attribute.width || ''}
                onChange={handleAttributeChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="length">Length (cm)</label>
              <input
                type="number"
                name="length"
                id="length"
                min="0"
                step="1"
                value={attribute.length || ''}
                onChange={handleAttributeChange}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="product-add-container">
    <div className="title">
    <h2>Product Add</h2>
    <div className="buttons">
    <button className="btn-save" onClick={handleSubmit}>
    Save
    </button>
    <button className="btn-cancel" onClick={() => history.push('/')}>
    Cancel
    </button>
    </div>
    </div>
    <form id="product_form">
    <div className="form-field">
    <label htmlFor="type">Type</label>
    <select
             name="type"
             id="productType"
             value={type}
             onChange={handleTypeChange}
           >
    <option value="DVD">DVD</option>
    <option value="Book">Book</option>
    <option value="Furniture">Furniture</option>
    </select>
    </div>
    <div className="form-field">
    <label htmlFor="sku">SKU</label>
    <input
    type="text"
    name="sku"
    id="sku"
    value={sku}
    onChange={(e) => setSku(e.target.value)}
    />
    </div>
    <div className="form-field">
    <label htmlFor="name">Name</label>
    <input
    type="text"
    name="name"
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>
    <div className="form-field">
    <label htmlFor="price">Price ($)</label>
    <input
    type="number"
    name="price"
    id="price"
    min="0"
    step="0.01"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    />
    </div>
    {attributeInput()}
    </form>
    </div>
    );
    };
    
    export default ProductAdd;
