import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/user_action';

export default function auth(SpecificComponent, option, adminRoute = null) {
  /**
   * option
   * null: 아무나 출입 가능한 페이지
   * true: 로그인한 유저만 출입 가능한 페이지
   * false: 로그인한 유저는 출입이 불가한 페이지
   *
   * adminRoute
   * true: 관리자만 출입 가능한 페이지
   */

  function AuthenicationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((res) => {
        console.log(res);
        // 로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            if (option === false) {
              props.history.push('/');
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenicationCheck;
}
