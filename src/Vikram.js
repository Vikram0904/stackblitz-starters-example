import React from 'react';
import './Vikram.css';

const Vikram = (props) => {
  return (
    <ul>
      {props.series.map((series) => {
        return <li>{series}</li>;
      })}
    </ul>
  );
};
export default Vikram;
