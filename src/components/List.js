import React from "react";
const List = props => {
  const handleClick = e => {
    props.setDisplay(true);
    const clickedOption = e.target.textContent;
    console.log(props.duo);
    props.setControlList(prev => {
      props.setFlashMessage(false);
      return prev.concat(clickedOption);
    });

    // State of the App
    console.log(props.controlList);
    props.setState(prev => {
      return prev.filter(obj => {
        return (
          obj.role === clickedOption ||
          obj.level === clickedOption ||
          obj.languages.includes(clickedOption) ||
          obj.tools.includes(clickedOption)
        );
      });
    });
  };
  return (
    <div className="list">
      {props.state.map(state => {
        return (
          <div className="list-item">
            <div className="list_data">
              <div className="list_data-img margin-right-meduim">
                <img src={state.logo} alt="" className="list--img " />
              </div>
              <div className="list_data-detail">
                <div className="detail_row-1">
                  <ul className="detail_row-1-top">
                    <li className="comp-name margin-right-small">
                      <span>{state.company}</span>
                    </li>
                    {state.new && (
                      <button className="new margin-right-small">
                        <span>NEW!</span>
                      </button>
                    )}
                    {state.featured && (
                      <button className="featured margin-right-small">
                        <span>FEATURED</span>
                      </button>
                    )}
                  </ul>

                  <div className="detail_row-1-role">
                    <span>{state.position}</span>
                  </div>
                  <ul className="detail_row-1-bottom">
                    <li className="posted-at">
                      <span>{state.postedAt}</span>
                    </li>
                    <li className="contract">
                      <span>{state.contract}</span>
                    </li>
                    <li className="location">
                      <span>{state.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="list_job">
              <ul className="list_job-list" onClick={handleClick}>
                <li
                  className="list_job-list-item margin-right-meduim"
                  id="role"
                  vlaue="role"
                >
                  <span>{state.role}</span>{" "}
                </li>

                <li
                  className="list_job-list-item margin-right-meduim"
                  id="level"
                >
                  {state.level}
                </li>
                {/* map */}
                {state.languages.map(key => {
                  return (
                    <li className="list_job-list-item margin-right-meduim">
                      <span>{key}</span>
                    </li>
                  );
                })}
                {state.tools.map(key => {
                  return (
                    <li className="list_job-list-item margin-right-meduim">
                      <span>{key}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
