import React, {useState} from 'react';
import { useLocation } from 'wouter';

export default function Login(){
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e){
    e.preventDefault();
    // Data-free demo: do not store credentials. Proceed to dashboard as demo mode.
    setLocation('/dashboard');
  }

  return (
    <section className='auth'>
      <div className='container small'>
        <h2>Login (Demo)</h2>
        <form onSubmit={submit}>
          <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
          <label>Password<input type='password' value={password} onChange={e=>setPassword(e.target.value)} required/></label>
          <div className='actions'><button className='btn' type='submit'>Sign in</button></div>
        </form>
        <p className='muted'>This demo does not store login data.</p>
      </div>
    </section>
  );
}