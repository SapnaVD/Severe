import React, { Fragment } from "react";
import { FaRegTrashAlt, FaCheck, FaTimes, FaPen } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import classes from "./Bookmark.module.css";

const Bookmark = (props) => {
  const history = useHistory();

  const iconHandler = () => {
    props.successHandler(props.id);
  };

  const deleteHandler = () => {
    props.deleteHandler(props.id);
  };

  const editHandler = () => {
    history.push({
      pathname: "/edit",
      state: {
        id: props.id,
        title: props.title,
        description: props.description,
      },
    });
  };

  return (
    <Fragment>
      <div
        className={`${classes.layout} ${props.succeed ? classes.success : ``}`}
      >
        <FaRegTrashAlt className={classes.icon1} onClick={deleteHandler} />
        {!props.succeed ? (
          <FaCheck className={classes.icon2} onClick={iconHandler} />
        ) : (
          <FaTimes className={classes.icon3} onClick={iconHandler} />
        )}

        <FaPen className={classes.icon4} onClick={editHandler} />
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.description}>{props.description}</p>
      </div>
    </Fragment>
  );
};

export default Bookmark;
