import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

// Components
import Navbar from './Navbar';
import Card from '../components/Card/Card.tsx';
import Label from '../components/Label/Label.tsx';

// Assets
import GirlOnTrain from '../assets/projects/girltrain.png';
import BbgBgd from '../assets/projects/TradeBooker/bbgbgd.jpg';
import SCBgd from '../assets/projects/SocialCurrant/day3.jpg';
import EntryScreen from './entryscreen/EntryScreen.js';

function Home() {
  const [showHowdy, setShowHowdy] = React.useState(false);

  const onMouseEnter = () => {
    setShowHowdy(true);
  }
  const onMouseLeave = () => {
    setShowHowdy(false);
  }

  return (
    <>
    <EntryScreen />
      <Navbar />
      <Link to="/gallery">
        {showHowdy && <div className="circular-button-howdy">check out some horse art</div>}
        <button class="circular-button" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            🐴
        </button>
      </Link>
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
          <Card title="Design Portfolio" image={GirlOnTrain} description={["You're here"]} date={"2022"} tags={["TS", "React"]} link={'https://github.com/judyyzheng/designportfolio'}/>
        </div>
      </div>
    </>
  )
}

export default Home;