import React from "react";
import data from "../data";

const ControlList = props => {
  const handleClick = e => {
    if (e.target.value === "clickable") {
      console.log("here");
      const clicked = e.target.firstChild.textContent;

      props.setControlList(prev => {
        return prev.filter(elem => {
          return elem !== clicked;
        });
      });
      console.log(props.controlList);
      let newArray = props.controlList.filter(ele => ele !== clicked);
      console.log(newArray);

      props.setState(prev => {
        if (props.controlList.length === 1) {
          props.setDisplay(false);
          return (prev = data);
        } else {
          console.log("here");
          return data.filter(obj => {
            return (
              newArray.includes(obj.role) ||
              newArray.includes(obj.level) ||
              newArray.some(r => obj.languages.includes(r)) ||
              newArray.some(r => obj.tools.includes(r))
            );
          });
        }
      });
    }
  };

  return (
    <div className="control-list-wrapper">
      <div className="control-list">
        {props.controlList.map(key => {
          return (
            <div className="control-list-name" onClick={handleClick}>
              <>
                <li className="control-list-item">{key}</li>
                <li className="control-list-cross" value="clickable">
                  X
                </li>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ControlList;
