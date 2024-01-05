import React, { useState } from 'react';
import DesmosGraphWrapper from './components/DesmosWrapper';
import ScrollablePointList from './components/ScrollablePointList';
import PolynomialInput from './components/PolynomialInput';
import { Box, Typography } from '@mui/material';
import ErrorCard from './components/ErrorCard';

const App = () => {
  const [data, setData] = useState([
    { x: 1, y: 3 },
    { x: 2, y: 5 },
    { x: 3, y: 8 },
    { x: 4, y: 12 },
  ]);

  const [polynomialOrder, setPolynomialOrder] = useState(2);

  const polynomialType = polynomialOrder === 1 ? "Linear" : (polynomialOrder === 2 ? "Quadratic" : "Cubic")

  const errorString = polynomialType + " polynomial needs atleast " + data.length.toString() + " points."
  return (
    <Box sx={{ margin: '20px' }}>
      <Box sx={{ margin: '20px' }}>
        <Typography variant="h5" sx={{ margin: '10px' }}>
            Select Polynomial Type
          </Typography>
        <PolynomialInput order={polynomialOrder} setOrder={setPolynomialOrder} sx={{ margin: '20px', padding : '20px' }} />
      </Box>
      <Box sx={{ margin: '20px' }}>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
            Add Points for the Curve of Best Fit
          </Typography>
        <ScrollablePointList points={data} setPoints={setData} sx={{ margin: '20px' }} />
      </Box>
      <Box sx={{ margin: '20px' }}>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
              Curve of Best Fit is shown along with equation
        </Typography>
        {data.length > polynomialOrder ? <DesmosGraphWrapper data={data} order={polynomialOrder} />: <ErrorCard errorMessage={errorString}/>}
      </Box>
    </Box>
  );
};

export default App;



