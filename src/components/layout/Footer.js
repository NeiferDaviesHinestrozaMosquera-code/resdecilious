import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ResDelicious</h3>
            <p>La mejor experiencia gastronómica en un solo lugar.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#gallery">Galería</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p><i className="fas fa-map-marker-alt"></i> Calle Principal 123, Ciudad</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope"></i> info@resdelicious.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Horarios</h4>
            <p>Lunes - Viernes: 11:00 - 22:00</p>
            <p>Sábados: 10:00 - 23:00</p>
            <p>Domingos: 10:00 - 21:00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ResDelicious. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;