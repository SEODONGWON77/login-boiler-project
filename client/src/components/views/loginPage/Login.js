import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MapContextProvider } from '../../../contexts/map_context';
import { ApplicationContextProvider } from '../../../contexts/weatherAndMap_context';
import { loginUser } from '../../../_actions/user_actions';
import MapContainer from '../kakaoMap/MapContainer';
import MapStoreList from '../kakaoMap/MapStoreList';
import SearchBox from '../landingPage/SearchBox';
import Weather from '../landingPage/Weather';

function Login(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (e) => setEmail(e.currentTarget.value);
  const onPasswordHandler = (e) => setPassword(e.currentTarget.value);

  const onSubmitHandler = (e) => {
    e.preventDefault(); //login버튼 클릭했을때 페이지가 refresh 되는것을 막음

    let data = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(data)) //dispatch로 액션을 요청(user_action.js의 loginUser() 함수 호출)
      .then((response) => {
        //reducer 리턴 후 분기
        if (response.payload.loginSuccess) {
          props.history.push('/');
        } else {
          alert('Login error');
        }
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%,',
        height: '50vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <lable>Email</lable>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <lable>Password</lable>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
      <ApplicationContextProvider>
        <MapContextProvider>
          <MapStoreList />
          <MapContainer />
        </MapContextProvider>
        <SearchBox />
        <Weather />
      </ApplicationContextProvider>
    </div>
  );
}

export default Login;
