import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

// Components
import Navbar from './Navbar';
import Card from '../components/Card/Card.tsx';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard.tsx';
import Label from '../components/Label/Label.tsx';

// Assets
import GirlOnTrain from '../assets/projects/girltrain.png';
import BbgBgd from '../assets/projects/TradeBooker/bbgbgd.jpg';
import SCBgd from '../assets/projects/SocialCurrant/day3.jpg';
import Me from '../assets/projects/me.jpg';

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
        <div class="personal-links-button-row">
            <a href="https://github.com/judyyzheng" target="_blank" rel="noopener noreferrer" class="button github"><i class="fab fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/judy-zheng-852258160/" target="_blank" rel="noopener noreferrer" class="button linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>
            <a href="../assets/resume/judyzhengresume.pdf" target="_blank" rel="noopener noreferrer" class="button resume"><i class="fas fa-file-alt"></i> Resume</a>
        </div>
      </div>
      <div className="about-section">
        <div className="about-text">
              <div>
              <strong>about me 👋</strong>
              </div>
              <div className="">
                i'm currently a 4th year computer science and business administration student at the University of Waterloo,
                 specializing in artificial intelligence with a concentration in finance.  
              </div>
              <div className="">
                i started my tech journey late by today's standards, as i spent my high school/early uni years
                trying to intersect my passion for theoretical math, my interests in financial markets, and my desires for a creative outlet.
              </div>
              <div className="">
                lockdown frustrations kickstarted this journey, when i implemented my first python algorithm to optimize provincial
                 covid testing. 
              </div>
              <div className="">
                since then, i've dived into self-learning end-to-end software development, from figma design/prototyping (every image on this site is a custom vector) 
                to product management to fullstack api development. i got to develop my experiences at an array of fintech companies and banks, 
                and found a passion for financial accesibility and modernizing investment tools!
              </div>
        </div>
        <div className="about-img">
              <img src={Me} alt=''/>
        </div>
      </div>
      <div className="projects-section">
        <div className="projects-text">
              <div className="header">
              projects showcase
              </div>
              <div className="header2">
                here are some projects i've worked on.
              </div>
              <Label label="Click them to learn more →"/>
        </div>
        <div className="projects-display">
          <Card title="Trade Booker API" image={BbgBgd} description={['Scotiabank']} date={"2023"} tags={["React", "Python", "SQL"]} link={"/tradebooker"}/>
          <Card title="Matchbox" image={SCBgd} description={['UW Prodcon', '1st Place Team']} date={"2022"} tags={["Figma", "Product"]} link={"/project"}/>
          <Card title="Design Portfolio" image={GirlOnTrain} description={["Everything on ths site is a custom design component."]} date={"2022"} tags={["TS", "React"]} link={'https://github.com/judyyzheng/designportfolio'}/>
        </div>
      </div>
      <div className="experience-section">
        <div className="projects-text">
          <div className="header">
          my internships
          </div>
          <div className="header2">
            here are some cool places i've worked at.
          </div>
          <div className="references-container">
          <Label label="Feedback from my mentors ↓"/>
            <div className="reference">
              <div className="reference-header-text">
                <strong>software developer manager</strong><br /> wealthsimple
              </div>
              <div className="reference-text">
                "Judy has exceeded not only my expectations for her role, but my expectations of any intern I have worked with. 
                She takes on work, resolves issues entirely on her own, proposes new ideas, features, and complex improvements to the product,
                all while keeping up with our full time team's level of contributions to code. 
                I trust Judy to make decisions and to ask when she can't make them alone, and 
                I trust that the work she takes on will be done with care and efficiency. 
                Everyone I have spoken with shares similar sentiments."
              </div>
            </div>
            <div className="reference">
            <div className="reference-header-text">
            <strong>managing director</strong><br /> scotiabank
              </div>
            <div className="reference-text">
              Judy had an outstanding term at our trading desk. She has very strong technical/programming skills and 
              was able to leverage her strength to enhance the operational efficiency for the desk. 
              She took initiatives to build many tools that significantly improve the current process and 
              provide significant insights to the traders.
              </div>
            </div>
          </div>
        </div>
        <div className="projects-display">
          <ExperienceCard title="Wealthsimple" image={BbgBgd} subtitle={'Software Developer Intern 👩🏻‍💻'} description={['Built an end-to-end dividend tracker, enhanced the order flow UX, and unshipped a legacy endpoint.']} date={"2024"} tags={["TypeScript", "React Native", "Ruby on Rails", "GraphQL", "Figma"]} link={"/tradebooker"}/>
          <ExperienceCard title="Scotiabank" image={SCBgd} subtitle={'Sales and Trading Intern 📈'} description={['Built a new trade booker API, integrated structured note pricing with real-time data.', ['Learned a ton about capital markets, derivative products, and working on the trade floor!']]} date={"2023"} tags={["Python", "Flask", "Javascript", "SQL"]} link={"/project"}/>
          <ExperienceCard title="Neo Financial" image={GirlOnTrain} subtitle={'Software Engineering Intern 👩🏻‍💻'} description={["Dived into highly-quantitative interest rate incidents, automated our testing."]} date={"2022"} tags={["Typescript", "React", "Mongo"]} link={'https://github.com/judyyzheng/designportfolio'}/>
          <ExperienceCard title="Mortgage Automator" image={GirlOnTrain} subtitle={'Jr HTML Developer 👩🏻‍💻'} description={["Independently managed end-to-end client projects, implemented a new client-file request system."]} date={"2021"} tags={["PHP", "HTML", "CSS"]} link={'https://github.com/judyyzheng/designportfolio'}/>
        </div>
      </div>
    </>
  )
}

export default Home;