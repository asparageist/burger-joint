import React from "react";
import Inventory from "./Inventory";

class InvControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <React.Fragment>
        <div className="content">
        <p>boop the snoots</p>
        <Inventory />
        </div>
      </React.Fragment>
    );
  }
}

export default InvControl;