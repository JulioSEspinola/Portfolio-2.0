import { color } from '@mui/system';
import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Award from '@mui/icons-material/EmojiEvents';
import Volunteer from '@mui/icons-material/VolunteerActivism';
import '../styles/Experience.css';


function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor="#3e497a">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={ "date-color"}
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
          Designed and presented a social justice related project to the intern and
          trainer team to be implemented throughout the internship.
          
          </li>
          
          <li>
          Pair programmed with other interns for the implementation of a social justice
          related project using practices such as Test-Driven Development, SOLID principles, Object Oriented design, and Agile fundamentals.


          </li>
         </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={ "date-color"}
          date='April 5th, 2021 - April 23rd, 2021'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Innovation Jam Hackathon - Hackworks Hackathons
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>

          <ul>
            <li>Participated as a Software Developer in a group of five members to develop a
              mobile application that would help older adults to stay independent, keep treatable health 
              issues in check and identify new risks early, as well as sustain relationships with loved ones 
              to maintain a good mental health.
            </li>

            <li>
              Contributed to the development of the software design requirements
            </li>
          </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={ "date-color"}
          date='September 2020 – June 2021'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Technical Attendant - Central Washington University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ellensburg, WA
          </h4>

          <ul>
            <li>
              Maintained the CWU Online learning website
            </li>

            <li>
              Held workshops to teach students about the use of diverse academic software
              such as Canvas, Blackboard Ultra, and Microsoft products.
            </li>
          </ul>
        </VerticalTimelineElement>






        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={ "date-color"}
          date='September 2020 – June 2021'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Wildcat Code Programmer - Central Washington University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ellensburg, WA
          </h4>

          <ul>
            <li>
            Developed Computer Science curriculums to teach Middle School students
            from historically marginalized communities, basic Computer Science fundamentals with the use of Micro:bits, Ozobots, and Code.org.
            </li>
          </ul>
        </VerticalTimelineElement>





          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          dateClassName={ "date-color"}
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
          dateClassName={ "date-color"}
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
          className="vertical-timeline-element--education"
          dateClassName={ "date-color"}
          date="2018 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Award/>}
        >
          <h3 className="vertical-timeline-element-title">
          Washington State Opportunity Scholarship
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Associate of Science
          </h4> */}
          <p> Received and maintained a STEM based scholarship awarded to only 100 recipients in the entire state</p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName={ "date-color"}
          date="2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Volunteer/>}
        >
          <h3 className="vertical-timeline-element-title">
          Chair of South Seattle College Student and Activities Committee
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Associate of Science
          </h4> */}
          <p> Oversaw the distribution of $900,000 funds for activities promoting diversity, civic engagement, and the overall success of students on-campus.</p>
          </VerticalTimelineElement>



          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName={ "date-color"}
          date="September 25, 2021, June 20, 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Volunteer/>}
        >
          <h3 className="vertical-timeline-element-title">
          Tech Fee Committee Member at Central Washington University
          </h3>
          <p> Volunteered as a student representative to help allocate student funds for any technological need that the students might have.</p>
          </VerticalTimelineElement>


        </VerticalTimeline>
    </div>
  )
}

export default Experience
