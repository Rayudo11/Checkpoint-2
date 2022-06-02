import * as React from 'react';
import Paper from '@mui/material/Paper';



export default function SimplePaper(props) {
  return (
   
      <Paper sx={props.sx}>{props.children}</Paper>
  );
}
