import React from 'react';
import { Button, TextField, Box } from '@mui/material';

const ScrollablePointList = ({points, setPoints}) => {
  console.log(points)
  const addPoint = () => {
    // Add a new point with default values
    setPoints([...points, { x: 0, y: 0 }]);
  };

  const deletePoint = (index) => {
    // Remove the point at the specified index
    const updatedPoints = [...points];
    updatedPoints.splice(index, 1);
    setPoints(updatedPoints);
  };

  const updatePoint = (index, key, value) => {
    const updatedPoints = [...points];
    if (isNaN(value)){
        value = 0
    }
    updatedPoints[index][key] = value;
    setPoints(updatedPoints);
  };

  return (
    <Box
      sx={{
        height: '400px',
        overflowY: 'auto',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '10px',
        border: '1px solid #ccc',
      }}
    >
      {points.map((point, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '5px',
          }}
        >
          <span>X:</span>
          <TextField
            type="number"
            value={point.x}
            onChange={(e) => updatePoint(index, 'x', parseFloat(e.target.value))}
          />
          <span>Y:</span>
          <TextField
            type="number"
            value={point.y}
            onChange={(e) => updatePoint(index, 'y', parseFloat(e.target.value))}
          />
          <Button
            onClick={() => deletePoint(index)}
            variant="outlined"
            sx={{ color: 'red', borderColor: 'red' }}
          >
            Delete
          </Button>
        </Box>
      ))}
      <Button variant="contained" onClick={addPoint} sx={{ margin: '10px auto', display: 'block' }}>
        Add Point
      </Button>
    </Box>
  );
};

export default ScrollablePointList;
