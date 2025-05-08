
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2>PROPUESTA</h2>
            <h3>DE NEGOCIO</h3>
            <p>
              Una app y red social escolar creada por jóvenes para fomentar el reciclaje en escuelas.
              Los estudiantes ganan puntos por reciclar materiales (papel, plástico, latas) y
              competir entre clases, grados o escuelas. También se pueden subir videos creativos
              mostrando cómo reutilizan cosas o hacen manualidades ecológicas.
            </p>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1d3e5396-2fac-48cb-ab02-f3f3f2859101/9dda26e1ea7981dead595f55d95451e6.png" alt="Propuesta de Negocio EcoSchool" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
