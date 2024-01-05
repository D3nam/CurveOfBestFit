import React, { useRef, useEffect, useState } from 'react';
import Desmos from 'desmos';

const DesmosGraph = ({ equation, data }) => {
  const graphRef = useRef();
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const desmos = Desmos.GraphingCalculator(graphRef.current);

    // Update Desmos graph with the provided equation
    desmos.setExpression({ id: 'equation', latex: equation });

    // Scatter points on the Desmos graph
    if (data && data.length > 0) {
      data.forEach(point => {
        desmos.setExpression({ id: point.id, latex: `(${point.x},${point.y})` });
      });
    }
    setLoaded(true)

    return () => {
        desmos.destroy();
      };
  }, [equation, data, loaded]);

  if (!loaded){
    return <h1>Loadings.....</h1>
  }

  return (
    <div ref={graphRef} style={{ width: '100%', height: '700px' }}></div>
    );


};

export default DesmosGraph;

