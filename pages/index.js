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
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TeamOverview from 'src/content/Dashboards/Tasks/TeamOverview';
import Checklist from 'src/content/Dashboards/Tasks/Checklist';
import Profile from 'src/content/Dashboards/Tasks/Profile';
import TaskSearch from 'src/content/Dashboards/Tasks/TaskSearch';
import AccountBalance from 'src/content/Dashboards/Tasks/AccountBalance';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);

function DashboardTasks() {
  const theme = useTheme();

  const router = useRouter();
  var refid = router.query["ref"];

  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [errormsg, setErrormsg] = useState(null);
  const [isLoadingConn, setIsLoadingConn] = useState(false);
  const [currentTab, setCurrentTab] = useState('analytics');

  const tabs = [
    { value: 'analytics', label: 'Overview' },
    { value: 'taskSearch', label: 'FastX Matic' },
  ];

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


  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Head>
        <title>FastX Dashboard</title>
      </Head>
      {/* <PageTitleWrapper>
        <PageHeader 
                    isConnected={isConnected}
                    accounts={accounts}
        />
      </PageTitleWrapper> */}
                      <Box
                sx={{
                  pt: 2
                }}
              ></Box>
      <Container maxWidth="lg">
        {/* <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper> */}
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
                   refid = {refid}
                  />
                </Box>
              </Grid>


            {/* {currentTab === 'analytics' && (
              <>
                <Grid item xs={12}>
                  <Box p={4}>
                    <TeamOverview />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                  <Box
                    p={4}
                    sx={{
                      background: `${theme.colors.alpha.black[5]}`
                    }}
                  >
                    <Grid container spacing={4}>
                      <Grid item xs={12} >
                        <AccountBalance />
                      </Grid>
        
                    </Grid>
                  </Box>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      background: `${theme.colors.alpha.black[5]}`
                    }}
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={12} md={6}>
                        <Box
                          p={4}
                          sx={{
                            background: `${theme.colors.alpha.white[70]}`
                          }}
                        >
                          <Checklist />
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Box p={4}>
                          <Profile />
                        </Box>
                      </Grid>

                    </Grid>
                  </Box>
                </Grid>
              </>
            )}
            {currentTab === 'taskSearch' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <TaskSearch 
                   isConnected={isConnected}
                   accounts={accounts}
                   web3={web3}
                   errormsgw={errormsg}
                   onConnect={onConnect}
                   onDisconnect={onDisconnect}
                   refid = {refid}
                  />
                </Box>
              </Grid>
            )} */}

          </Grid>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;
