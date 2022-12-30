import React, { useState } from "react";
import { useDispatch ,useSelector } from "react-redux/es/exports";
import { login } from "../AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../AuthReducer/actionType";

import {useNavigate , useLocation} from "react-router-dom";

const Login = () => {
const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation()
  console.log("loginLocation",location);

  const {isAuth} = useSelector(state => state.AuthReducer)
     console.log("isAuth",isAuth)
    const pathComingFrom = location.state?.from?.pathname || "/"
         console.log(pathComingFrom)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password }))
        .then((r) => {
          if (r.type === USER_LOGIN_SUCCESS) {
            navigate(pathComingFrom , {replace : true})
          }
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
