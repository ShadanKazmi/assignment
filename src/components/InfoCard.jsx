import React, { useState } from 'react';
import { Card, Tabs, Tab, Box, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import scroll from '../assets/scroll.svg';

const InfoCard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: { xs: 'calc(100% - 32px)', sm: '90%', md: '720px' },
        backgroundColor: 'rgba(54, 60, 67, 1)',
        boxShadow: '5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)',
        opacity: 1,
        padding: { xs: '8px', sm: '12px', md: '17px 53px' },
        borderRadius: '20px',
        margin: { xs: '16px auto', md: '96px auto' },
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: '15px',
          color: 'rgba(163, 173, 178, 1)',
        }}
      >
        <HelpOutlineIcon />
      </Box>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="experience about recommended tabs"
          sx={{
            backgroundColor: 'black',
            borderRadius: '23px',
            boxShadow: '0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25) inset',
            padding: { xs: '8px', sm: '10px', md: '6px 11px 7px 11px' },
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            '.MuiTab-root': {
              color: 'rgba(163, 173, 178, 1)',
              flex: 1,
              textAlign: 'center',
              textTransform: 'none',
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '16.12px',
              '&:hover': {
                backgroundColor: '#333',
                borderRadius: '16px',
              },
            },
            '.Mui-selected': {
              padding: '10px 25px 10px 24px',
              gap: '10px',
              backgroundColor: 'rgb(40, 41, 47)',
              color: 'rgba(255, 255, 255, 1)',
              borderRadius: '16px',
              boxShadow: `
                13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1),
                -8.43px -16.87px 50.6px -16.87px rgba(72, 91, 113, 1)
              `,
            },
            '.MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          <Tab label="About Me" />
          <Tab label="Experiences" />
          <Tab label="Recommended" />
        </Tabs>

        <Box
          sx={{
            marginTop: '25px',
            width: { xs: '90%', sm: '611px' },
            wordWrap: 'break-word',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {value === 0 && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                textAlign: 'left',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                lineHeight: { xs: '20px', sm: '22px', md: '25.2px' },
                color: 'rgba(150, 150, 150, 1)',
              }}
            >
              <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
              <br />
              <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
            </Typography>
          )}
          {value === 1 && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                lineHeight: { xs: '20px', sm: '22px', md: '25.2px' },
                fontWeight: '400',
                textAlign: 'left',
                color: 'rgba(150, 150, 150, 1)',
              }}
            >
              <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
              <br />
              <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
            </Typography>
          )}
          {value === 2 && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                textAlign: 'left',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                lineHeight: { xs: '20px', sm: '22px', md: '25.2px' },
                color: 'rgba(150, 150, 150, 1)',
              }}
            >
              <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
              <br />
              <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
            </Typography>
          )}

          <Box
            component="img"
            src={scroll}
            alt="scroll indicator"
            sx={{
              width: { xs: '4px', sm: '6px', md: '16px' },
              height: { xs: '32px', sm: '48px', md: '64px' },
              position: 'relative',
              top: { xs: '-20px', sm: '-30px', md: '-41px' },
              left: { xs: '10px', sm: '20px', md: '32px' },
              borderRadius: '8px 0px 0px 0px',
            }}
          />
        </Box>

      </Box>
    </Card>
  );
};

export default InfoCard;

