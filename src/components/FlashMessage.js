import React from "react";
const FlashMessage = props => {
  return (
    props.flashMessage && (
      <>
        <p>{props.duo} is already selected</p>
      </>
    )
  );
};
export default FlashMessage;
