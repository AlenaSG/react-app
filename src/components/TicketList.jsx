import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
    names: "Anna and Alena",
    location: "3a",
    issue: "Firebase won't save record. Halp."
  },
  {
    names: "Sleater and Kinney",
    location: "4b",
    issue: "Fox image not displaying on page, can only see duck?"
  },
  {
    names: "Imani and Jacob",
    location: "9f",
    issue: "Donley picture not displaying in Zoology app ;((."
  }
];


function TicketList(prop){
  return (
      <div>
        <hr/>
        {masterTicketList.map((ticket, index) =>
          <Ticket names={ticket.names}
                  location={ticket.location}
                  issue={ticket.issue}
                  key={index}/>
        )}
      </div>
    );
  }


export default TicketList;
