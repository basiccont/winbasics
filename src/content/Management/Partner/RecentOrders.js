import { 
  Card,
  Typography,
  Box,
  Link
} from '@mui/material';
import Text from 'src/components/Text';
import { TWITTER } from 'config/configct';

function RecentOrders() {


  return (
    <Card>
      <Box py={2} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
           FastX 
        </Typography>
        <Typography variant="subtitle2">
         Helps you to accomplish the dream of owning your <Text color="primary">own 
         decentralized distribution smart contract works on 25 upline - 20 downline token holders </Text> on the polygon blockchain.
         We offer you an opportunity to take control of your career, finances, schedule and 
         future through our proven, successful and profitable <Text color="primary">[70 : 30] </Text> franchise model. 
         Joining hands with us will give you complete ownership and rewards of being a 
         successful entrepreneur. 
        </Typography>
       
        <Box
                sx={{
                  pt: 2
                }}
              > </Box>

        <Typography gutterBottom variant="h4">
        Why FastX? 
        </Typography>
        <Typography variant="subtitle2">
        Being the fastest growing decentralized distribution smart contract with 
        unmatched share ratio in the polygon blockchain.
        </Typography>
  
        <Box
                sx={{
                  pt: 2
                }}
              > </Box>
        <Typography gutterBottom variant="h4">
        Key Features 
        </Typography>
        <Typography variant="subtitle2">
        Smart Contract deployment using your metamask address.So it's completely owned by you. 
        </Typography>
        <Typography variant="subtitle2">
        White label User Dashboard, rebrand with your own branding and logo.
        </Typography>
        <Typography variant="subtitle2">
        <Text color="primary">No charges at any point except 30% of your generated income.</Text>
        </Typography>
  
        <Box
                sx={{
                  pt: 2
                }}
              > </Box>
        
        <Typography gutterBottom variant="h4">
        What you receive? 
        </Typography>
        <Typography variant="subtitle2">
        White label User Dashboard web application.
        </Typography>
        <Typography variant="subtitle2">
        FastX Distribution Smart Contract.
        </Typography>
        <Typography variant="subtitle2">
        Own ERC 20 token to serve your users.
        </Typography>
        <Typography variant="subtitle2">
        Support for white label dashboard and smart contract deployment.
        </Typography>

        <Box
                sx={{
                  pt: 2
                }}
              > </Box>
        

        <Typography gutterBottom variant="h4">
          How much you spend to make it operational?
        </Typography>
        <Typography variant="subtitle2">
        For Smart contract deployment on polygon,Approx cost 0.20 MATIC Coin from your metamask.
        </Typography>
        <Typography variant="subtitle2">
        For Dashboard application deploy on Cloudflare Pages preferred.Initially go with free plan and later you can upgrade.
        </Typography>
        <Typography variant="subtitle2">
        For Your Website Domain Name, Cloudflare domains (.com,.org,.net) are preferred.Approx cost 8 - 10 USD per year.
        </Typography>

        <Box
                sx={{
                  pt: 2
                }}
              > </Box>
        
                <Link
            href={TWITTER}
            target="_blank"
            rel="noopener noreferrer"
          >
           <Typography gutterBottom variant="h4"> DM on Twitter </Typography>
          </Link>

        <Box
                sx={{
                  pt: 2
                }}
              > </Box>

                  {/* <Divider/> */}
                  <Typography variant="subtitle2">
            Note : White label dashboard covers your brand name and logo placement without any feature modification,ERC 20 token creation.
            No logo making and coin stickers provided by us.
        </Typography>  
            
        </Box>
    </Card>
  );
}

export default RecentOrders;
