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
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PaidIcon from '@mui/icons-material/Paid';
import GroupIcon from '@mui/icons-material/Group';
import CircularProgress from '@mui/material/CircularProgress';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import Text from 'src/components/Text';
import Web3 from "web3";
import AccountBalance from 'src/content/Nextboard/Tasks/AccountBalance';
import SimpleStorageContract from "config/BasicContractFXMflat.json";
import { CONTADDRESS,TXNURL,TOKENADDRESS,REFURL,FXSPONSOR,DSTATECT } from 'config/configct';

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
  const { isConnected, accounts, web3, errormsgw , onConnect, onDisconnect, refid } = props;
  const ContractAddress = CONTADDRESS;
   
  const AddressChk = (address) => {
     return Web3.utils.isAddress(address);
    }

  const amtRef = useRef(null);
  const amtRefw = useRef(null);
  const addressRef = useRef(null);
  const [errormsgg, setErrormsgg] = useState(null);
  const [errormsgsp, setErrormsgsp] = useState(null);
  const [errormsgfi, setErrormsgfi] = useState(null);
  const [warnmsgg, setWarnmsgg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingw, setLoadingw] = useState(false);
  const [loadingr, setLoadingr] = useState(false);
  const [loadingd, setLoadingd] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [loadingsch, setLoadingsch] = useState(true);
  const [loadingfind, setLoadingfind] = useState(false);
  
  
  const [trnrecepitb, setTrnrecepitb] = useState(null);
  const [trnrecepitw, setTrnrecepitw] = useState(null);
  // DashBoard
  const [newUser, setNewUser] = useState(false);
  const [pkgvalue, setPkgvalue] = useState(0);
  const [withdrawnbal, setWithdrawnbal] = useState(null); // wei to ether
  const [subordinates, setSubordinates] = useState(0);
  const [levelnumber, setLevelnumber] = useState(0);
  const [balance, setBalance] = useState(null); // wei to ether
  // const [xbalance, setXbalance] = useState(null); // wei to ether
  const [refbouns, setRefbouns] = useState(null); // wei to ether
  const [parent, setParent] = useState(' ');
  
  const [sponaddress, setSponaddress] = useState(' ');
  const [rate, setRate] = useState(4);
  const [copyTokens, setCopyTokens] = useState('Copy Token');
  const [copyRef, setCopyRef] = useState('Copy Ref Link');
  const [copyShRef, setCopyShRef] = useState('Copy and Share Ref Link');
  const [tokenamt, setTokenamt] = useState(1);
  const [tokenamtw, setTokenamtw] = useState(1);
  
  // 25 Matic
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalWithdraws, setTotalWithdraws] = useState(null);
  const [totalPlayAmt, setTotalPlayAmt] = useState(null);
  const [slotUsrCount, setSlotUsrCount] = useState(0);
  const [slotNum, setSlotNum] = useState(0);

  // const [cartItems, setCartItems] = useState([]);

  const [subordinatesp, setSubordinatesp] = useState(0);
  const [levelnumberp, setLevelnumberp] = useState(0);
  const breadcrumbs = [
    <Typography key="1" color="primary">
     <b> Connect Wallet</b>
    </Typography>,
    <Typography key="2" color="primary">
    <b> Refresh Board</b>
  </Typography>,
    <Typography key="3" color="primary">
    <b> Enter Sponsor</b>
  </Typography>,
      <Typography key="4" color="primary">
      <b> Check Sponsor Health</b>
    </Typography>,
        <Typography key="5" color="primary">
        <b> Buy Token</b>
      </Typography>,
          <Typography key="6" color="primary">
           <b> Refresh Board</b>
        </Typography>,
  ];

  const copyRefLink = async () => {
    if(isConnected) {
    navigator.clipboard.writeText(REFURL.concat(accounts));
    setCopyRef('Copied!');
    setCopyShRef('Copied!');
    }
   }


  const copyToken = async () => {
    navigator.clipboard.writeText(TOKENADDRESS);
    setCopyTokens('Copied!');
   }

  const openScan = async (val) => {
    window.open(TXNURL + val, '_blank').focus();
   }

  const onConnectChild = async () => { 
    try {
    setLoadingw(true); 
    await props.onConnect(); 
    setLoadingw(false);
    if (refid != undefined && refid.length > 0) {   setSponaddress(refid); }
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
      setErrormsgg("Each Bet,Min Amount: 1 & Max Amount: 4");
    }
    
    if (errflag > 0) { setLoading(false); return; }
 
    
    
    await callBuy(amt);

    setLoading(false);

  } catch (error) {
    setLoading(false);

  }
}

// buy 
// web 3 calls 
// 1.GetUserDetails
// 2.GetSponsorDetails
// 3.GetChildDetails
// 4.callBuy
// 5.callwithdraw

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


        let bou =0;
        await instance.methods.getBought().call(
          function (err, res) {
            if (err) {
              console.log("An error occured", err)
              return
            }
            bou = res;
            console.log("The getBought is: ",res)

          }
        );

         // Booked 
      let booked =0;
      await instance.methods.getBoo().call(
        function (err, res) {
          if (err) {
            console.log("An error occured", err)
            return
          }
          booked = res;
          console.log("The getBooked is: ",res)

        }
      );
        

                // getTotals

        // await instance.methods.getUpperDeck().call(
        //   function (err, res) {
        //     if (err) {
        //       setLoadingr(false);
        //     } else {
        //       setTotalUsers(res[0]);
        //       setTotalWithdraws(Web3.utils.fromWei(res[1],'ether'));
        //       setTotalPlayAmt(Web3.utils.fromWei(res[2],'ether'));
        //       setSlotUsrCount(res[3]);
        //       setSlotNum(res[4]);
        //     }
        //   }
        // );

  }
        // let isNewUser = await instance.methods.checkUser(accounts).call();
        // // console.log(isNewUser);
        // setNewUser(!isNewUser);

        // if (!isNewUser) { setLoadingr(false); return; }

        // await instance.methods.getDashBoard(accounts).call(
        //   function (err, res) {
        //     if (err) {
        //       setLoadingr(false);
        //     }else {
        //      setPkgvalue(res[0]);
        //      let val = res[0];
        //       if (val >=10 && val <=50) { setRate(1); }
        //       else if (val >=51 && val <=100) { setRate(2); }
        //       else if (val >=101 && val <=200) { setRate(3); }
        //       else if (val >=201 && val <=400) { setRate(4); }
        //       else if (val >=401 ) { setRate(5); }
        //       else { setRate(1); }
            
        //      setWithdrawnbal(Number.parseFloat(Web3.utils.fromWei(res[1],'ether')).toFixed(1)); // Web3.utils.fromWei(res[1],'ether')
             
        //      setSubordinates(res[2]);
        //      setLevelnumber(res[3]);
             
        //     //  setXbalance(Web3.utils.fromWei(res[4],'ether'));
        //      setBalance(Number.parseFloat(Web3.utils.fromWei(res[4],'ether')).toFixed(1));
        //      setRefbouns(Number.parseFloat(Web3.utils.fromWei(res[5],'ether')).toFixed(1));
             
        //      setParent(res[6]);
        //      setSponaddress(res[6]);
        //      setLoadingr(false);
        //     }
        //   }
        // );
      // }

      } else
      {   }

     setLoadingr(false);
  } catch (error) {
    // console.log(error);
    setLoadingr(false);
  }
}; 

// 2.GetSponsorDetails

// 3.GetTotals


// 4.callBuy

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


    await instance.methods.BuyCart().send({ from: accounts , value: Web3.utils.toWei(totalamt, 'ether')}, 
    function(error, transactionHash){
      if (error) {
      } else {
        setTrnrecepitb(transactionHash);
      }
  });
}
} else
{
  
}
  } catch (error) {
    setErrormsgg("Please try again later!");
  }
}; 

// callSponsor


const callSponsor = async () => {
  try {
    if(accounts) {
      setLoadingfind(true);
    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

        let isNewUser = await instance.methods.checkUser(accounts.trim()).call();
        if (isNewUser) { setErrormsgfi("Sponsor already exists"); setLoadingfind(false); return; }
    

        await instance.methods.getSponsor().call(
          function (err, res) {
            if (err) {
              setLoadingfind(false);
            } else {

              for(let i=0;i < 5;i++) {
                
                if(/^0x0+$/.test(res[i])) {}
                // if(parseInt(res[i], 16) === 0) {}
                else {  cartItems.push({id: i+1,value:res[i]}); }
                
              }
              // setWarnmsgg("Please check below section");
              // console.log(cartItems);
              setLoadingsch(false);
            }
          }
        );
      }
      }
      setLoadingfind(false);
      
  } catch (error) {
    setLoadingfind(false);

  }
}; 

// 5.callwithdraw

const callwithdraw = async () => {
  try {
    if(accounts) {
      setLoadingd(true);
    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

        await instance.methods.WithdrawToken().send({ from: accounts }, 
          function(error, transactionHash){
            if (error) {
              setLoadingd(false);
            } else {
              // setLoadingd(false);
              setTrnrecepitw(transactionHash);
            }
        });      }

      }
      setLoadingd(false);
  } catch (error) {
    setLoading(false);

  }
}; 

// getChild

const getChild = async () => {
  try {
    if (subordinatesp <= 0) {  return;} // setWarnmsgg("Downline token holders");
    const isaddress = AddressChk(sponaddress.trim());
    if(accounts && isaddress) {
      setLoadings(true);
    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

        let isNewUser = await instance.methods.checkUser(sponaddress.trim()).call();
        if (!isNewUser) { setLoadings(false); return; }
    

        await instance.methods.getChildAddress(sponaddress.trim()).call(
          function (err, res) {
            if (err) {
              setLoadings(false);
            } else {
              // let tempArr = [];
              for(let i=0;i < subordinatesp;i++) {
                
                cartItems.push({id: i+1,value:res[i]});
                
              }
              setWarnmsgg("Please check below section");
              //  console.log(tempArr);
              // setCartItems([...cartItems, tempArr]);
              //  setLoadingsch(false);
            }
          }
        );
      }
      }
      setLoadings(false);
      setLoadingsch(false);
  } catch (error) {
    setLoadings(false);
setLoadingsch(false);
  }
}; 

// Admin

const callAdmin = async (sponaddress) => {
  try {
    // console.log(sponaddress);
    const isaddress = AddressChk(sponaddress.trim());
    if(accounts && isaddress) {
      setLoadings(true);
    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      ContractAddress
    );

      if(!instance) {
      }
      else {

         let isNewUser = await instance.methods.checkUser(sponaddress.trim()).call();
        if (!isNewUser) { setWarnmsgg("Sponsor Not Found! Please use sponsor finder tool"); setLoadings(false); return; }
    

        await instance.methods.getDashBoard(sponaddress.trim()).call(
          function (err, res) {
            if (err) {
              setLoadings(false);
            } else {
              setSubordinatesp(res[2]);
              setLevelnumberp(res[3]);

              if(res[2] >=0 && res[2] <=19){
                setErrormsgsp("Health Check Pass");
              }

              if(res[2] >=20){
                setWarnmsgg("Already 20 Downline token holders exists! It is recommended for influencers only to choose this sponsor");
              }

              if(res[2] > 0){
              // setLoadingsch(true);
              }
              // setCartItems([]);

              // setLoadings(false);
            }
          }
        );
      }
      }
      setLoadings(false);
  } catch (error) {
    setLoadings(false);

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
        <Button variant="outlined" color="warning" >Your Balance: 20 Matic</Button>
          {/* <Typography variant="subtitle2"> */}
              {/* Win 25 For 1 MATIC */}
            {/* <Text color="black"> */}
              {/* <b>Panel</b> */}
            {/* </Text>
          </Typography> */}
        </Box>

        <Box mt={{ xs: 2, md: 0 }}>
      
        {isConnected && (<Button variant="outlined" color="success" onClick={getUserDetails} disabled={loadingr}>Refresh Board</Button>)} {' '}

      {errormsgw && (<Button variant="outlined" color="error" startIcon={<ErrorOutlineIcon fontSize="small" />} >{errormsgw}</Button>)} {' '}
      
      {loadingw && ( 
                <CircularProgress color="primary" size={25} />
              )}

        {!isConnected && (
        <Button variant="contained" startIcon={<AccountBalanceWalletOutlinedIcon />}
          onClick={onConnectChild}
          color="warning"
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
        justifyContent="space-between"
      ></Box>


<Grid container spacing={4}>
                      <Grid item xs={12} >
                        <AccountBalance 
                        totalUsers={totalUsers}
                        totalWithdraws={totalWithdraws}
                        totalPlayAmt={totalPlayAmt}
                        slotNum={slotNum}
                        />
                      </Grid>
        
                    </Grid>

      <Box
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      ></Box>

 {/* row -1 */}
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" pl={0.3} justifyContent="space-between">
                <CardTravelIcon variant="outlined" fontSize="large" color="warning"/>
                {isConnected && loadingr && (  <CircularProgress color="primary" size={20} />   )}
              </Box>
              <Typography variant="h5" noWrap>
                Slot Indicator
              </Typography>
              <Typography variant="subtitle1" noWrap>
                current slot {slotNum}
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography variant="h3" gutterBottom noWrap>
                  {/* {pkgvalue} Matic */}
                </Typography>
                <Box>
                    <Rating value={rate} defaultValue={5} precision={1} size="small" readOnly />
                </Box>
                <Typography variant="subtitle1" >
                  5 star indicates slot completion and new slot begins.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardContent>
            <Box display="flex" alignItems="center" pl={0.3} justifyContent="space-between">
                <PaidIcon variant="outlined" fontSize="large" color="warning"/>
                {isConnected && loadingr && (  <CircularProgress color="primary" size={20} />   )}
              </Box>
              <Typography variant="h5" noWrap>
                Available balance
              </Typography>
              <Typography variant="subtitle1" noWrap>
                5.0 Matic
              </Typography>
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

                <Button  size="small"  variant="outlined" color="warning">
                  Withdraw
                </Button>
                <Button  size="small"  variant="outlined" color="warning">
                  Buy Again
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardContent>
            <Box display="flex" alignItems="center" pl={0.3} justifyContent="space-between">
                <PaidIcon variant="outlined" fontSize="large" color="warning"/>
                {isConnected && loadingr && (  <CircularProgress color="warning" size={20} />   )}
              </Box>
              <Typography variant="h5" noWrap>
                Ticket Counter
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {tokenamt} Chance to win 25
              </Typography>
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
                  pt: 2
                }}
              ></Box>

              </Box>

              <Box
                sx={{
                  pt: 2
                }}
              >

              {isConnected && (
                <Tooltip arrow title="Win 25 Matic"><span>
                <Button variant="outlined" size="small" color="warning" onClick={sendValue} 
                disabled={loading}
                >Buy</Button> </span></Tooltip> 
              )}

              {isConnected && loading && ( 
                <CircularProgress color="warning" size={20} />
              )}

              {!isConnected && (
                <Tooltip arrow title="Please Connect Wallet"><span>
                <Button variant="outlined" size="small" color="warning" onClick={sendValue} disabled>Buy</Button> 
                </span></Tooltip>              )}
                </Box>
                
                <Box
                sx={{
                  pt: 1
                }}
              ></Box>
                {errormsgg && (<Button  size="small"  fullWidth variant="outlined" color="warning" 
                startIcon={<ErrorOutlineIcon fontSize="small" />} style={{textAlign: 'left'}}
                onClick={() => setErrormsgg(null)} >{errormsgg}</Button>)}

                {trnrecepitb && (<Button  size="small"  variant="outlined" color="success" fullWidth
                startIcon={<CheckCircleOutlineIcon fontSize="small" />}
                onClick={() => openScan(trnrecepitb)} >Buy Receipt</Button>)}

                <Box
                sx={{
                  pt: 1
                }}
              ></Box>

                {/* {trnrecepitb && (<Button  size="small"  variant="outlined" color="success" fullWidth
                onClick={() => copyRefLink()} >{copyShRef}</Button>)} */}



            </CardContent>
          </Card>
        </Grid>


        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardContent>
            <Box display="flex" alignItems="center" pl={0.3} justifyContent="space-between">
                <PersonOutlineIcon variant="outlined" fontSize="large" color="warning"/>
                {isConnected && loadingr && (  <CircularProgress color="primary" size={20} />   )}
              </Box>
              <Typography variant="h5" noWrap>
                Matic Spinner
              </Typography>
              <Typography variant="subtitle1" noWrap>
               spins in the blockchain
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography variant="h3" gutterBottom noWrap>
                  {levelnumber}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Level 
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      ></Box>


<Box
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      ></Box>

    </>
  );
}

export default TaskSearch;
