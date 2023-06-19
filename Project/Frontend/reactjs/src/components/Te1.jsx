import { Button, Container } from '@mui/material'
import React from 'react'
import "./MultiSelect.css";

const Te1 = () => {
  return (
    <Container align="center">
    <div>
        <h1>Begin your Testing task</h1>
        <h4>Go through the following websites</h4>
        <h2>Lesson 1:<a href='https://www.softwaretestinghelp.com/tools/30-top-website-link-verification-testing-tools/'>Click here</a></h2>
        <h2>Lesson 2:<a href='https://www.softwaretestingo.com/test-cases-for-links/'>Click here</a></h2>
        <h2>Lesson 3:<a href='https://www.lambdatest.com/blog/website-testing-tools/'>Click here</a></h2>
        <h5>Create your own testing code file and click enter button below</h5> 
        <Button variant='contained' href="/Apps">Enter</Button>
    </div>
    </Container>
  )
}

export default Te1