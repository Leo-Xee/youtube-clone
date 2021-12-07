import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router';

function LandingPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/').then((res) => console.log(res));
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser()).then((res) => {
      if (res.payload.success) {
        props.history.push('/login');
      } else {
        alert('Failed to logout');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>시작 페이지</h1>
      <br />
      <button onClick={onClickHandler}>Log out</button>
    </div>
  );
}

export default withRouter(LandingPage);
