import React from "react";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <>
    <div className="Timeline">

<div className="table-wrapper">
    <table className="t1">
        <tbody>
            <tr>
                <td style={{backgroundColor: '#1E1E1E', opacity: '100%'}}>01 research</td>
                <table className="t2">
                    <tr>
                        <td style={{backgroundColor: '#1E1E1E', opacity: '100%', padding: '10px 20px', fontSize: '1.5vh'}}>Kickoff</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>User interview planning</td>
                        <td style={{backgroundColor: '#3b3b3b', opacity: '100%', animation: 'none'}}>User interviews</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{backgroundColor: '#3b3b3b', opacity: '100%', animation: 'none'}}>User interviews</td>
                        <td style={{backgroundColor: '#4d4d4d', opacity: '100%', animation: 'none'}}>Fireside chat with co-founder</td>
                        <td></td>
                    </tr>
                </table>
            </tr>
            <tr>
                <td style={{backgroundColor: '#1E1E1E', opacity: '100%'}}>02 strategy</td>
                <table className="t2">
                    <tr>
                        <td style={{backgroundColor: '#1E1E1E', opacity: '100%', padding: '10px 20px', fontSize: '1.5vh'}}>divide roles</td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>identify opportunities and constraints</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>ideation and iteration for ideas</td>
                        <td style={{backgroundColor: '#3b3b3b', opacity: '100%', animation: 'none'}}>develop core proposal</td>
                        <td style={{backgroundColor: '#4d4d4d', opacity: '100%', animation: 'none'}}>set performance metrics/goals</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{backgroundColor: '#5c5c5c', opacity: '100%', animation: 'none'}}>finalize report for review</td>
                    </tr>
                </table>
            </tr>
            <tr>
                <td style={{backgroundColor: '#1E1E1E', opacity: '100%'}}>03 design</td>
                <table className="t2">
                    <tr>
                        <td style={{backgroundColor: '#1E1E1E', opacity: '100%', padding: '10px 20px', fontSize: '1.5vh'}}>develop design concepts</td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>explore delivery formats</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>prototype design concept</td>
                        <td style={{backgroundColor: '#3b3b3b', opacity: '100%', animation: 'none'}}>user interviews</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{backgroundColor: '#3b3b3b', opacity: '100%', animation: 'none'}}>usability testing</td>
                        <td style={{backgroundColor: '#4d4d4d', opacity: '100%', animation: 'none'}}>refine designs and export</td>
                        <td></td>
                    </tr>
                </table>
            </tr>
            <tr>
                <td style={{backgroundColor: '#1E1E1E', opacity: '100%'}}>04 delivery</td>
                <table className="t2">
                    <tr>
                        <td style={{backgroundColor: '#1E1E1E', opacity: '100%', padding: '10px 20px', fontSize: '1.5vh'}}>Final design refinement</td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>build presentation</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{backgroundColor: '#2b2b2b', opacity: '100%', animation: 'none'}}>practice</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{backgroundColor: '#3b3b3b', opacity: '100%', animation: 'none'}}>final presentation</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </tr>
        </tbody>
    </table>
</div>
      </div>
    </>
  )
};

const TimelineTimeline = () => {

  return (
    <>
    <div className="timeline">
      <div className="line"></div>
      <div className="timeline-text">benchmark</div>
      <div className="line"></div>
    </div>
    </>
  )

}

export default Timeline;