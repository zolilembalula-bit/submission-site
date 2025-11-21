import React, {useState} from 'react';
import { useLocation } from 'wouter';

export default function Register(){
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e){
    e.preventDefault();
    // Data-free: do not store registration details. Redirect to login.
    setLocation('/login');
  }

  return (
    <section className='auth'>
      <div className='container small'>
        <h2>Register (Demo)</h2>
        <form onSubmit={submit}>
          <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
          <label>Password<input type='password' value={password} onChange={e=>setPassword(e.target.value)} required/></label>
          <div className='actions'><button className='btn' type='submit'>Create account</button></div>
        </form>
        <p className='muted'>This demo does not save registration data.</p>
      </div>
    </section>
  );
}