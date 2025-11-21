import React, {useState} from 'react';

export default function SubmissionDashboard(){
  const [rows, setRows] = useState([]);

  function addDummy(){
    const next = {id: Date.now(), student:'New Student', grade:10, paper:'P1', status:'Complete', score: Math.floor(Math.random()*40)+60};
    setRows(r=> [next, ...r]);
  }

  function clearAll(){ if(window.confirm('Clear all submissions?')){ setRows([]); } }

  return (
    <section>
      <div className='container'>
        <h2>Submission Dashboard</h2>
        <p className='muted'>This is a data-free demo build. No submissions are stored or preloaded.</p>
        <div className='toolbar'>
          <button className='btn' onClick={addDummy}>Add Dummy (temporary)</button>
          <button className='btn ghost' onClick={clearAll}>Clear All</button>
        </div>
        <table className='table'>
          <thead><tr><th>ID</th><th>Student</th><th>Grade</th><th>Paper</th><th>Status</th><th>Score</th></tr></thead>
          <tbody>
            {rows.map(r=> <tr key={r.id}><td>{r.id}</td><td>{r.student}</td><td>{r.grade}</td><td>{r.paper}</td><td>{r.status}</td><td>{r.score ?? '-'}</td></tr>)}
          </tbody>
        </table>
      </div>
    </section>
  );
}