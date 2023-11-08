// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Button, Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

YesOrNoWidget.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  sx: PropTypes.object,
};

export default function YesOrNoWidget({ voted, title, value, color = 'primary', sx, ...other }) {

  const handleYes = () => {
    voted("y");
  };

  const handleNo = () => {
    voted("n");
  };

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h5" sx={{mb:2, opacity: 0.72 }}>
        {title}
      </Typography>
      <Button onClick={handleYes} size={"large"} variant="contained" sx={{ mx:3,  opacity: 0.72 }}>
        Yes
      </Button>
      <Button onClick={handleNo} size={"large"} variant="contained" sx={{ mx:3, opacity: 0.72 }}>
        No
      </Button>
      <Typography variant="h2" sx={{ opacity: 0.72 }}>
        {value}
      </Typography>
    </Card>
  );
}
