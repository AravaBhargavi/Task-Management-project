import { Button } from '@mui/material'
import  React from 'react'
import pic from "./../image/pic.png";
import "./Start1.css";
import { useNavigate } from 'react-router-dom';

const Start = () => {
  
  return (
    <><div className='button'>
          <Button variant='contained' href="/LoginUi" color='primary'>Start</Button>
      </div><div>
              <img src={pic} alt="pic"/>
          </div></>
  );
}

export default Start;