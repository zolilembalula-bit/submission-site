import React from 'react';
export default function Resources(){
  const resources = [
    {id:1, title:'Electromagnetism Diagrams (PDF)', link:'#'},
    {id:2, title:'Five-week Lesson Plan (DOCX)', link:'#'},
    {id:3, title:'Experiment Worksheets Pack', link:'#'}
  ];
  return (
    <section>
      <div className='container'>
        <h2>Resources</h2>
        <ul>
          {resources.map(r=> <li key={r.id}><a href={r.link}>{r.title}</a></li>)}
        </ul>
      </div>
    </section>
  );
}
