import React from 'react';
import ImageCarousel from '../ui/ImageCarousel';
import './GallerySection.css';

const GallerySection = () => {
  const galleryImages = [
    '\assets\images\ima1.png',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">
          Un vistazo a nuestros platos y ambiente
        </p>
        <div className="gallery-carousel">
          <ImageCarousel images={galleryImages} autoPlay={true} interval={4000} />
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;