
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/FeaturesSection.css';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="feature-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10 }}
  >
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    { icon: "1", title: "App Básica", description: "App básica o sitio web con formularios de puntos para registrar y gestionar el reciclaje de los estudiantes.", delay: 0.3 },
    { icon: "2", title: "Código QR", description: "Código QR en cajas de reciclaje: para escanear cuando alguien recicla y sumar puntos automáticamente.", delay: 0.5 },
    { icon: "3", title: "Red Social Interna", description: "Red social interna: para compartir ideas, retos ecológicos o videos de reciclaje creativo entre estudiantes.", delay: 0.7 },
    { icon: "4", title: "Sistema de Logros", description: "Sistema de logros, medallas y clasificaciones entre grupos para fomentar la competencia sana y la participación.", delay: 0.9 },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ELEMENTOS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TECNOLÓGICOS
          </motion.h3>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
