import React from "react";
import InvList from "./InvList";
import NewInvForm from "./NewInvForm";
import InvDetail  from "./InvDetail";

class InvControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInvList: [],
      pText: "WITHIN THE BIN",
      currentBurger: null
    };
  }

  handleCheckingBurger = (id) => {
    const currentBurger = this.state.mainInvList.filter(inventory => inventory.id === id)[0];
    this.setState({currentBurger: currentBurger});
  }

  handleAddingNewInvToList = (newInv) => {
    const newMainInvList = this.state.mainInvList.concat(newInv);
    this.setState({
      mainInvList: newMainInvList,
      formVisibleOnPage: false,
      pText: "WITHIN THE BIN"
    });
  }

  handleDeletingBurger = (id) => {
    const newMainInvList = this.state.mainInvList.filter(inventory => inventory.id !== id);
    this.setState({
      mainInvList: newMainInvList,
      currentBurger: null
    });
  }

  handleClick = () => {
    if (this.state.currentBurger != null) {
      this.setState({
        formVisibleOnPage: false,
        currentBurger: null
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      pText: prevState.formVisibleOnPage ? "WITHIN THE BIN" : "WHAT"
    }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.currentBurger != null) {
      currentlyVisibleState = <InvDetail inventory = {this.state.currentBurger} onClickingDelete = {this.handleDeletingBurger} />;
      buttonText="BACK TO THE BURGERS";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInvForm onNewInvCreation={this.handleAddingNewInvToList} />;
      buttonText="BACK TO THE BURGERS";
    } else {
      currentlyVisibleState = <InvList invList={this.state.mainInvList} onInvSelection={this.handleCheckingBurger} />;
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