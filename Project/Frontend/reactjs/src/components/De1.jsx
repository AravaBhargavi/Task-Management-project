import React from 'react'
import Button from '@mui/material/Button';
import "./MultiSelect.css";
import { Container } from '@mui/material';

const De1 = () => {
  return (
    <Container align="center">
    <div>
        <h1>Begin your Designing task</h1>
        <h4>Go through the following websites</h4>
        <h2>Lesson 1:<a href='https://dribbble.com/tags/links'>Click here</a></h2>
        <h2>Lesson 2:<a href='https://leo9studio.com/?gclid=CjwKCAjwp6CkBhB_EiwAlQVyxVoqpJyTmwO0QktAhjf9mFMy07RrPYEXJ7lNW0MxqqwuvAOq-lB8UBoCWA0QAvD_BwE'>Click here</a></h2>
        <h2>Lesson 3:<a href='https://www.webfx.com/blog/web-design/designing-hyperlinks-tips-and-best-practices/'>Click here</a></h2>
        <h5>Create your own design of a website and click enter button below</h5> 
        <Button variant='contained' href="/Apps">Enter</Button>
        
    </div>
    </Container>
  )
}

export default De1