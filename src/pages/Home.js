import React from 'react';
import './Home.scss';

// Components
import Navbar from './Navbar';
import Card from '../components/Card/Card.tsx';
import Label from '../components/Label/Label.tsx';

// Assets
import GirlOnTrain from '../assets/projects/girltrain.png';

function Home() {

  return (
    <>
      <Navbar />
      <div className="front-section">
        <div className="header">hi, i'm <b>judy zheng</b></div>
      </div>
      <div className="projects-section">
        <div className="projects-text">
              <div className="header">
              my projects
              </div>
              <div className="header2">
                here are some samples of my work.
              </div>
              <Label label="Explore"/>
        </div>
        <div className="projects-display">
          <Card title="Trade Booker API" image={GirlOnTrain} description={['Scotiabank']} date={"2023"} tags={["Python", "SQL"]}/>
          <Card title="Matchbox" image={GirlOnTrain} description={['UW Prodcon', '1st Place Team']} date={"2022"} tags={["Figma", "Product"]}/>
          <Card title="Design Portfolio" image={GirlOnTrain} description={["You're here"]} date={"2022"} tags={["TS", "React"]}/>
        </div>
      </div>
    </>
  )
}

export default Home;