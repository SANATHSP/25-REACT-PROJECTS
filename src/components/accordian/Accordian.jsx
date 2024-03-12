import React, { useState } from "react";
import data from "./data";
import "./accordian.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleselection, setMultipleselection] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(selected);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultipleSelection = [...multipleselection];
    const findIndexOfCurrentId = copyMultipleSelection.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    findIndexOfCurrentId === -1
      ? copyMultipleSelection.push(getCurrentId)
      : copyMultipleSelection.splice(findIndexOfCurrentId, 1);

    setMultipleselection(copyMultipleSelection);

    console.log(selected, multipleselection);
  };

  return (
    <div className="wrapper">
      {/* turn true or false for enable multiple selction button */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi selection
      </button>
      <div className="accordian">
        {
          // checking if data is empty and conditionally render the data
          data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                {/* allowing to open the answer when clicking on the title(question) */}
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {/* check if the selected state has the value of the id and conditionally render the answer */}
                {enableMultiSelection
                  ? multipleselection.indexOf(dataItem.id) !== -1 && (
                      <div className="content">
                        <h3>{dataItem.answer}</h3>
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                multipleselection.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">
                    <h3>{dataItem.answer}</h3>
                  </div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>No data present</div>
          )
        }
      </div>
    </div>
  );
};

export default Accordian;
