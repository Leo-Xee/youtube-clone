import React, { useEffect } from 'react';
import axios from 'axios';

export default function LandingPage() {
  useEffect(() => {
    axios.get('http://localhost:5000/').then((res) => console.log(res));
  }, []);
  return <div>LandingPage</div>;
}
