import { Typography, Grid } from '@mui/material';



function PageHeader() {

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          FastX Matic Dapp
        </Typography>
        <Typography variant="subtitle2">
          FastX Matic Coin distribution smart contract works on 25 upline, 20 downline income and sponsor bonus.
        </Typography>
      </Grid>
      <Grid item>
       </Grid>
    </Grid>
  );
}

export default PageHeader;
