import {
  Box,
  Grid,
  Typography,
  Avatar,
  Badge,
  Tooltip,
  useTheme,
  LinearProgress,
  styled
} from '@mui/material';
import { formatDistance, subDays, subMinutes, subHours } from 'date-fns';
import Text from 'src/components/Text';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        height: 10px;
        
        &.MuiLinearProgress-root {
          background-color: ${theme.colors.alpha.black[10]};
        }
        
        .MuiLinearProgress-bar {
          border-radius: ${theme.general.borderRadiusXl};
        }
`
);

function TeamOverview() {
  const theme = useTheme();

  return (
    <>
          <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 1
        }}
      >
        <Typography variant="h3">FastX</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h4">Buy FastX token to participate in the decentralized distribution, works on 25 upline and 20 downline token holders.</Typography>

      </Box>
    <Grid container spacing={4}>
      
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            <Text color="black">Each Buy,</Text> share ratio is 70:20:10<Text color="black">25 upline , 20 downline and a referral bonus</Text>{' '}
            
          </Typography>
          <LinearProgressWrapper
            value={65}
            color="primary"
            variant="determinate"
          />
          <Typography variant="subtitle2" gutterBottom>
            <Text color="black">80% withdraw ,</Text>20% auto buy tokens.
            
          </Typography>
        </Box>
      </Grid>
   
    </Grid>
    </>
  );
}

export default TeamOverview;
