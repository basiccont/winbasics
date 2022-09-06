import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Text from 'src/components/Text';
import { Chart } from 'src/components/Chart';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${
    theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
  };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

function AccountBalance(props) {
  const theme = useTheme();
  const { totalUsers, totalWithdraws, totalPlayAmt, slotNum } = props;


  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
             
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
              <Text color="warning"> 25 MATIC</Text>
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                Each Slot allocates 25 Matic Win Prize.
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 4
                }}
                alignItems="center"
              >
                {/* <AvatarSuccess
                  sx={{
                    mr: 2
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess> */}
                <Box>
                  <Typography variant="h4">No Win Case</Typography>
                  <Typography variant="subtitle2" noWrap>
                    Each 5 Matic send to 2 lucky address in the slot.
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    Each 1 Matic send to 15 lucky address in the slot.
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    No Matic Balance found after slot completion.Try next slot.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
       
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>



          <Box py={4} pr={4} flex={1}>
            <Grid container spacing={0}>

              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >

<Box p={4}>
            {/* <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Win 50 For 1 MATIC
            </Typography> */}
            <Box>
              <Typography variant="h1" gutterBottom>
                <Text color="warning">{slotNum}</Text>
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                <Text color="warning">Ongoing Slot</Text>
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 4
                }}
                alignItems="center"
              >
                 <Box>
                  {slotNum > 0 && (<Typography variant="h4">{slotNum-1}</Typography>)}
                  {slotNum <= 0 && (<Typography variant="h4">NA</Typography>)}
                  <Typography variant="subtitle2" noWrap>
                    completed slot
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
       
            </Grid>
          </Box>

              </Grid>

              <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List
                  disablePadding
                  sx={{
                    width: '100%'
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>

                      <AccountCircleTwoToneIcon />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Total Users"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary=""
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        {totalUsers}
                      </Typography>
                      {/* <Text color="success">25</Text> */}
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>

                      <AccountCircleTwoToneIcon/>
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Total Play Amount"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary=""
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        {totalPlayAmt}
                      </Typography>
                      {/* <Text color="success">20</Text> */}
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      {/* <img
                        alt="ADA"
                        src="/static/images/placeholders/logo/cardano.png"
                      /> */}
                      <AccountCircleTwoToneIcon/>
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Total Paid Amount"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary=" "
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                      {totalWithdraws}
                      </Typography>
                      {/* <Text color="success"></Text> */}
                    </Box>
                  </ListItem>
                  
                </List>
              </Grid>
              
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
