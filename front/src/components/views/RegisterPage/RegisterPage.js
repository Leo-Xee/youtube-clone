import React from 'react';
import { useState } from 'react';

export default function RegisterPage() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordConfirm, setPasswordConfirm] = useState('');

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onPasswordConfirmHandler = (e) => {
    setPasswordConfirm(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Email, Password);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler}></input>
        <br />
        <label>Email</label>
        <input type="text" value={Email} onChange={onEmailHandler}></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        ></input>
        <br />
        <label>PasswordConfirm</label>
        <input
          type="password"
          value={PasswordConfirm}
          onChange={onPasswordConfirmHandler}
        ></input>
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
