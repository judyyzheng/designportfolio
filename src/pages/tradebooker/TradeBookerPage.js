import React from 'react';
import './TradeBookerPage.scss';
import { HashLink } from 'react-router-hash-link';

// Components
import Navbar from '../Navbar';
import Label from '../../components/Label/Label.tsx';
import Timeline from '../../components/Timeline/Timeline.tsx';
import CircleGraph from '../../components/CircleGraph/CircleGraph.tsx';
import Quote from '../../components/Quote/Quote.tsx';

// Assets
import Prototype1 from '../../assets/projects/SocialCurrant/prototype1.svg';

function TradeBookerPage() {
  return (
    <>
      <Navbar />
      {/* <nav>
            <HashLink smooth to="/project/#background">
                Background
            </HashLink>
        
            <HashLink smooth to="/project/#problem">
            	Problem
            </HashLink>
        
            <HashLink smooth to="/project/#planning">
            	Planning
            </HashLink>

            <HashLink smooth to="/project/#research">
            	Research
            </HashLink>

            <HashLink smooth to="/project/#design">
            	Design
            </HashLink>

            <HashLink smooth to="/project/#prototypes">
            	Prototypes
            </HashLink>

            <HashLink smooth to="/project/#kpi">
            	KPI
            </HashLink>

            <HashLink smooth to="/project/#reflection">
            	Reflection
            </HashLink>
        </nav> */}
      {/* Background */}
      <div className='fixedbgd'></div>
      <div id='background' className='section' style={{backgroundColor: 'transparent'}}>
      <div className='p5'>Scotiabank</div>
      <div className='p3'>Global Banking and Markets<br/>Trade Booker</div>
        <div className='gray-gradient-bg'>
          <Label label='Background'/>
                <div className='p4' style={{paddingLeft: '10%', paddingRight: '10%'}}>
                </div>
        </div>
      </div>

      {/* Problem */}
      <div className='fixed'></div>
      <div id='problem' className='section' style={{backgroundColor: 'transparent'}}>
        <Label label='Problem'/>
        <div className='p2' style={{padding: '10vh'}}>How do we <b>speed up</b> the campaign launch process for brands on Social Currant?</div>
      </div>

      {/* Planning */}
      <div id='planning' className='section'>
        <Label label='Planning'/>
        <div className='gray-gradient-bg' >
        <Timeline />
        </div>
      </div>

      {/* Research */}
      <div id='research' className='section' style={{backgroundColor: 'transparent'}}>
        <div className='gray-gradient-bg' >
        <Label label='Research'/>
          <div className='p5' style={{paddingTop: '10vh', paddingLeft: '10%', paddingRight: '10%'}}>after hours of research, we narrowed our problem space.</div>
                <div className='p4' style={{paddingLeft: '10%', paddingRight: '10%'}}>
                </div>
        </div>
        <div className='pain-point-section'>
        <div className='pain-points'><CircleGraph label="pain points"/></div>
          <div className='pain-points'>
            <div className='pain-point-one'>
              <div className='p5'>
                1. Negotiation between parties
              </div>
              <div className='p4'>
              creative differences, brands and influencers are unfamiliar with each other, resulting in time-consuming back-and-forth talks. 
              </div>
            </div>
            <div className='pain-point-two'>
              <div className='p5'>
                2. Sourcing the right inluencer
              </div>
              <div className='p4'>
              Brands may have troubles determining relevant hashtags and finding creators. What is the end result of the campaign?
              Increasing awareness?
              Increasing followers?
              More post engagements?
              </div>
            </div>
            <div className='pain-point-three'>
              <div className='p5'>
                3. Campaign design
              </div>
              <div className='p4'>
              What are the success metrics? Brand guidelines for creators?
              </div>
            </div>
          </div>
        </div>

        <div className='fireside-section'>
          <div className='gray-gradient-bg'>              
          <div className='p5' style={{paddingTop: '3vh', paddingLeft: '10%', paddingRight: '10%'}}>
          Findings from the fireside chat
          </div>
          <div className='p4' style={{paddingLeft: '10%', paddingRight: '10%'}}>
            At the fireside chat, we got to connect with product managers from industry leaders such as Apple, D2L and Shopify. I gained 
            valuable insights into the work they do, how they tackle project assignments and the tips that guided them in the role.
            <p>
            This was an incredibly motivating discussion for me and a turning point in the day, as we finally realized the idea we 
            needed to pursue.</p>
            </div>
          </div>
          <div className=''>
            <Quote quote="We want a solution that improves the communication time, advocates for influencers, and is easily integrated into current infrastructure." name="Vidyut Ghuwalewala" description="social currant co-founder"/>
          </div>
        </div>
      </div>

      {/* Design */}
      <div id='design' className='section'>
        <Label label='Design'/>
        <div className='two-step'>
        </div>
        <div className='gray-gradient-bg'>
          <div className='three-step'>
            <div className='gray-bg'>
              <div className='p5-white'>
                1. <br/><br/>reducing the negotation time
              </div>
              <div className='p1'>
                We tackle the negotiation process, our identified bottleneck. This improves the overall time 
              that it takes for brands to get their desired  result of the campaign. 
              </div>
            </div>
            <div className='gray-bg'>
              <div className='p5-white'>
                2.<br/><br/>by transparency and standardization
              </div>
              <div className='p1'>
                We foster transparency between what the brand wants and what the influencer can do. This 
                reconciles the expectations for both parties.
              </div>
            </div>
            <div className='gray-bg'>
              <div className='p5-white'>
                3.<br/><br/>through matchbox!
              </div>
              <div className='p1'>
              We build a "matchbox" - a standardized communication template from brands to the influencers with the goal to easily quickly communicate needs between both parties.
              </div>
            </div>
          </div>
          <div className='three-step-animation' style={{padding: '5vh'}}>
            <div className='horizontal-line'></div>
          </div>
        </div>
        <div className='design-process'>
        </div>
      </div>

      {/* Prototypes */}
      <div className='fixed2'></div>
      <div id='prototypes' className='section' style={{backgroundColor: 'transparent'}}>
        <Label label='Prototype'/>
        <div className='prototypes'>
          </div>
      </div>

      {/* KPI */}
      <div id='kpi' className='section'>
        <Label label='Key Performance Indicators'/>
      </div>

      {/* Reflection */}
      <div className='fixedbgd'></div>
      <div id='reflection' className='section'  style={{backgroundColor: 'transparent'}}>
        <div className='gray-gradient-bg'>
        <Label label='Reflection'/>
        </div>
      </div>
    </>
  )
}
export default TradeBookerPage;