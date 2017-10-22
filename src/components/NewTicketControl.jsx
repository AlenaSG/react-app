import React from "react";
import NewTicketForm from "./NewTicketForm";
import { Button }  from "react-bootstrap";
import { Modal} from "react-bootstrap";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
    //this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  showFormModal() {
    this.setState({formModalIsShowing: true});
  }

  hideFormModal() {
    this.setState({formModalIsShowing: false});
  }

  render(){
    //const formVisibleOnPage = this.state.formVisibleOnPage;
    // let formAreaContent = null;
    // if (this.state.formVisibleOnPage){
    //   formAreaContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}
    //   hideFormAfterSubmission = {this.hideForm}/>
    // } else {
    //    formAreaContent = <Button block bsStyle="primary" bsSize="large" onClick={this.showForm}>Request Help!</Button>;
    // }

    return (
      <div>
        <Button
          block="true"
          bsStyle="primary"
          bsSize="large"
          onClick={this.showFormModal}>
          Request Help!
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
            <Modal.Header>
              <Modal.Title>Request Help</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NewTicketForm
                onNewTicketCreation={this.props.onNewTicketCreation}
                hideFormAfterSubmission = {this.hideFormModal}/>
            </Modal.Body>
          </Modal>
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
