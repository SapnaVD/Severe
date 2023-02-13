import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useRef } from "react";

import classes from "./EditForm.module.css";

const EditForm = (props) => {
  const inputTitle = useRef();
  const inputDescription = useRef();

  const history = useHistory();
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    props.editData([
      inputTitle.current.value,
      inputDescription.current.value,
      location.state.id,
    ]);
    history.push("/");
  };

  return (
    <div>
      <form className={classes.formLayout} onSubmit={submitHandler}>
        <label htmlFor="fname" className={classes.heading}>
          TITLE
        </label>
        <input
          type="text"
          id="title"
          name="fname"
          defaultValue={location.state.title}
          ref={inputTitle}
          className={classes.inputArea}
        />
        <label htmlFor="fname" className={classes.heading}>
          DESCRIPTION
        </label>
        <input
          type="text"
          id="description"
          name="fname"
          defaultValue={location.state.description}
          ref={inputDescription}
          className={classes.inputArea}
        />
        <button className={classes.btn} type="submit">
          EDIT BOOKMARK
        </button>
      </form>
    </div>
  );
};

export default EditForm;
