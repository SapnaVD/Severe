import React from "react";

import Bookmark from "./Bookmark";

const BookMarkItems = (props) => {
  const successHandler = (reqData) => {
    props.idGetter(reqData);
  };

  const deleteHandler = (dataReq) => {
    props.deleteId(dataReq);
  };

  return props.DUMMY_ITEMS.map((item) => (
    <Bookmark
      title={item.title}
      description={item.description}
      succeed={item.succeed}
      id={item.id}
      successHandler={successHandler}
      deleteHandler={deleteHandler}
    />
  ));
};

export default BookMarkItems;
