import React, { useEffect } from 'react';
import axios from 'axios';

export default function LandingPage() {
  useEffect(() => {
    axios.get('/').then((res) => console.log(res));
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>시작 페이지</h1>
    </div>
  );
}
