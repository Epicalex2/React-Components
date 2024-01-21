// This is where the widget will be imported into a grid. You may simply use just the widget on its own, but this allows for some simple padding and alignment for your page
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
