import React from "react";
import Inventory from "./Inventory";
import InvList from "./InvList";
import NewInvForm from "./NewInvForm";

class InvControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInvList: [],
      pText: "WITHIN THE BIN"
    };
  }

  handleAddingNewInvToList = (newInv) => {
    const newMainInvList = this.state.mainInvList.concat(newInv);
    this.setState({
      mainInvList: newMainInvList,
      formVisibleOnPage: false,
      pText: "WITHIN THE BIN"
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      pText: prevState.formVisibleOnPage ? "WITHIN THE BIN" : "WHAT"
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInvForm onNewInvCreation={this.handleAddingNewInvToList} />
      buttonText="BACK TO THE BURGERS";
    } else {
      currentlyVisibleState = <InvList invList={this.state.mainInvList} />
      buttonText="NEW BURGER";
    }
    return (
      <React.Fragment>
        <div id="card2">
          <p>{this.state.pText}</p>
          <br />
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default InvControl;