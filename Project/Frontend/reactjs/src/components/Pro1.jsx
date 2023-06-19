import React from 'react'
import Button from '@mui/material/Button';
import "./MultiSelect.css";
import { Container } from '@mui/material';

const Pro1 = () => {
  return (
    <Container align="center">
    <div>
        <h1>Begin your Programming task</h1>
        <h4>Go through the following websites</h4>
        <h2>Lesson 1:<a href='https://www.innomatics.in/full-stack-web-development-course-with-job-assistance/?gclid=CjwKCAjwp6CkBhB_EiwAlQVyxTo7qeewe5YlGDwe4MFeoT0aMydfG53ksQ9d-'>Click here</a></h2>
        <h2>Lesson 2:<a href='https://www.hackerrank.com/'>Click here</a></h2>
        <h2>Lesson 3:<a href='https://www.freecodecamp.org/'>Click here</a></h2>
        <h5>Create your programming practice and prepare a file and click enter button below</h5>
        <Button variant='contained' href="/Apps">Enter</Button> 

    </div>
    </Container>
  )
}

export default Pro1