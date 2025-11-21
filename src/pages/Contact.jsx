import React, {useState} from 'react';
export default function Contact(){
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  function submit(e){ e.preventDefault(); setSent(true); setMsg(''); }
  return (
    <section>
      <div className='container small'>
        <h2>Contact</h2>
        {sent ? <div className='card'>Thanks — I'll get back to you.</div> : (
          <form onSubmit={submit}>
            <label>Message<textarea value={msg} onChange={e=>setMsg(e.target.value)} required/></label>
            <div className='actions'><button className='btn' type='submit'>Send</button></div>
          </form>
        )}
      </div>
    </section>
  );
}
