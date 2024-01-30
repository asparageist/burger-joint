import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewInvForm(props) {

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewInvCreation({
      burger: event.target.burger.value,
      toppings: event.target.toppings.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewFormSubmission}
        buttonText="do what now" />
    </React.Fragment>
  );
}

NewInvForm.propTypes = {
  onNewInvCreation: PropTypes.func
};

export default NewInvForm;