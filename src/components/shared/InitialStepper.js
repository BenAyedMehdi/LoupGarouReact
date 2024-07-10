import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// ----------------------------------------------------------------------

export default function InitialStepper({currentStep, steps}) {
const percentage = steps.length * 0.1 ;
  return (
    <>
     <Stepper sx={{marginBottom:3, width:percentage}} activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}
