import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
        className="header__logo"
        alt="tinder__logo"
      />

      <IconButton>
        <QuestionAnswerIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
