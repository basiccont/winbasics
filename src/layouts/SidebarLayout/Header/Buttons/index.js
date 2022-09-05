import { Box , Tooltip, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HeaderNotifications from './Notifications';
import { TWITTER , MEDIUM , INSTA } from 'config/configct';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      {/* <HeaderSearch /> */}
      <Tooltip arrow placement="top" title="Medium">
                    <IconButton color="primary" onClick={event =>  window.open(MEDIUM)}>
                      <AutoStoriesIcon />
                    </IconButton>
                  </Tooltip>

      <Tooltip arrow placement="top" title="Twitter" >
                  <IconButton color="primary" onClick={event =>  window.open(TWITTER)}>
                    <TwitterIcon />
                  </IconButton>
                </Tooltip>


      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
