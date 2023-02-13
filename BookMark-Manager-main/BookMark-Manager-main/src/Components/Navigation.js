import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.navlay}>
      <div className={classes.navleft}>
        <h1 className={classes.navhead}>BookMark Manager</h1>
      </div>
      <div className={classes.navright}>
        <h2>
          <Link to="/">
            <button className={classes.btnstyle}>All Bookmark</button>
          </Link>
        </h2>
        <h2>
          <Link to="/addbookmark">
            <button className={classes.btnstyle}>Add Bookmark</button>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Navigation;
