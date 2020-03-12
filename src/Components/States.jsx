import React from "react";
import data from "./states_hash.json";
const states = data.statesHash;

const States = () => {
  return (
    <>
      <option key={`first-1`} value="">
        -Pick a State
      </option>
      {Object.keys(states).map((keyName, i) => {
        return (
          <option
            name={states[keyName]}
            value={keyName}
            key={`${i}- ${keyName}`}
          >
            {states[keyName]}
          </option>
        );
      })}
    </>
  );
};

export default States;
