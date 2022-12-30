import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { useLocation ,useNavigate } from "react-router-dom";
// if  user not login then render this page on the DOM
//else allow to login singlePafe
const CheckAuth = ({ children }) => {

  const { isAuth } = useSelector((store) => store.AuthReducer);
     const location = useLocation();
      console.log("isAuthLocation",location);



// isAuth -->true
  if (!isAuth) {
    //login Page
    return <Navigate to="/login" state={{from : location}}  replace />;
  }

  return children;
};

export default CheckAuth;
