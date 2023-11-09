import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid, LinearProgress, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';

// ----------------------------------------------------------------------

export default function AssignedRole() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowComponent1(false), 4000);
    setTimeout(() => setShowComponent2(true), 4000);
    setTimeout(() => setShowComponent3(true), 4500);
    setTimeout(() => setShowComponent4(true), 10000);
  }, []);

  const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  });
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <></>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          {showComponent1 ? (
            <>
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <TextWidget title="Assigning role..." value={"Hide your phone"} color="warning"/>
            </>
          ) : null}
          {showComponent2 ? (
            <>
            <TextWidget title="Your role is" value="Loup Garou" color="warning" icon={'ant-design:windows-filled'} />
            <Box sx={{ mt: 3, pt: '100%', position: 'relative' }}>
              <StyledProductImg alt={'card'} src={`/assets/images/cards/loup.png`} />
            </Box>
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <></>
        </Grid>
      </Grid>
    </>
  );
}
