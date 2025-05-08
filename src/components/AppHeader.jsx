
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/AppHeader.css';

const AppHeader = () => {
  return (
    <header>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EcoSchool
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Transformando escuelas a través del reciclaje y la conciencia ambiental
        </motion.p>
      </div>
    </header>
  );
};

export default AppHeader;
