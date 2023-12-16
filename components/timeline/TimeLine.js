'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const TimeLine = ({data}) => {
 return (
   <VerticalTimeline>
       {data.map((item, index) => (
           <VerticalTimelineElement
               key={index}
               className="vertical-timeline-element--work"
               contentStyle={{ background: 'rgb(240, 239, 231)', color: '#000' }}
               contentArrowStyle={{ borderRight: '7px solid  rgb(240, 239, 231)' }}
               date={item.date}
               iconStyle={{ background: 'rgb(150, 140, 134)', color: '#444' }}
                visible
           >
               <h4 className="vertical-timeline-element-title">{item.text}</h4>

           </VerticalTimelineElement >
           ))}

       <VerticalTimelineElement visible iconStyle={{ background: 'rgb(50, 82, 99)', color: '#444' }}/>
   </VerticalTimeline>
 );
};

export default TimeLine;