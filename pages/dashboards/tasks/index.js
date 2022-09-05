import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { useState } from 'react';
import PageHeader from 'src/content/Dashboards/Tasks/PageHeader';
import Footer from 'src/components/Footer';
import {
  Grid,
  Avatar,
  Box,
  Container,
  Card,
  Link,
  useTheme,
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import IncomeCalc from 'src/content/Dashboards/Tasks/IncomeCalc';



function DashboardTasks() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <PageTitleWrapper>
         <PageHeader /> 
      </PageTitleWrapper>
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
                  <IncomeCalc />
                </Box>
              </Grid>
          </Grid>
        </Card>

        <Box
                          sx={{
                            pt: 2
                          }}
                        ></Box>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Shortest Upline Distribution Illustration</Typography>
          </AccordionSummary>
          <AccordionDetails>


            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://rabbiteggsdefi.github.io/maticguide/images/FastXLevel2.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shortest Upline: Only 2 Upline , 20 downline
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User buy FastX Token using MATIC Amount and it get distributed to 
                  their respective upline , downline and sponsor based on the token holding value.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="https://rabbiteggsdefi.github.io/maticguide/images/FastXLevel2.png"
                  target="_blank"
                  rel="noopener noreferrer">Illustration Full View</Link>
              </CardActions>
            </Card>

          </AccordionDetails>
        </Accordion>

       <Box
                          sx={{
                            pt: 4
                          }}
                        ></Box>
       <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Longest Upline Distribution Illustration</Typography>
                  </AccordionSummary>
                  <AccordionDetails>

               
               <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://rabbiteggsdefi.github.io/maticguide/images/FastXLevel25.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Longest Upline: Only 25 Upline , 20 downline
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User buy FastX Token using MATIC Amount and it get distributed to 
                  their respective upline , downline and sponsor based on the token holding value.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="https://rabbiteggsdefi.github.io/maticguide/images/FastXLevel25.png"
                  target="_blank"
                  rel="noopener noreferrer">Illustration Full View</Link>
              </CardActions>
            </Card>


                  </AccordionDetails>
       </Accordion>


      </Container>
      <Footer />
    </>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;
