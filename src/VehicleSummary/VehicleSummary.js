import React, { Component } from 'react';

const vehicleSummary = (props) => {
    console.log(props);
    return(
      <tr>
          <td onClick={() => props.summaryClickedHandler(props.vin)}>{props.vin}</td>
          <td>{props.year}</td>
          <td>{props.make}</td>
          <td>{props.model}</td>
      </tr>
    );
}

export default vehicleSummary;