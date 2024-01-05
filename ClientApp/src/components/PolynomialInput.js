import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl, Box } from '@mui/material';

const PolynomialTypeDropdown = ({order, setOrder}) => {
  const initalState = order === 1 ? "linear" : (order === 2 ? "quadratic" : "cubic")
  const [polynomialType, setPolynomialType] = useState(initalState);

  const handleChange = (event) => {
    setPolynomialType(event.target.value);
    const newOrder = event.target.value === "linear" ? 1 : (event.target.value === "quadratic" ? 2 : 3)
    setOrder(newOrder)
  };

  return (
    <Box sx={{ paddingTop: '10px'}}>
      <FormControl variant="outlined" size="small" sx={{ width: '100%'}}>
        <InputLabel >Polynomial Type</InputLabel>
        <Select
          value={polynomialType}
          onChange={handleChange}
          label="Polynomial Type"
        >
          <MenuItem value="linear">Linear</MenuItem>
          <MenuItem value="quadratic">Quadratic</MenuItem>
          <MenuItem value="cubic">Cubic</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PolynomialTypeDropdown;

