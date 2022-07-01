import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./cards.css"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card1() {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 250 }} variant="outlined" className='cardbox'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Learning React Cards Using MUI
        </Typography>
        <Typography variant="h5" component="div">
          {bull}{bull}{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Hello
        </Typography>
        <Typography variant="body2">
          This is body of Card
          <br />
          {'"Heyyyy"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reusable Card</Button>
      </CardActions>
    </Card>
  );
}
