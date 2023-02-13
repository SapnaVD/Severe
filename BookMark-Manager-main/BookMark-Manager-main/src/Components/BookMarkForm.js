import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

import classes from "./BookMarkForm.module.css";

const BookMarkForm = (props) => {
  const history = useHistory();
  const inputTitle = useRef();
  const inputDescription = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.addData([inputTitle.current.value, inputDescription.current.value]);
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
          id="fname"
          name="fname"
          ref={inputTitle}
          className={classes.inputArea}
        />
        <label htmlFor="fname" className={classes.heading}>
          DESCRIPTION
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          ref={inputDescription}
          className={classes.inputArea}
        />
        <button className={classes.btn} type="submit">
          ADD BOOKMARK
        </button>
      </form>
    </div>
  );
};

export default BookMarkForm;
