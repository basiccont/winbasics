import { Typography, Grid } from '@mui/material';



function PageHeader() {

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Partner with us
        </Typography>
        <Typography variant="subtitle2">
          FastX decentralized distribution smart contract.
        </Typography>
      </Grid>
      <Grid item>
       </Grid>
    </Grid>
  );
}

export default PageHeader;
