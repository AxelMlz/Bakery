import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./componants/Add";
import List from "./componants/List";
import Pay from "./componants/Pay";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeLab : "add",
      items: []
    }
    }
  

  renderNav(){
    return <div>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Add</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">List</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Pay</a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
              </div>
          </div>
  }
  render() {
    return (
      <div className="Bakery">
        <label>Bakery</label>
      
        <div className="Add">
         <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">Password</label>
              <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        </div>
        <div className="list"> 
         </div>
        <div className="Pay"> 
         </div>
       
      </div>
    );
  }
}

export default App;