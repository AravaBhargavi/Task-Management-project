import React from 'react'
import Button from '@mui/material/Button';
import "./MultiSelect.css";
import { Container } from '@mui/material';

const Re1 = () => {
  return (
    <Container align="center">
    <div>
        <h1>Begin your Research task</h1>
        <h4>Go through the following websites</h4>
        <h2>Lesson 1:<a href='https://cloudemployee.co.uk/blog/programming-tips/10-best-websites-to-practice-coding-online'>Click here</a></h2>
        <h2>Lesson 2:<a href='https://stackify.com/18-websites-every-developer-should-visit-right-now/'>Click here</a></h2>
        <h2>Lesson 3:<a href='https://www.cs.cmu.edu/~mleone/language-research.html'>Click here</a></h2>
        <h5>Create your own research file and click enter button below</h5> <br></br>
        
        <Button variant="contained" href="/Apps">Enter</Button>
    </div>
    </Container>
  )
}

export default Re1