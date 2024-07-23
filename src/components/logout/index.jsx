import React from "react";
import "./index.css";
import { logoutUser } from "../../services/logoutUser.api";
import { useNavigate } from "react-router";
import { getUser } from "../../services/getUser.api";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../store/loginSlice";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    const result = await logoutUser();
    localStorage.setItem("islogin", false);

    if (result?.status === 200) {
      const _id = localStorage.getItem("userID");

      const resultInfo = await getUser({ _id });

      if (resultInfo?.status === 200) {
        dispatch(addUserInfo(resultInfo?.userInfo));
      }
    }
    navigate("/Login");
  };

  return (
    <div className="LogoutContainner">
      <button onClick={() => handleLogOut()}>Logout</button>
    </div>
  );
};

export default LogOut;
