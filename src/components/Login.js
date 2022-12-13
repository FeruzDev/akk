import React, {useState} from "react";
import axios from "axios";
import {API_APTH} from "../tools/Const";
import {useHistory} from "react-router-dom";
const Login = () => {
    const [myTabs, setMyTabs] = useState(true)
    let history = useHistory()
    const login = (event, value) => {
        axios.post(API_APTH  + "auth/token/login/",
                {
                    "password": document.getElementById("password").value,
                    "username": document.getElementById("username").value,
                     }
                )
            .then(res =>
            {
               localStorage.setItem("auth_token", res.data.auth_token)
                history.push("add-employee")
            })
    }
  return (
    <div className="login-page">
      <div className="my-form">
      <div className="my-tabs-list">
          <button onClick={() => setMyTabs(true)} className={myTabs ? "my-tabs my-tabs-active" : "my-tabs"}>One ID</button>
          <button onClick={() => setMyTabs(false)} className={myTabs ? "my-tabs" : "my-tabs my-tabs-active"}>Авторизация</button>
      </div>
          {
              myTabs
              ?
                  <div className="for-one-id">
                      <h2>Вход в систему</h2>
                      <a href="https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=e_akkred_uz&redirect_uri=http://192.168.0.54:3000/users/one_id/&Scope=auth-reg&state=code">Зайти с помощью OneID</a>
                  </div>
                  :
                  <div className="for-username" >
                      <div className="forms">
                          <label htmlFor="username">Имя пользователя</label>
                          <input id="username"/>
                      </div>
                      <div className="forms">
                          <label htmlFor="password">Пароль</label>
                          <input id="password" type="password"/>
                      </div>
                      <button  type='submit' onClick={login} className="submit-btn">
                          Войти
                      </button>
                  </div>
                  // <div className="for-username">
                  //     <div className="forms">
                  //         <label htmlFor="username">Имя пользователя</label>
                  //         <input id="username"/>
                  //     </div>
                  //     <div className="forms">
                  //         <label htmlFor="password">Пароль</label>
                  //         <input id="password" type="password"/>
                  //     </div>
                  //     <button  onClick={login} className="submit-btn">
                  //         Войти
                  //     </button>
                  // </div>
          }
      </div>
    </div>
  );
};

export default Login;
