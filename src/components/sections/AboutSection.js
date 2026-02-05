import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Acerca de Nosotros</h2>
            <p>
              En ResDelicious, creemos que la buena comida trae alegría y une a las personas. 
              Nuestro restaurante fue fundado en 2020 con la misión de ofrecer experiencias 
              gastronómicas inolvidables mediante ingredientes frescos y recetas tradicionales 
              con un toque moderno.
            </p>
            <p>
              Cada plato que servimos es preparado con amor y atención al detalle, utilizando 
              solo los ingredientes más frescos de proveedores locales. Nuestro equipo de chefs 
              apasionados trabaja incansablemente para crear sabores que deleiten tu paladar.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>1000+</h3>
                <p>Clientes Felices</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Platos Exclusivos</p>
              </div>
              <div className="stat">
                <h3>5</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/about-us.jpg" alt="Nuestro equipo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;