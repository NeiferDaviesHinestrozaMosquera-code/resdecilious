import React from 'react';
import './MenuSection.css';

const MenuSection = () => {
  const menuItems = [
    {
      name: 'Pizza Margherita',
      description: 'Tomate, mozzarella y albahaca fresca',
      price: '$12.99',
      image: '/images/ima1.png'
    },
    {
      name: 'Pasta Carbonara',
      description: 'Pasta con huevo, queso parmesano y panceta',
      price: '$14.99',
      image: '/images/pasta-carbonara.jpg'
    },
    {
      name: 'Ensalada César',
      description: 'Lechuga, pollo a la parrilla, crutones y aderezo César',
      price: '$9.99',
      image: '/images/ensalada-cesar.jpg'
    }
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2 className="section-title">Nuestro Menú</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;