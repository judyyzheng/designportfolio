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
          <Label label="hihjgfk,yufukfkufyufkuyf,jfyufy"/>
        </div>
        <div className="projects-display">
          <Card title="Untitled" image={GirlOnTrain} desciption={['this is line #1', 'this is line #2', 'this is line #3']}/>
          <Card title="Untitled" image={GirlOnTrain} desciption={['this is line #1', 'this is line #2', 'this is line #3']}/>
          <Card title="Untitled" image={GirlOnTrain} desciption={['this is line #1', 'this is line #2', 'this is line #3']}/>
        </div>
      </div>
    </>
  )
}
export default Home;