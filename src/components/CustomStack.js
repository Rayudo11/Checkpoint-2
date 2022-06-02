import * as React from 'react';
import Stack from '@mui/material/Stack';



export default function BasicStack(props) {
  return (
   <Stack spacing={2} sx={props.sx}>{props.children}</Stack>

  );
}
