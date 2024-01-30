import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInvForm (props) {
  const { inventory } = props;

  function handleEditingBurgerForm(event) {
    event.preventDefault();
    props.onEditBurger({burger: event.target.burger.value,
                        toppings: event.target.toppings.value,
                        price: parseInt(event.target.price.value),
                        description: event.target.description.value,
                        quantity: parseInt(event.target.quantity.value),
                        id: inventory.id })
  }

  return (
    <React.Fragment>
      <ReusableForm 
                    formSubmissionHandler={handleEditingBurgerForm}
                    buttonText="EDIT BURGER" />
    </React.Fragment>
  )
}

EditInvForm.propTypes = {
  inventory: PropTypes.object,
  onEditBurger: PropTypes.func
}

export default EditInvForm;