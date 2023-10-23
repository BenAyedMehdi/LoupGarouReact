// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Stack, Box, Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from './TextWidget';

// ----------------------------------------------------------------------
const StyledProductImg = styled('img')({
  width: '200px',
  height: '200px',
});

export default function PosterJoinGame({ title, value, color = 'primary', sx, ...other }) {
  return (
    <>
      <Card
        sx={{
          mb: 2,
          boxShadow: 0,
          textAlign: 'center',
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" m={5} mb={2}>
          <div>

          <Typography variant="h6" sx={{ opacity: 0.72 }}>
            Navigate to this link
          </Typography>

          <Typography variant="h2" sx={{mr: 2, opacity: 0.72 }}>
            loupgarou.com
          </Typography>
          </div>
          <Box sx={{ position: 'relative' }}>
          <Typography variant="h6" sx={{ opacity: 0.72 }}>
            Or use the QR code
          </Typography>
          <Box
            component="img"
            src="/assets/images/qrcode.png"
            sx={{ width: 200,  pt: 2}}
          />
          </Box>
        </Stack>
        <TextWidget title="Game ID" value="XYZK" color="warning" sx={{ m: 3 }} />
      </Card>
    </>
  );
}
