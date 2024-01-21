// WidgetGrid.tsx
import React from 'react';
import Grid from '@mui/material/Grid';
import Widget from './Widget';

const WidgetGrid: React.FC = () => {
  return (
    <Grid container spacing={10}>
      {/* Repeat this grid item for each widget */}
      <Grid item >
        <Widget />
      </Grid>
      
    </Grid>
  );
};

export default WidgetGrid;
