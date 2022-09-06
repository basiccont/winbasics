import {
  Typography,
  Button,
  Box,
  alpha,
  lighten,
  Avatar,
  styled
} from '@mui/material';
import { useState } from 'react';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[10]
          : theme.colors.alpha.white[50]
      };
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? '0 1px 0 ' +
            alpha(lighten(theme.colors.primary.main, 0.8), 0.2) +
            ', 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)'
          : '0px 2px 4px -3px ' +
            alpha(theme.colors.alpha.black[100], 0.4) +
            ', 0px 5px 16px -4px ' +
            alpha(theme.colors.alpha.black[100], 0.2)
      };
`
);

function PageHeader(props) {

  const { isConnected, accounts } = props;

  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        {/* <AvatarPageTitle variant="rounded">
          <AllInclusiveIcon fontSize="large" />
        </AvatarPageTitle> */}
        <Box>
        {isConnected && (
          <Typography variant="h3" component="h3" gutterBottom>
            Welcome {accounts.substr(0, 5)}...{accounts.substr(accounts.length - 4, accounts.length - 1)}
          </Typography> )}
          
          {!isConnected && (
          <Typography variant="h3" component="h3" gutterBottom>
            Welcome 
          </Typography> )}
          

          <Typography variant="subtitle2">
            {/* Manage your crypto and grow it with the FastX decentralized distribution smart contract on the polygon blockchain. */}
          </Typography>
        </Box>
      </Box>

    </Box>
  );
}

export default PageHeader;
