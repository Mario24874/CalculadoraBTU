import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/ui/Footer'; // Ajusta la ruta de importación
import './WelcomePage.css';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-background">
      <div className="welcome-container">
        <h1 className="welcome-title">Bienvenido a la Calculadora de BTU</h1>
        <p className="welcome-description">
          Esta aplicación te ayudará a calcular los BTU necesarios para climatizar tu espacio de manera eficiente.
        </p>
        <Link to="/calculator" className="start-button">
          Empezar
        </Link>
        <Footer /> {/* Incluye el pie de página */}
      </div>
    </div>
  );
};

export default WelcomePage;