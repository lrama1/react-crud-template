import React, { Component } from 'react';
import VehicleSummary from '../VehicleSummary';
import axios from 'axios';

class VehicleList extends Component{

    state = {
      headers : ['VIN', 'Year', 'Make', 'Model'],
      vehicles : []
    };

    constructor(props) {
        super(props);
        console.log(props);
        console.log(process.env);
    }

    componentDidMount() {

        axios.get("/vehicles?page=1&per_page=10").
            then(response => {
           console.log(response);
           this.setState({vehicles: response.data.rows});
        });
    }

    summaryClickedHandler = (id) => {
      this.props.history.push({pathname: '/vehicle/' + id});
    }

    render() {
        const listOfHeaders = this.state.headers.map((header, index) => {
            return (
              <th id={'header' + index} key={index}>{header}</th>
            );
        });

        const listOfVehicles = this.state.vehicles.map(vehicle => {
            return (
              <VehicleSummary summaryClickedHandler={this.summaryClickedHandler} key={vehicle.vin} vin={vehicle.vin} year={vehicle.year}
                    make={vehicle.make} model={vehicle.model}/>
            );
        });
        return(
          <table className="table">
              <thead>
                <tr>
                    {listOfHeaders}
                </tr>
              </thead>
              <tbody>
              {listOfVehicles}
              </tbody>
          </table>
        );
    }

}
export default VehicleList;