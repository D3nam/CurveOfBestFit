import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ErrorCard = ({ errorMessage }) => {
  return (
    <div>
      <Card sx={{ marginTop: '10px' }}>
        <CardContent>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'red' }}>
            {errorMessage}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorCard;

