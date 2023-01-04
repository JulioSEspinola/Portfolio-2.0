import { color } from '@mui/system';
import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
// import '../styles/Experience.css';


function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor="#3e497a"> 
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2020 - 2023'
          iconStyle={{background : "#3e497a",color: '#ffff'}}
          icon={<SchoolIcon/>}
          >

            <h3 className='verical-timeline-element-tittle'>
              Central Washington University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Computer Science</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            South Seattle College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Associate of Science
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>



          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date='Jun 2021 - Aug 2021'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - ThoughtWorks
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chicago, IL
          </h4>
          <p>Developed the backend infrastructure for Web Application.</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience
