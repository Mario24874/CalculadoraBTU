import React, { useState } from 'react';
import Footer from './components/ui/Footer'; // Ajusta la ruta de importación
import './styles.css';

interface BtuCalculatorProps {}

const BtuCalculator: React.FC<BtuCalculatorProps> = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [desiredTemperature, setDesiredTemperature] = useState<string>('');
  const [outsideTemperature, setOutsideTemperature] = useState<string>('');
  const [btuResult, setBtuResult] = useState<string>('');

  const calculateBtu = () => {
    const lengthValue = parseFloat(length.replace('.', ',').replace(/[^0-9,]/g, '').replace(',', '.'));
    const widthValue = parseFloat(width.replace('.', ',').replace(/[^0-9,]/g, '').replace(',', '.'));
    const heightValue = parseFloat(height.replace('.', ',').replace(/[^0-9,]/g, '').replace(',', '.'));
    const desiredTempValue = parseFloat(desiredTemperature);
    const outsideTempValue = parseFloat(outsideTemperature);

    if (isNaN(lengthValue) || isNaN(widthValue) || isNaN(heightValue) || isNaN(desiredTempValue) || isNaN(outsideTempValue)) {
      alert('Por favor, introduce valores numéricos válidos para las dimensiones y temperaturas.');
      return;
    }

    const volume = lengthValue * widthValue * heightValue;
    const temperatureDifference = Math.abs(desiredTempValue - outsideTempValue);
    const btu = volume * temperatureDifference * 0.04; // Factor de conversión ajustado
    setBtuResult(btu.toFixed(3)); // Mostrar en BTU con máximo 3 decimales
  };

  const clearInputs = () => {
    setLength('');
    setWidth('');
    setHeight('');
    setDesiredTemperature('');
    setOutsideTemperature('');
    setBtuResult('');
  };

  return (
    <div className="calculator-background">
      <div className="container">
        <h2 className="title">Calculadora de BTU</h2>
        <form>
          <div className="input-group">
            <label htmlFor="length">Largo (mts.)</label>
            <input
              type="text"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="width">Ancho (mts.)</label>
            <input
              type="text"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="height">Alto (mts.)</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="desiredTemperature">Temperatura deseada (°C)</label>
            <input
              type="number"
              id="desiredTemperature"
              value={desiredTemperature}
              onChange={(e) => setDesiredTemperature(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="outsideTemperature">Temperatura exterior (°C)</label>
            <input
              type="number"
              id="outsideTemperature"
              value={outsideTemperature}
              onChange={(e) => setOutsideTemperature(e.target.value)}
            />
          </div>
          <button type="button" className="calculate-btn" onClick={calculateBtu}>
            Calcular BTU
          </button>
          <button type="button" className="clear-btn" onClick={clearInputs}>
            Limpiar
          </button>
        </form>
        {btuResult && (
          <div className="result">
            <p className="result-text">Resultado: <span className="result-value">{btuResult} kBTU</span></p>
          </div>
        )}        
      </div>
    </div>
  );
};

export default BtuCalculator;