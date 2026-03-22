import React from 'react';
import "./Spinner.css";

const Spinner = ({color}) => {
  return (
    <div className={`spinner spinner-${color}`}></div>
  )
}

export default Spinner;