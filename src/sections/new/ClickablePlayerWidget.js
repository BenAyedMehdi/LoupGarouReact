// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Avatar, CardActionArea } from '@mui/material';
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
  width: theme.spacing(12),
  height: theme.spacing(12),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

ClickablePlayerWidget.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function ClickablePlayerWidget({ clicked, id, name, total, iconUrl, color = 'primary', sx, ...other }) {

  const PlayerClicked = () => {
    console.log("clicked", id)
    clicked(id)
  };
  return (
    <Card 
    onClick={PlayerClicked}
      sx={{
        py: 5,
        cursor: 'pointer',
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        '&:hover': {
          backgroundColor: 'LightGreen',
        },
        ...sx,
      }}
      {...other}
    >
        <StyledIcon
          sx={{
            color: (theme) => theme.palette[color].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                theme.palette[color].dark,
                0.24
              )} 100%)`,
          }}
        >
          <Avatar sx={{ width: 66, height: 66 }} alt={'avatar'} src={iconUrl} />
        </StyledIcon>
        <Typography variant="h3">{name}</Typography>
    </Card>
  );
}
