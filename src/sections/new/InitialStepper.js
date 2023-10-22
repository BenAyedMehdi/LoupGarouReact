import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from './TextWidget';
import PlayerWidget from './ClickablePlayerWidget';

// ----------------------------------------------------------------------

export default function InitialStepper({currentStep, steps}) {
const percentage = steps.length * 0.1 ;
  return (
    <>
     <Stepper sx={{marginBottom:5, width:percentage}} activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}
