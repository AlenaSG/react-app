import React from "react";
import NewTicketForm from "./NewTicketForm";
//import { Button }  from "react-bootstrap";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
    //this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  showForm(event) {
    this.setState({formVisibleOnPage: true});
  }

  hideForm(event) {
    this.setState({formVisibleOnPage: false});
  }

  render(){
    //const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}
      hideFormAfterSubmission = {this.hideForm}/>
    } else {
       formAreaContent = <button onClick={this.showForm}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

// handleDisplayingNewTicketForm(event) {
//   console.log("New ticket button clicked!");
//   console.log(this);
//   this.setState({formVisibleOnPage: true});
// }

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}
//When working in a class-based component, PropType declarations occur directly after the closing bracket of the class.
export default NewTicketControl;
