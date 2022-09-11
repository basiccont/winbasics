import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PageHeader from 'src/content/Dashboards/Tasks/PageHeader';
import Footer from 'src/components/Footer';
import {
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  styled
} from '@mui/material';
import Web3 from 'web3';

import TaskSearch from 'src/content/Dashboards/Tasks/TaskSearch';




function DashboardTasks() {
  const theme = useTheme();

  const router = useRouter();

  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [errormsg, setErrormsg] = useState(null);
  const [isLoadingConn, setIsLoadingConn] = useState(false);

   /* chain switch */
   const networks = {
    polygontest: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Mumbai Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
    },
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
    gan: {
      chainId: `0x${Number(1337).toString(16)}`,
      nativeCurrency: {
        name: "Local Native Token",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: ["HTTP://127.0.0.1:7545"],
      blockExplorerUrls: ["https://bscscan.com"]
    }
   };
 

  /* MM Connect - begins */
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      setErrormsg("Please install MetaMask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      setErrormsg(null);
      setIsLoadingConn(true);
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        if (currentProvider !== window.ethereum) {
          setErrormsg("Please install MetaMask");
          return;
        }

        try {
          await currentProvider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...networks['polygon']
              }
            ]
          });
        } catch (err) {
          try {
            await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{  chainId: `0x${Number(137).toString(16)}` }],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              try {
                await ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      ...networks['polygon']
                    },
                  ],
                });
              } catch (addError) {
                setErrormsg("Please reload and try connect wallet");
              }
            }
          }
        }

        await currentProvider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const chainId = await web3.eth.getChainId();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account); 
        ethBalance = web3.utils.fromWei(ethBalance, 'ether'); 
        if (userAccount.length === 0) {
          setErrormsg("Please connect to meta mask");
        } else {
          setWeb3(web3);
          setAccounts(account);
          setIsLoadingConn(false);
          setIsConnected(true);
        }
      }
    } catch (err) {
      setErrormsg("Please reload and try connect wallet");
    }
  };

  const onDisconnect = () => {
    // setUserInfo({});
    // setRbal(0.0);
    // setWeb3(null);
    setAccounts(null);
    setIsConnected(false);
    // notify("info","Disconnected! To know about tips & tricks ", TIPS);
  };


  return (
    <>
      <Head>
        <title>FastX CashBack Betting Game</title>
      </Head>
                      <Box
                sx={{
                  pt: 2
                }}
              ></Box>
      <Container maxWidth="lg">

        <Card variant="outlined">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
          <Grid item xs={12}>
                <Box p={4}>
                  <TaskSearch 
                   isConnected={isConnected}
                   accounts={accounts}
                   web3={web3}
                   errormsgw={errormsg}
                   onConnect={onConnect}
                   onDisconnect={onDisconnect}
                  />
                </Box>
              </Grid>

          </Grid>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;
