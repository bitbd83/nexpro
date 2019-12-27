import React from 'react';
import { Grid } from '@material-ui/core';

function Trading() {
  return (
    <Grid 
          container
          direction = "row"
          justify = "center"
          alignItems = "center" 
          >
 
      <Grid>
        <div style={{ marginTop: '20px',marginBottom: '20px',color: '#fff',alignContent:"center" }}>
        <h1 style={{color: 'rgb(0, 117, 249)'}}>With the greatest return on investment</h1>
        <h3>
          DSR can bring you the most profits out of all your investments.
        </h3>
        </div>
      </Grid>

    </Grid>
  );
}

export default Trading;
