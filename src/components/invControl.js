import React from "react";
import Inventory from "./Inventory";
import InvList from "./InvList";
import NewInvForm from "./NewInvForm";

class InvControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInvForm />
      buttonText="BACK TO THE BURGERS";
    } else {
      currentlyVisibleState = <InvList />
      buttonText="NEW BURGER";
    }
    return (
      <React.Fragment>
        <div className="content">
          <p>boop the snoots</p>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default InvControl;