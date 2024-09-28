import React, { useContext } from "react";

import { Context } from '../context';
import { useRouter } from 'next/router';

export default function Auth() {

  const { setUsername, setSecret } = useContext(Context);
  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <div className="auth-title">
          NextJs Chat
        </div>
        <div className="input-container">
          <input placeholder="Email" className="text-input" onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="input-container">
          <input placeholder="Password" className="text-input" type="password" onChange={e => setSecret(e.target.value)} />
        </div>

        <button type="submit" className="submit-button">Login / Sing Up</button>
      </form>
    </div>
  </div>;
}
