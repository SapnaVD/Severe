import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import Navigation from "./Components/Navigation";
import BookMarkItems from "./Components/BookMarkItems";
import BookMarkForm from "./Components/BookMarkForm";
import DUMMY from "./Data/items";
import EditForm from "./Components/EditForm";

function App() {
  const [DUMMY_ITEMS, SETDUMMY_ITEMS] = useState(DUMMY);

  const addData = (reqData) => {
    const [title, description] = reqData;

    SETDUMMY_ITEMS((prevItems) => [
      ...prevItems,
      {
        id: DUMMY_ITEMS.length + 1,
        title,
        description,
        succeed: false,
      },
    ]);
  };

  const idGetter = (id) => {
    let newArray = [...DUMMY_ITEMS];
    newArray.forEach((item) => {
      if (item.id === id) {
        item.succeed = !item.succeed;
      }
    });
    SETDUMMY_ITEMS(newArray);
  };

  const deleteId = (id) => {
    let newArray = [...DUMMY_ITEMS];
    const value = newArray.find((item) => item.id === id);
    const index = newArray.indexOf(value);
    newArray.splice(index, 1);
    newArray.forEach((item) => {
      const indexValue = newArray.indexOf(item);
      item.id = indexValue + 1;
    });
    SETDUMMY_ITEMS(newArray);
  };

  const editData = (info) => {
    const [title, description, id] = info;

    const newArray = [...DUMMY_ITEMS];
    newArray.forEach((item) => {
      if (item.id === id) {
        item.title = title;
        item.description = description;
      }
    });
    SETDUMMY_ITEMS(newArray);
  };

  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <Redirect to="/bookmarks" />
      </Route>
      <Route path="/addbookmark" exact>
        <BookMarkForm addData={addData} />
      </Route>
      <Route path="/bookmarks" exact>
        <BookMarkItems
          DUMMY_ITEMS={DUMMY_ITEMS}
          idGetter={idGetter}
          deleteId={deleteId}
        />
      </Route>
      <Route path="/edit" exact>
        <EditForm editData={editData} />
      </Route>
    </div>
  );
}

export default App;
