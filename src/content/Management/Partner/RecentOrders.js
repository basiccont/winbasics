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
        MATIC Coin distribution smart contract works on 25 upline and 20 downline income. 
        </Typography>
        <Typography variant="subtitle2">
        <Text color="primary">70% to 25 upline
         </Text> 
        </Typography>

        <Typography variant="subtitle2">
        <Text color="primary">20% to 20 downline
         </Text> 
        </Typography>

        <Typography variant="subtitle2">
        <Text color="primary">10% to Sponsor Bonus ALWAYS
         </Text> 
        </Typography>

        <Typography>
         on the polygon blockchain.Free Flow Plans - Min 10 Matic , Max 500 Matic on each buy.
         <Link
            href="https://fastxmatic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           <Typography gutterBottom variant="h4"> FastX Matic Dapp Link</Typography>
          </Link>

         
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
        Partner with us - Key Features 
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
