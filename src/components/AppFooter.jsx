
import React from 'react';
import '@/styles/AppFooter.css';

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <p>© 2025 EcoSchool - Transformando escuelas a través del reciclaje</p>
        <p>Una iniciativa para crear un futuro más sostenible</p>

        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
