import React from 'react';
import './ProductList.css';

function ProductList({ products, onCheckedProduct }) {
  const handleCheckboxChange = (productId, isChecked) => {
    if (onCheckedProduct) {
      onCheckedProduct(productId, isChecked);
    }
  };

  const displayAttribute = (attribute) => {
    const attributeName = Object.keys(attribute)[0];
    const attributeValue = attribute[attributeName];
    let formattedName = '';

    switch (attributeName) {
      case 'size':
        formattedName = 'Size (MB)';
        break;
      case 'weight':
        formattedName = 'Weight (kg)';
        break;
      case 'height':
        formattedName = 'Height (cm)';
        break;
      case 'width':
        formattedName = 'Width (cm)';
        break;
      case 'length':
        formattedName = 'Length (cm)';
        break;
      default:
        formattedName = attributeName;
    }

    return `${formattedName}: ${attributeValue}`;
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-box">
          <h3>{product.name}</h3>
          <p>SKU: {product.sku}</p>
          <p>Price: ${product.price}</p>
          <p>Type: {product.type}</p>
          <p>{displayAttribute(product.attribute)}</p>
          <input
            type="checkbox"
            className="delete-checkbox"
            onChange={(e) => handleCheckboxChange(product.id, e.target.checked)}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
