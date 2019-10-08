import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BarangayList from "./components/barangay-list.component";
import EditBarangay from "./components/edit-barangay.component";
import CreateBarangay from "./components/create-barangay.component";
import CreateUser from "./components/create-user.component";



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={BarangayList} />
        <Route path="/edit/:id" component={EditBarangay} />
        <Route path="/create" component={CreateBarangay} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
