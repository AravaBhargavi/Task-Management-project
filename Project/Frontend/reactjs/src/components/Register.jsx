import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Register.css";
import Stack from '@mui/material/Stack';




const Register = () => {
  const required = true;
  const disabled = false;
  return (
    <div>
        <Container maxWidth="xs" className='queue'>
          <h1  text-align="center">Welcome!</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" align="center" /><br></br>
       <br></br><TextField id="filled-basic" label="Email" variant="filled" /><br></br>
       <br></br>
      
        </Container>
        <Stack spacing={2} direction="row" className="stack">
        <Button variant="contained" href="/MultipleSelect">Sign Up</Button>
       </Stack>
        
        
        

    </div>
  );
}

export default Register