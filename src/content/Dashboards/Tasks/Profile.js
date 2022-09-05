import {
  Typography,
  Tooltip,
  Rating,
  IconButton,
  Divider,
  Box,
  ListItem,
  ListItemText,
  List,
  Link,
  Avatar,
  useTheme
} from '@mui/material';
import { TOKENCT } from 'config/configct';

function Profile() {
  const theme = useTheme();

  return (
    <Box>
      <Avatar
        sx={{
          mx: 'auto',
          mb: 1.5,
          width: theme.spacing(12),
          height: theme.spacing(12)
        }}
        alt="FastX Token"
        src="https://rabbiteggsdefi.github.io/maticguide/images/FASTXcoin.png"
      />
      <Typography align="center" variant="h4" gutterBottom>
        FASTX Token
      </Typography>
      <Typography align="center" variant="subtitle2" gutterBottom>
        Token for the participation in decentralized distribution smart contract
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Rating value={5} defaultValue={5} precision={1} readOnly />

      </Box>

      <Box py={2} display="flex" alignItems="center" justifyContent="center">
        Tokenomics
  
      </Box>
      <List
        sx={{
          px: 2
        }}
      >
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Symbol"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography variant="subtitle2" color="text.primary">
            FASTX
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Standard"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography variant="subtitle2" color="text.primary">
            ERC-20
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Chain"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
          >
            Polygon
          </Typography>
        </ListItem>

        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Token Address"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
          >
            <Link
            href={TOKENCT}
            target="_blank"
            rel="noopener noreferrer"
          > 
            Ox099e89
            </Link>
            </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default Profile;
