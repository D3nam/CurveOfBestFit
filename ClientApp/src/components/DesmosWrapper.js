import React from 'react';
import DesmosGraph from './Desmos';
import regression from 'regression';
import { useState, useEffect } from 'react';

const DesmosGraphWrapper = ({ data, order }) => {
  // Extract x and y values for regression
  const [equation, setEquation] = useState('');
  const [scatterPoints, setScatterPoints] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Extract x and y values for regression
    const regressionData = data.map(point => [point.x, point.y]);

    // Perform polynomial regression
    const result = regression.polynomial(regressionData, { order, precision: 6 });

    // Format the regression equation for Desmos
    const formattedEquation = result.string;

    // Generate scatter points for Desmos graph
    const newScatterPoints = data.map(point => ({ id: `point-${point.x}`, x: point.x, y: point.y }));

    // Update state with the new equation and scatter points
    setEquation(formattedEquation);
    setScatterPoints(newScatterPoints);
    setLoaded(true)
  }, [data, order]);

  if (!loaded){
    return <h1>Loadings.....</h1>
  }
  return <DesmosGraph key={"desKey"} equation={equation} data={scatterPoints} />;
};

export default DesmosGraphWrapper;
