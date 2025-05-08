
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/BenefitsSection.css';

const BenefitItem = ({ number, title, description, delay }) => (
  <motion.div
    className="benefit-item"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="benefit-number">{number}</div>
    <div className="benefit-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  const benefits = [
    { number: "1", title: "Educación Ambiental Práctica", description: "Los estudiantes aprenden sobre reciclaje y sostenibilidad a través de la acción directa y la participación.", delay: 0.3 },
    { number: "2", title: "Competencia Positiva", description: "Fomenta la participación a través de la competencia sana entre clases y escuelas.", delay: 0.5 },
    { number: "3", title: "Creatividad y Colaboración", description: "Promueve la creatividad a través de proyectos de reutilización y la colaboración entre estudiantes.", delay: 0.7 },
    { number: "4", title: "Impacto Medioambiental Real", description: "Genera un impacto positivo medible en el medio ambiente a través del reciclaje activo.", delay: 0.9 },
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-container">
          <motion.div
            className="benefits-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1d3e5396-2fac-48cb-ab02-f3f3f2859101/c195643ca5fae1ec2aed38b4505d3fdb.png" alt="Elementos Tecnológicos de EcoSchool" />
          </motion.div>

          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
