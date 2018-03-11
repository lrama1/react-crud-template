import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import VehicleList from '../VehicleList';
import VehicleDetail from '../VehicleDetail';


const appContainer = (props) => {

    return(
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/vehicles">Vehicles</Link>
                      </li>
                  </ul>
              </div>
          </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/vehicle/:id" exact component={VehicleDetail}/>
        <Route path="/vehicles" exact component={VehicleList}/>


      </div>
    );
}

export default appContainer;