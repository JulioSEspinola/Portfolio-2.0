import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Award from '@mui/icons-material/EmojiEvents';
import Volunteer from '@mui/icons-material/VolunteerActivism';
import '../styles/Experience.css';

const isActive = false;

function Experience() {
  return (
    <>
      {isActive ? (
        <div className='experience'>
          <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="date-color"
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
              <ul>
                <li>
                  Designed and presented a social justice-related project to the intern and trainer team.
                </li>
                <li>
                  Pair programmed using practices like TDD, SOLID, OOP, and Agile fundamentals.
                </li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="date-color"
              date='April 2021'
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Innovation Jam Hackathon - Hackworks
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Remote
              </h4>
              <ul>
                <li>Participated in a group to develop a mobile application for older adults.</li>
                <li>Contributed to software design requirements.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Add more VerticalTimelineElement items here */}

            <VerticalTimelineElement 
              className="vertical-timeline-element--education"
              dateClassName="date-color"
              date="2020 - 2023"
              iconStyle={{ background: "#3e497a", color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Central Washington University
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor's Degree
              </h4>
              <p>Computer Science</p>
            </VerticalTimelineElement>

            {/* More education, awards, volunteer experiences */}
          </VerticalTimeline>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Experience;
