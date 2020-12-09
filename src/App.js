import React, { useEffect, useState } from "react";
import ControlList from "./components/ControlList";
import FlashMessage from "./components/FlashMessage";
import List from "./components/List";

// import JobList from "./components/JobList";
// import Axios from 'axios'
// import Image from "./images/";
import data from "./data";

const App = () => {
  const [state, setState] = useState(data);
  const [controlList, setControlList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [flashMessage, setFlashMessage] = useState(false);
  let duo = controlList[controlList.length - 1];
  console.log(duo);

  return (
    <div className="container">
      <div className="container_header">
        <FlashMessage duo={duo} flashMessage={flashMessage} />
      </div>

      {display && (
        <ControlList
          state={state}
          controlList={controlList}
          setControlList={setControlList}
          setState={setState}
          setDisplay={setDisplay}
        />
      )}

      <List
        state={state}
        setState={setState}
        setControlList={setControlList}
        setFlashMessage={setFlashMessage}
        controlList={controlList}
        duo={duo}
        setDisplay={setDisplay}
      />
    </div>
  );
};
export default App;
