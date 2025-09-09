import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  { label: 'Pending' },
  { label: 'Contacted' },
  { label: 'Responded' },
  { label: 'Converted' },
];

export default function VerticalLinearStepper({ status }: { status?: string }) {
  // Find the index of the status from steps array
  const initialStep = status
    ? steps.findIndex((s) => s.label.toLowerCase() === status.toLowerCase()) + 1
    : 0;

  const [activeStep, setActiveStep] = React.useState(initialStep >= 0 ? initialStep : 0);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
