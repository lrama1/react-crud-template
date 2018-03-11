import React, {Component} from 'react';
import axios from 'axios';

class VehicleDetail extends Component{

    state = {
      vehicleToEdit : null
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        console.log('Loading: ' + this.props.match.params.id);
        axios.get('/vehicle/' + this.props.match.params.id)
            .then(response => {
                this.setState({vehicleToEdit : response.data});
            });
    }

    saveVehicle = () => {
        alert('saving');
        console.log(this.state.vehicleToEdit);
    }

    handleChange(event){
        console.log(event.target.name);
        const fieldName = event.target.name;
        let tempObject = {...this.state.vehicleToEdit};
        tempObject[fieldName] = event.target.value;
        this.setState({vehicleToEdit : tempObject});
    }

    render () {
        let screen = <div>Loading</div>;
        if(this.state.vehicleToEdit !== null) {
            screen = (
                <div className="row">
                    <div className="col-md-12">
                        <form>
                          <div className="form-group">
                              <label for="vin">VIN</label>
                              <input className="form-control" id="vin" name="vin" value={this.state.vehicleToEdit.vin}
                                     onChange={this.handleChange}/>
                          </div>

                          <div className="form-group">
                              <label for="year">YEAR</label>
                              <input className="form-control" id="year" name="year" value={this.state.vehicleToEdit.year}
                                     onChange={this.handleChange}/>
                          </div>

                          <div>
                              <input type="button" onClick={() => this.saveVehicle()} value="Save"/>
                          </div>
                        </form>
                    </div>
                </div>);
        }
        return screen;
    }
}
export default VehicleDetail;