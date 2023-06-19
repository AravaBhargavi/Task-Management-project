import React from 'react'
import Button from '@mui/material/Button';
import "./App1.css";
import { Container } from '@mui/material';

const Total = () => {
  return (
    <Container align="center">
    <div>
        <h1>Research</h1>
        <h3 align="left">Description:</h3>
        <p align="left">A research task typically involves investigating a topic or issue in order to gain new knowledge or insights. This can involve conducting experiments, collecting data, analyzing information, and interpreting results. Research tasks may be assigned by academic institutions, businesses, government agencies, or other organizations, and may be conducted by individuals or teams of researchers. The goal of a research task is often to answer a specific question, solve a particular problem, or advance understanding in a particular field. Successful completion of a research task requires careful planning, attention to detail, and rigorous analysis of the data collected.</p>
        <Button variant="contained" href="/Re1">Begin</Button>

        <h1>Designing</h1>
      <h3 align="left">Description:</h3>
      <p align="left">Designing is a creative process of conceptualizing and creating solutions that are aesthetically pleasing, functional, and meaningful. It involves combining artistry, problem-solving, and strategic thinking to communicate messages, solve problems, and improve experiences.</p>
      <Button variant="contained" href="/De1">Begin</Button>

      <h1>Programming</h1>
        <h3 align="left">Description:</h3>
        <p align="left">Programming is the process of creating software or applications by writing code in a programming language. It involves designing, implementing, testing, and maintaining computer programs using specialized languages and tools</p>
        <Button variant="contained" href="/Pro1">Begin</Button>

           <h1>Testing</h1>
        <h3 align="left">Description:</h3>
        <p align="left">Testing tasks refer to the activities performed during software testing to verify the functionality, quality, and performance of a software application or system. The primary goal of testing is to identify defects or errors, ensuring that the software meets the specified requirements and functions as expected.</p>
        <br></br><Button variant="contained" href="/Te1">Begin</Button>

           <h1>Deployment</h1>
        <h3 align="left">Description:</h3>
        <p align="left">Deployment refers to assigning people to serve in various locations, especially soldiers and other military personnel. A deployment may include soldiers, as well as equipment and generals. Deployments might be part of a war or a peaceful mission.</p>
        <Button variant="contained" href="/Dep1">Begin</Button>
        </div>
        </Container>
    
  )
}

export default Total;