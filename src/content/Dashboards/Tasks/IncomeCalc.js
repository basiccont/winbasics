import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Rating,
  OutlinedInput,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import TextField from '@mui/material/TextField';
import Text from 'src/components/Text';

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
    padding-right: ${theme.spacing(0.7)}
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
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


const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

function IncomeCalc() {
  const theme = useTheme();
     

  const amtRef = useRef(null);
  const levelRef = useRef(null);
  const pkgRef = useRef(null);

  // DashBoard
  const [rate, setRate] = useState(5);

  //now
  const [eachshare, setEachshare] = useState(0);
  const [totalshare, setTotalshare] = useState(0);

  const [seventy, setSeventy] = useState(null);
  const [twenty, setTwenty] = useState(null);
  const [ten, setTen] = useState(null);
  

    const callFunc = () => {

    let level =  parseInt(levelRef.current.value); 
    let urvp =  parseInt(pkgRef.current.value); 
    let buyamt =  parseInt(amtRef.current.value);

    // console.log(level + ' - ' + urvp + ' - ' + buyamt);

    if(!(level > 1 && level <= 25)) { return;}
    if(!(urvp >= 10 && urvp <= 5000)) { return;}
    if(!(buyamt >= 10 && buyamt <= 5000)) { return;}

    
    // console.log(level + ' after - ' + urvp + ' - ' + buyamt);
    let valuepack = 10;
    
    let b70 = buyamt * (70/100);
    let b20 = buyamt * (20/100);
    let b10 = buyamt * (10/100);
    setSeventy(b70); setTwenty(b20); setTen(b10);
    
    let totaluplinepack = valuepack * (level-1);
    totaluplinepack = totaluplinepack + urvp;
    
    let eachshare = b70 / totaluplinepack;
    setEachshare(Number.parseFloat(eachshare * urvp).toFixed(8));
    let tot = (eachshare * urvp) + b10;
    setTotalshare(Number.parseFloat(tot).toFixed(8));
    // console.log(b70); console.log(b20); console.log(b10);
    // console.log('Share : ' + eachshare * urvp);
    // console.log('Ref Income : ' + b10 );
    
    
    }

  return ( 
    <>
      <Box
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle2">
            <b>Income Calculator </b> - On every Buy Token made by your recruits / user, 
            70% to 25 upline, 
            20% to 20 downline based on their Token holding value and
            flat 10% to sponsor as bouns.
            <Text color="black">
              <b></b>
            </Text>
          </Typography>
        </Box>
    </Box>

 {/* row -1 */}
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
        <CardAddAction>

            <CardContent>
              <Box display="flex" alignItems="center" pl={0.3} justifyContent="space-between">
                <CardTravelIcon variant="outlined" fontSize="large" color="primary"/>
              </Box>
              <Typography variant="h5" noWrap>
                Token Holding Value 
              </Typography>
              <Typography variant="subtitle1" noWrap>
                Matic
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                {/* <Typography variant="h3" gutterBottom noWrap> */}
                  
                  <TextField
                      required
                      id="outlined-required"
                      label="Token Holding Value"
                      defaultValue="10"
                      inputRef={pkgRef}      
                      type="number"
                    />
                {/* </Typography> */}
                <Box
                  sx={{
                    pt: 2
                  }}
                >
                    <Rating value={rate} defaultValue={5} precision={1} size="small" readOnly />
                </Box>

                <Box
                sx={{
                  pt: 1
                }}
              ></Box>

            <Typography
              sx={{
                pb: 1
              }}
              color="text.secondary"
              size="small" 
            >
              Add Token Holding Value to see the increase on your share.
      
            </Typography>


              </Box>
            </CardContent>
            </CardAddAction>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
            <CardAddAction>

                <CardContent>

                <TextField
                      required
                      id="outlined-required"
                      label="Matic Amount"
                      defaultValue="10"
                      inputRef={amtRef}
                      type="number"
                    />

                <Box
                sx={{
                  pt: 1.5
                }}
              ></Box>

                    <TextField
                      required
                      id="outlined-required"
                      label="Sponsor Address"
                      defaultValue="Consider your address here"
                      disabled
                    />

              <Box
                sx={{
                  pt: 3
                }}
              ></Box>





                <Tooltip arrow title="Mock buy"><span>
                <Button variant="outlined" size="small" color="primary" 
                fullWidth
                onClick={callFunc}
                >Buy Token</Button> </span></Tooltip> 
         
                <Box
                sx={{
                  pt: 1
                }}
              ></Box>
    
                </CardContent>
              {/* </CardActionArea> */}
            </CardAddAction>
          {/* </Tooltip> */}
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          {/* <Tooltip arrow title="Buy Value Pack "> */}
            <CardAddAction>
              {/* <CardActionArea
                sx={{
                  px: 1
                }}
              > */}
                <CardContent>

                <Box  
                sx={{
                  pt: 1
                  
                }}
              > 
              <Typography variant="h5" noWrap>
                Income Result
              </Typography>

              </Box>

              <Box
                sx={{
                  pt: 2
                }}
              >
                </Box>

              {/* <Typography variant="h5" noWrap>
                Level (upline users)
              </Typography> */}
              <Box
                sx={{
                  pt: 1
                }}
              >
                </Box>
              <TextField
                      required
                      id="outlined-required"
                      label="Level"
                      defaultValue="2"
                      inputRef={levelRef}
                      type="number"
                    />

                <Box
                sx={{
                  pt: 2
                }}
              >
                </Box>


              <Typography variant="h5" noWrap>
                70% : {seventy}
              </Typography>
              <Typography variant="h5" noWrap>
                20% : {twenty} for downline
              </Typography>
              <Typography variant="h5" noWrap>
                10% : {ten} 
              </Typography>

              <Box  
                sx={{
                  pt: 1
                  
                }}
              > 
                      
              </Box>

              <Typography variant="h5" noWrap>
                Your Share
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {eachshare}
              </Typography>

          
              <Typography variant="h5" noWrap>
                Referral Bonus
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {ten}
              </Typography>

              <Box  
                sx={{
                  pt: 1
                  
                }}
              > 
                      
              </Box>
              <Divider/>
  
              <Box  
                sx={{
                  pt: 1
                  
                }}
              > 
                      
              </Box>
              <Typography variant="h5" noWrap>
                Total Share
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {totalshare}
              </Typography>

       

                
                </CardContent>
              {/* </CardActionArea> */}
            </CardAddAction>
          {/* </Tooltip> */}
        </Grid>


        <Box
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      ></Box>

              <Divider/>


    </Grid>

    </>
  );
}

export default IncomeCalc;
