import React from "react";
import NewTicketForm from "./NewTicketForm";
//import { Button }  from "react-bootstrap";
//import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    //this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event) {
    console.log("New ticket button clicked!");
    console.log(this);
    this.setState({formVisibleOnPage: true});
  }

  render(){
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (formVisibleOnPage){
      formAreaContent = <NewTicketForm/>
    } else {
       formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }

}

export default NewTicketControl;
