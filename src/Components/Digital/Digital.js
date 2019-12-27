import React from 'react';
import { Grid } from '@material-ui/core';

function Digital() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
    <div style={{ marginTop: '20px',color: '#fff',alignContent:"center" }}>
    <h1 style={{color: 'rgb(0, 117, 249)'}}> A Premier Global Digital Asset Trading Platform </h1>

        <h3>
          We are dedicated to giving traders and hodlers a safe place to trade <br/>
          and store cryptocurrencies like BTC, ETH.
        </h3>
</div>
    </Grid>
  );
}

export default Digital;
