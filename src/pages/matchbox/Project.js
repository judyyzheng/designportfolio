import React from 'react';
import './Project.scss';
import { HashLink } from 'react-router-hash-link';

// Components
import Navbar from '../Navbar';
import Label from '../../components/Label/Label.tsx';
import Timeline from '../../components/Timeline/Timeline.tsx';
import CircleGraph from '../../components/CircleGraph/CircleGraph.tsx';
import Checklist from '../../components/Checklist/Checklist.tsx';
import Quote from '../../components/Quote/Quote.tsx';

// Assets
import Prototype1 from '../../assets/projects/SocialCurrant/prototype1.svg';
import Prototype2 from '../../assets/projects/SocialCurrant/prototype2.svg';
import Prototype3 from '../../assets/projects/SocialCurrant/prototype3.svg';
import Wireframe from '../../assets/projects/SocialCurrant/wireframe.png';
import FeedbackLoop from '../../assets/projects/SocialCurrant/feedbackloop.png';
import SocialCurrantLogo from '../../assets/projects/SocialCurrant/socialcurrantlogo.svg';
import Fire from '../../assets/projects/SocialCurrant/fire.svg';
import Content1 from '../../assets/projects/SocialCurrant/content1.png';
import Content2 from '../../assets/projects/SocialCurrant/content2.png';
import Content3 from '../../assets/projects/SocialCurrant/content3.png';
import Day1 from '../../assets/projects/SocialCurrant/day1.jpg';
import Day2 from '../../assets/projects/SocialCurrant/day2.jpg';
import Day3 from '../../assets/projects/SocialCurrant/day3.jpg';
import CurrantApp from '../../assets/projects/SocialCurrant/currantapp.png';
import BrandInfluencer from '../../assets/projects/SocialCurrant/brandinfluencer.svg';

function Project() {

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
      <div className='p5'>prodcon2022</div>
      <div className='p3'>UW Product Management<br/> and Social Currant</div>
        <div className='gray-gradient-bg'>
          <Label label='Background'/>
                <div className='p4' style={{paddingLeft: '10%', paddingRight: '10%'}}>
                <div className='side-img' style={{paddingLeft: '0'}}>
                  <div>
                    <div className='p5'> here's an introduction.</div>
                    <p>
                      This year, UW Product Management hosted a product case competition, 
                      partnering with Social Currant to find the best product proposal that resolves one of their
                      biggest organizational bottlenecks.
                    </p>
                    <p>
                      Briefly, Social Currant is a youth-powered media agency in their early startup stages, 
                      building a  patform to connect creators with brands who want to partner 
                      with them for their advertising campaigns.
                    </p>
                  </div>
                  <img src={CurrantApp} style={{height: '60vh', padding: '7vh', width: 'auto'}}></img>
                </div>
                  <div className='side-img'>
                  <img src={Day2} style={{borderRadius: '4vh'}}></img>
                  <div>
                      <div className='p5'>Our team proposed the winning solution.</div>
                      <p>
                      Our team placed first out of over 110 teams with "Matchbox" - an innovative system that is practically implemented with maximum impact
                      on the negotiation time between brands and influencers.
                      </p>
                        <img src={Day1} style={{borderRadius: '4vh', height: '34vh', width: 'auto'}}></img>
                  </div>
                  </div>
                  <div className='p5'>Keep reading</div>
                  <p>
                      to see how we navigated from the problem statement to the final product pitch!
                  </p>
                </div>
            <img src={SocialCurrantLogo} style={{paddingTop: '7vh'}}></img>
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
                  <p>
                  In our research, we pinpointed various areas of shared frustrations and bottlenecks in the campaign agreement process:
                  </p>
                  <p>
                    <b>Negotiation</b> between parties take the longest of the 8 steps. 
                    This results from creative and standard differences, as the brands and influencers 
                  must take multiple steps to bridge their expectations gap. Currently, these communications
                   are completed through emails between the brand, influencer, 
                   and a Social Currant representative. This <b>lack of standardized negotiation</b> is highly
                   inefficient, costly in time and a source of frustration for all parties.
               </p>
                  
                  <p>
                  Influencers want <b>content standardization</b>. Brands want content standardization.</p>

                  <div className='side-img'>
                      <p>
                        In order to pin down where the unnecessary overlaps occur, we aimed to uncover the most 
                        common concerns that both brands and influencers share.
                        They can be summarized into the following five questions:
                        <ul>
                            <li>Who is the audience the campaign should reach?</li>
                            <li>What are the necessary components of the ad?</li>
                            <li>What are the brand guidelines creators must follow?</li>
                            <li>What is the cost?</li>
                            <li>What are the success metrics of the campaign?</li>
                          </ul>
                      </p>
                      <img src={BrandInfluencer} style={{width: '70vh'}}></img>
                  </div>

                  <div className='side-img'>
                      <img src={Content2}></img>
                      <p> Moreover, brands find it difficult to identify the right
                        creators to produce a certain outcome. Despite having a strong understanding of
                        their product, audience, and desired campaign result, brands are inflexible
                        in giving creators the complete marketing freedom to appeal to their viewers. 
                        </p>
                  </div>
                  <p><b>The Overarching Problem:</b> How do we reduce the negotiation time between influencers and brands?</p>
                  
                  <p><b>First iteration:</b> How do we reconcile brand and influencer expectations to produce desired outcomes?</p>

                  <p><b>Second iteration:</b> How do ensure full transparency between brand and influencer in the most efficient way?</p>
                  
                  <p><b>Answer:</b> Require consistent feedback at organized stages.
                  </p>
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
          <div className='white-bg'>
            <div className='p5' >what is the matchbox? </div>
            <div className='p1' style={{color: '#1E1E1E', width: '70vh'}}>
              <p>
              After the brands are matched by the Social Currant algorithm to various influencers, 
              the brands can send out a drag-and-drop template to the influencers with the goal
              to communicate their priority list with any additional comments. 
                The matchbox requirements include defining the priorities of the campaign such as product features,
                social initiatives, donation links and more. Upon receiving the requirements, 
                the influencer can then <b>a)</b> make edits or requests to send back to the brand or <b>b)</b> directly sign the contract.
              </p> 
            </div>
          </div>
          <img src={Prototype1}></img>
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
          <div className='feedbackloop'>
            <div className='p5' style={{color: '#1E1E1E', padding: '0vh', textAlign: 'left'}}>the feedback loop: </div>
            <div className='p1' style={{color: '#1E1E1E', width: '70vh'}}><p>visualize how information is collected, stored and transferred between the brand and the influencer.</p></div>
            <img src={FeedbackLoop}></img>
          </div>
          <div className='wireframe'>
            <div className='p5' style={{color: '#1E1E1E', padding: '0vh', textAlign: 'right'}}>wireframing: </div>
            <div className='p1' style={{color: '#1E1E1E'}}><p>our initial ideas on how our product will be prototyped.</p></div>
            <img src={Wireframe} style={{width: '50%', paddingBottom: '5vh'}}></img>
          </div>
        </div>
      </div>

      {/* Prototypes */}
      <div className='fixed2'></div>
      <div id='prototypes' className='section' style={{backgroundColor: 'transparent'}}>
        <Label label='Prototype'/>
        <div className='prototypes'>
              <img src={Prototype1}></img>
              <img src={Prototype2}></img>
              <img src={Prototype3}></img>
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
                <div className='p4' style={{paddingLeft: '10%', paddingRight: '10%'}}>
                  <div className='p5'>what was your overall experience like?</div>
                  <p>
                  Overall, there was a ton of exciting and motivating energy at ProdCon 2022! 
                  With such a short time span from the release of the case to the final 
                  presentation, everyone had to be very creative, focused and in the zone. 
                  For our team, things definitely got really hectic in the final hour as
                   we were each working on trying to finish a separate component. It was 
                   rewarding to see each of our individual pieces fit together in the final
                    five minutes, and I think it became very visible that we made the 
                    most of everyone’s strengths.
                  </p>
                  <div className='p5'>what struggles did you encounter?</div>
                  <p>A challenge was definitely finding the optimal solution that both met project
                     requirements and was practical to implement. We had to revise and edit our
                      ideas multiple times after gaining a deeper understanding of the organization’s needs,
                       current infrastructure and future outlook in the Q&A. Doing so within such a short
                        time frame was the even bigger challenge, as reorienting our initial plans forced
                         us to condense most of our design and delivery components into the last hours of the day.
                  </p>
                  <div className='p5'>what's a piece of advice you'd take away?</div>
                  <p>
                  Don’t discount yourself or your team! Coming into ProdCon with zero prior PM 
                  experience and also missing half our team due to illness, I definitely felt
                   like the underdog. What it ultimately came down to was pinpointing the strengths
                    of the team and splitting the roles so everybody could bring their best to 
                    the table, whether this was a strong UX/product understanding, Figma design
                     experience or presentation skills! Regardless of your background, it’s 
                     important to remember that your own unique strengths (no matter how 
                     irrelevant they might seem) are incredibly vital and will be a huge 
                     advantage to your team’s success.
                  </p>
                </div>
            <img src={SocialCurrantLogo}></img>
        </div>
      </div>
    </>
  )
}
export default Project;