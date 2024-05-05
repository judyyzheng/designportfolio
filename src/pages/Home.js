import React from 'react';
import './Home.scss';

// Components
import Navbar from './Navbar';
import Card from '../components/Card/Card.tsx';
import Label from '../components/Label/Label.tsx';

// Assets
import GirlOnTrain from '../assets/projects/girltrain.png';
import BbgBgd from '../assets/projects/TradeBooker/bbgbgd.jpg';
import SCBgd from '../assets/projects/SocialCurrant/day3.jpg';

function Home() {

  return (
    <>
      <Navbar />
      <div className="front-section">
        <div className="header">hi, i'm <strong>judy zheng</strong></div>
        <div className="header-introduction">i'm an aspiring fullstack developer with a big passion for fintech, who also paints horses for fun.</div>
      </div>
      <div className="projects-section">
        <div className="projects-text">
              <div className="header">
              my projects
              </div>
              <div className="header2">
                here are some projects i've worked on.
              </div>
              <Label label="Explore"/>
        </div>
        <div className="projects-display">
          <Card title="Trade Booker API" image={BbgBgd} description={['Scotiabank']} date={"2023"} tags={["Python", "SQL"]} link={"/tradebooker"}/>
          <Card title="Matchbox" image={SCBgd} description={['UW Prodcon', '1st Place Team']} date={"2022"} tags={["Figma", "Product"]} link={"/project"}/>
          <Card title="Design Portfolio" image={GirlOnTrain} description={["You're here"]} date={"2022"} tags={["TS", "React"]}/>
        </div>
      </div>
    </>
  )
}

export default Home;