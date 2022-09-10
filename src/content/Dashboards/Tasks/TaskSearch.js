import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Grid,
  Box,
  Link,
  IconButton,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Rating,
  OutlinedInput,
  Chip,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CircularProgress from '@mui/material/CircularProgress';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import Text from 'src/components/Text';
import Web3 from "web3";
import SimpleStorageContract from "config/BasicContractFXMflat.json";
import { CONTADDRESS,TXNURL,TOKENADDRESS,DSTATECT } from 'config/configct';

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

function TaskSearch(props) {
  const theme = useTheme();
  const { isConnected, accounts, web3, errormsgw , onConnect, onDisconnect } = props;
  const ContractAddress = CONTADDRESS;
   

  const amtRef = useRef(null);
  const amtRefw = useRef(null);
  const [errormsgg, setErrormsgg] = useState(null);
  const [errormsggw, setErrormsggw] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingw, setLoadingw] = useState(false);
  const [loadingr, setLoadingr] = useState(false);
  const [loadingd, setLoadingd] = useState(false);
  
  
  const [trnrecepitb, setTrnrecepitb] = useState(null);
  const [trnrecepitw, setTrnrecepitw] = useState(null);
  const [trnrecepitbw, setTrnrecepitbw] = useState(null);
  // DashBoard
  const [balance, setBalance] = useState(null); // wei to ether
  

  const [tokenamt, setTokenamt] = useState(1);
  const [tokenamtw, setTokenamtw] = useState(1);
  
  // 25 Matic
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalWithdraws, setTotalWithdraws] = useState(null);
  const [totalPlayAmt, setTotalPlayAmt] = useState(null);
  const [slotNum, setSlotNum] = useState(0);
  const [blockNum, setBlockNum] = useState(null);
  
  const openScan = async (val) => {
    window.open(TXNURL + val, '_blank').focus();
   }

  const onConnectChild = async () => { 
    try {
    setLoadingw(true); 
    await props.onConnect(); 
    setLoadingw(false);
    }
    catch(err){
      setLoadingw(false);
    }
  };

  const sendValue = async () => {
    try {
    setLoading(true);
    let errflag =0;
    let amt = parseInt(amtRef.current.value); 
 
    if (!(amt >= 1 && amt <= 4)) {
      errflag =1;
      setErrormsgg("Each Bet,Min: 1 & Max: 4 ");
    }
    
    if (errflag > 0) { setLoading(false); return; }
 
    await callBuy(amt);

    setLoading(false);

  } catch (error) {
    setLoading(false);

  }
}


const callBuy = async (buyprice) => {
  try {

    if(accounts) {

    let totalamt = buyprice.toString();


    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {


    await instance.methods.Bet().send({ from: accounts , value: Web3.utils.toWei(totalamt, 'ether')}, 
    function(error, transactionHash){
      if (error) {
      } else {
        setTrnrecepitb(transactionHash);
      }
  });

  await instance.methods.getUserBlock().call(
    function (err, res) {
      if (err) {
        // setLoadingr(false);
      } else {
        setBlockNum(res);
      }
    }
  );


}
} else
{
  
}
  } catch (error) {
    setErrormsgg("Please try again later!");
  }
}; 

// buy 

// 1.GetUserDetails

const getUserDetails = async () => {
  try {
    if(accounts) {
      setLoadingr(true);

    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

        // slot & balance 

        await instance.methods.getSlot().call(
          function (err, res) {
            if (err) {
              setLoadingr(false);
            } else {
                setSlotNum(res[0]);
            }
          }
        );

        await instance.methods.getBal(accounts).call(
          function (err, res) {
            if (err) {
              setLoadingr(false);
            }
            // booked = res;
            // console.log("The getBal is: ",Web3.utils.fromWei(res,'ether'))
            setBalance(Web3.utils.fromWei(res,'ether'));
          }
        );

        // slot & balance 

  }
 
      } else
      {   }

     setLoadingr(false);
  } catch (error) {
    // console.log(error);
    setLoadingr(false);
  }
}; 


// Bet Again

const sendValueAg = async () => {
  try {
  setLoadingd(true);
  setLoading(true);
  let errflag =0;
  let amt = parseInt(amtRefw.current.value); 

  if (!(balance >= amt )) { errflag =1; setErrormsggw("Low Available Balance! ");  }
  else if (!(amt >= 1 && amt <= 4)) {
    errflag =1;
    setErrormsggw("Each Bet,Min: 1 & Max: 4 ");
  }

  
  if (errflag > 0) { setLoadingd(false); setLoading(false); return; }

   
  await callBetagain(amt);

  setLoadingd(false);
  setLoading(false);

} catch (error) {
  setLoadingd(false);
  setLoading(false);

}
}

const callBetagain = async (buyprice) => {
  try {

    if(accounts) {

    let totalamt = buyprice.toString();
    console.log(totalamt);

    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

    console.log(accounts);
    await instance.methods.BetAgain(Web3.utils.toWei(totalamt, 'ether')).send({ from: accounts  }, 
    function(error, transactionHash){
      if (error) {
      } else {
        setTrnrecepitbw(transactionHash);
      }
  });

  await instance.methods.getUserBlock().call(
    function (err, res) {
      if (err) {
      } else {
        setBlockNum(res);
      }
    }
  );


}
} else
{
  
}
  } catch (error) {
    setErrormsggw("Please try again later! ");
  }
}; 



// 5.callwithdraw

const callwithdraw = async () => {
  try {
    if(accounts) {

      let errflag =0;
      let amt = amtRefw.current.value; 
      if (!(balance >= amt)) { setErrormsggw("Low Available Balance! "); return; }
      let totalamt = amt.toString();

      setLoadingd(true);

    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

        await instance.methods.Withdraw(Web3.utils.toWei(totalamt, 'ether')).send({ from: accounts }, 
          function(error, transactionHash){
            if (error) {
              setLoadingd(false);
            } else {
              // setLoadingd(false);
              setTrnrecepitw(transactionHash);
              setTokenamtw(1);
            }
        });      }

      }
      setLoadingd(false);
  } catch (error) {
    setLoadingd(false);

  }
}; 

// buy

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
              CashBack Betting Game -
            <Text color="black">
              Enjoy the benefits of betting without losing MATIC Coin.
            </Text>
          </Typography>
        </Box>

        <Box mt={{ xs: 2, md: 0 }}>
      
        {isConnected && (<Button variant="outlined" color="warning" onClick={getUserDetails} disabled={loadingr}>Refresh Board</Button>)} {' '}

      {errormsgw && (<Button variant="outlined" color="error" startIcon={<ErrorOutlineIcon fontSize="small" />} >{errormsgw}</Button>)} {' '}
      
      {loadingw && ( 
                <CircularProgress color="primary" size={25} />
              )}

        {!isConnected && (
        <Button variant="contained" startIcon={<AccountBalanceWalletOutlinedIcon />}
          onClick={onConnectChild}
          color="success"
          disabled={loadingw}
          >
          Connect Wallet
        </Button> )}

        {isConnected && (
        <Button variant="outlined" 
          onClick={onDisconnect}
          >
          {accounts.substr(0, 5)}...{accounts.substr(accounts.length - 4, accounts.length - 1)}
        </Button> )}

      </Box>
      </Box>

      <Box
        py={1}
        display="flex"
        alignItems="center"
      >
        Bet with Block.If Exact Match, WIN 50 Matic.Else get cashback for most { ' '}
        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="nearest"
                          color="success"
                          /> 
<Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="nearer"
                          color="success"
                          /> 
                             <Chip
                          sx={{
                            mr: 0.1
                          }}
                          variant="outlined"
                          size="small"
                          label="far away"
                          color="success"
                          />  block
      </Box>


      <Grid container spacing={4}>
        <Grid item xs={12} >
          

          <Card>
            <Grid spacing={0} container>
              <Grid item xs={12} md={6}>
                <Box p={4}>
       
                  <Box>
                  <EmojiEventsIcon variant="outlined" fontSize="large" color="success"/>

                    <Typography variant="h1" gutterBottom>
                      <Text color="success"> 50 MATIC</Text>
                    </Typography>
                    {blockNum == null && (
                    <Typography
                      variant="h4"
                      fontWeight="normal"
                      color="text.secondary"
                    >
                      {tokenamt} Chance To Win 
                    </Typography> )}
                    
                     {isConnected && loading && ( <>
                        <Typography
                        variant="h4"
                        fontWeight="normal"
                        color="success"
                      >
                        Ready to find the match ...
                      </Typography>
                      <Box
                      sx={{
                        pt: 1
                      }}
                    ></Box>
                     <LinearProgress color="success" /> </>)}

                     {blockNum && (<>
                       <Typography
                       variant="h6"
                       fontWeight="normal"
                     >
                       <Text color='warning'>Block {blockNum} not matched! </Text>
                     </Typography>
                      <Typography
                      variant="h4"
                      fontWeight="normal"
                    >
                      <Text color='success'>Please wait for slot end cashback and prize</Text> { ' '}
                      <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="Hide"
                          color="success"
                          onClick={(e) => { setBlockNum(null);  } }
                        /> 
                      </Typography>
                      </>
                     )}


                    <Box
                      sx={{
                        pt: 3
                      }}
                    >
                    <TextField
                      required
                      id="outlined-required"
                      label="Matic Amount"
                      value={tokenamt}
                      inputRef={amtRef}
                      type="number"
                      onChange={(e) => { if(e.target.value >=1 && e.target.value <= 4) { setTokenamt(e.target.value) } }}
                    />
                      <Box
                        sx={{
                          pt: 1
                        }}
                      ></Box>

            {isConnected && (
                <Tooltip arrow title=""><span>
                <Button variant="outlined" size="small" color="success" onClick={sendValue} 
                disabled={loading}
                >Bet</Button> </span></Tooltip> 
              )}


              {!isConnected && (
                <Tooltip arrow title="Please Connect Wallet"><span>
                <Button variant="outlined" size="small" color="warning" onClick={sendValue} disabled>Bet</Button> 
                </span></Tooltip>              )}
                
                <Box
                sx={{
                  pt: 1
                }}
              ></Box>
                
                {errormsgg && (<>

                  <Typography
                        variant="h6"
                        fontWeight="normal"
                      >
                        <Text color="warning" >{errormsgg}</Text>
                        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="Hide"
                          color="warning"
                          onClick={(e) => { setErrormsgg(null);  } }
                        />
                      </Typography>
   
                </>)}

                {trnrecepitb && (<>
                
                  <Typography
                        variant="h6"
                        fontWeight="normal"
                      >
                        <Text color="success" >Bet Receipt</Text> {' '}

                        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="View"
                          color="success"
                          onClick={(e) => { openScan(trnrecepitb);  } }/>
                          {' '}

                        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="Hide"
                          color="success"
                          onClick={(e) => { setTrnrecepitb(null);  } }/>


                      </Typography>

                </>
                )}



                    </Box>

                    <Box
                      display="flex"
                      sx={{
                        py: 2
                      }}
                      alignItems="center"
                    >
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

                        <Box>
                          <Typography variant="h1" gutterBottom>
                            <Text color="success">{slotNum}</Text>
                          </Typography>
                          <Typography
                            variant="h4"
                            fontWeight="normal"
                            color="text.secondary"
                          >
                            <Text color="success">Ongoing Slot</Text>
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
                              {slotNum <= 0 && (<Typography variant="h4">0</Typography>)}
                              <Typography variant="subtitle2" noWrap>
                                completed slot
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Grid container spacing={3}>
                        {loadingr && ( 
                            <CircularProgress color="success" size={25} />
                          )}
                        </Grid>
                      </Box>

                    </Grid>




                    <Grid xs={12} sm={7} item display="flex" alignItems="center">

                      <Box
                        sx={{
                          pt: 3
                        }}
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Matic Amount"
                          value={tokenamtw}
                          inputRef={amtRefw}
                          type="number"
                          onChange={(e) => {  setTokenamtw(e.target.value)  }}
                        />
                        <Box
                          sx={{
                            pt: 2
                          }}
                        ></Box>

            {isConnected && (
                <Tooltip arrow title=""><span>
                <Button variant="outlined" size="small" color="success" onClick={callwithdraw} 
                disabled={loadingd}
                >Withdraw</Button> </span></Tooltip> 
              )}


              {!isConnected && (
                <Tooltip arrow title="Please Connect Wallet"><span>
                <Button variant="outlined" size="small" color="warning"  disabled>Withdraw</Button> 
                </span></Tooltip>              )}

                {isConnected && (
                <Tooltip arrow title=""><span>
                <Button variant="outlined" size="small" color="success" onClick={sendValueAg} 
                disabled={loadingd}
                >Bet Again</Button> </span></Tooltip> 
              )}


              {!isConnected && (
                <Tooltip arrow title="Please Connect Wallet"><span>
                <Button variant="outlined" size="small" color="warning"  disabled>Bet Again</Button> 
                </span></Tooltip>              )}


                <Box
                sx={{
                  pt: 1
                }}
              ></Box>
                
                {errormsggw && (<>

                    <Typography
                          variant="h6"
                          fontWeight="normal"
                        >
                          <Text color="warning" >{errormsggw}</Text>
                          <Chip
                            sx={{
                              mr: 0.5
                            }}
                            variant="outlined"
                            size="small"
                            label="Hide"
                            color="warning"
                            onClick={(e) => { setErrormsggw(null);  } }
                          />
                        </Typography>

                    </>)}


              {trnrecepitw && (<>
                
                <Typography
                      variant="h6"
                      fontWeight="normal"
                    >
                      <Text color="success" >Withdraw Receipt</Text> {' '}

                      <Chip
                        sx={{
                          mr: 0.5
                        }}
                        variant="outlined"
                        size="small"
                        label="View"
                        color="success"
                        onClick={(e) => { openScan(trnrecepitw);  } }/>
                        {' '}

                      <Chip
                        sx={{
                          mr: 0.5
                        }}
                        variant="outlined"
                        size="small"
                        label="Hide"
                        color="success"
                        onClick={(e) => { setTrnrecepitw(null);  } }/>


                    </Typography>

              </>
              )}

             {trnrecepitbw && (<>
                
                <Typography
                      variant="h6"
                      fontWeight="normal"
                    >
                      <Text color="success" >Bet Receipt</Text> {' '}

                      <Chip
                        sx={{
                          mr: 0.5
                        }}
                        variant="outlined"
                        size="small"
                        label="View"
                        color="success"
                        onClick={(e) => { openScan(trnrecepitbw);  } }/>
                        {' '}

                      <Chip
                        sx={{
                          mr: 0.5
                        }}
                        variant="outlined"
                        size="small"
                        label="Hide"
                        color="success"
                        onClick={(e) => { setTrnrecepitbw(null);  } }/>


                    </Typography>

              </>
              )}


                        <Box
                          sx={{
                            pt: 2
                          }}
                        ></Box>

                        <Typography variant="h5" >
                          Available balance: {balance} Matic
                        </Typography>


                      </Box>



                    </Grid>


                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Card>


        </Grid>

      </Grid>
      <Box
                          sx={{
                            pt: 2
                          }}
                        ></Box>

      <Box
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >

                <Box>
                        <Typography variant="h4">Cash Back and Prize</Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="nearest"
                          color="success"
                          /> 
                          : For Each 1 Matic,get 70% <EmojiEventsIcon variant="outlined" fontSize="small" color="success"/> + 1 Matic (1.70)
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="nearer"
                          color="success"
                          /> 
                          : For Each 1 Matic,get 20% <EmojiEventsIcon variant="outlined" fontSize="small" color="success"/> + 1 Matic (1.20)
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                        <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="far away"
                          color="success"
                          /> 
                          : For Each 1 Matic,get 52% of 1 Matic (0.52)
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                        <Text color="success"> All users get matic in the slot.Max 1.73 and Min 0.52 for each matic</Text>
                        </Typography>
                      </Box>


                      <Box>
                        <Typography variant="h4">How it works Smart Contract {' '}
                        <Link href={DSTATECT} variant="h6" color="primary"
                        target="_blank"
                        rel="noopener noreferrer">
                             Link
                        </Link>
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                         Bet with Block smart contract tries match with random block number to WIN.
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>

                        <Typography variant="subtitle2" noWrap>
                         For CashBack , smart contract creates slot of minimum 20 - 25 users and rank.
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                         Rank based on the most nearest, nearer and far away block number at slot end.
                        </Typography>
                        <Box
                          sx={{
                            pt: 1
                          }}
                        ></Box>
                        <Typography variant="subtitle2" noWrap>
                         Select most 
                         <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="nearest"
                          color="success"
                          /> 
                         : 4 - 6 users,
                         <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="nearer"
                          color="success"
                          /> 
                         : 7 - 10 users and 
                         <Chip
                          sx={{
                            mr: 0.5
                          }}
                          variant="outlined"
                          size="small"
                          label="far away"
                          color="success"
                          /> 
                         : rest.
                        </Typography>
                       
                      </Box>

                </Box>

           
{/* <Box
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      ></Box> */}

    </>
  );
}

export default TaskSearch;
