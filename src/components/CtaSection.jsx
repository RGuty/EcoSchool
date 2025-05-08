
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¡Únete a la Revolución Verde!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Implementa EcoSchool en tu institución educativa y forma parte del cambio.
          Juntos podemos crear una generación de estudiantes conscientes y comprometidos con el medio ambiente.
        </motion.p>
        <motion.a
          href="#"
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar Información
        </motion.a>
      </div>
    </section>
  );
};

export default CtaSection;
