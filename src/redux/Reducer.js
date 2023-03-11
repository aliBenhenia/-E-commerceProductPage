import React from 'react'
const intialState = {c : 0};
export default function Reducer(state = intialState,action) {
  if (action.type == "ADD")
  {
        return (action.pyload);
  }
  else if (action.type == "RM")
  {
    console.log("fffffff")
        return ({c : 0});
  }
}
