import React from "react";
//import Ticket from "./Ticket";
//import { Button }  from "react-bootstrap";
//import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event) {
    console.log("New ticket button clicked!");
    this.setState({formVisibleOnPage: true});
  }

  render() {
    return (
      //<div>
        <button onClick={this.handleDisplayingNewTicketForm}>Request Help!</button>
        //</div>
      );
  }
}
    // <Ticket
    //   location ="3a"
    //   names="Alena and Anna"
    //   issue="Firebase won't save records"/>


export default NewTicketControl;
