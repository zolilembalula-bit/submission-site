import React from 'react';
export default function Projects(){
  const items = [
    {id:1, title:'Submission Portal', desc:'A lightweight portal to collect and track student submissions.'},
    {id:2, title:'Physics Diagrams Pack', desc:'PDFs & diagrams for electromagnetism and optics.'},
    {id:3, title:'Lesson Planner', desc:'Five-week structured lesson plans for Grade 10 Physical Sciences.'}
  ];
  return (
    <section>
      <div className='container'>
        <h2>Projects</h2>
        <div className='grid'>
          {items.map(i=>(
            <div className='card' key={i.id}>
              <h4>{i.title}</h4>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
