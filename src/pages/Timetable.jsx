import React from 'react';
export default function Timetable(){
  const slots = [
    {day:'Monday', time:'08:00 - 09:30', subject:'Physical Sciences - Grade 10'},
    {day:'Wednesday', time:'10:00 - 11:30', subject:'Practical Lab Session'},
    {day:'Friday', time:'09:00 - 10:00', subject:'Marking & Admin'}
  ];
  return (
    <section>
      <div className='container'>
        <h2>Timetable</h2>
        <table className='table'>
          <thead><tr><th>Day</th><th>Time</th><th>Subject</th></tr></thead>
          <tbody>
            {slots.map(s=> <tr key={s.day}><td>{s.day}</td><td>{s.time}</td><td>{s.subject}</td></tr>)}
          </tbody>
        </table>
      </div>
    </section>
  );
}
