
import React from 'react';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <div className="container"></div>
            <HeaderComponent />
                <div className="container">
                  <Switch> localhost:3000
                      <Route path="/" exact component={ListEmployeeComponent}></Route> 
                      <Route path="/employee" component={ListEmployeeComponent}></Route>
                      <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                          <ListEmployeeComponent />
                          <CreateEmployeeComponent/>
                  </Switch>
                </div>
            <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
