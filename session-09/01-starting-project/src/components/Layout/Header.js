import React from "react";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

//import를 이용해서 이미지를 불러온다.
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return <React.Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="table many foods"/>
    </div>
  </React.Fragment>;
};

export default Header;
