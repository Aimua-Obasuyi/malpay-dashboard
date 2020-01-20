import React from "react";

// import Widget from "components/Widget";
import {recentPurchases} from "./data";
import TicketItem from "./TicketItem";

class Recentpurchases extends React.Component {

  render() {
    return (
      <div className="jr-card-ticketlist">
        <div className="d-flex flex-row mb-3">
          <h4 className="mb-1"> Recent Purchases</h4>
          <span className="text-primary font-weight-medium mb-0 pointer ml-auto d-none d-sm-block">  <i
            className="zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle"/> </span>
        </div>
        {
          recentPurchases.map((ticket, index) => <TicketItem key={ticket.id} data={ticket}/>)
        }
        <span className="text-primary font-weight-medium mb-0 pointer d-block d-sm-none">See all Purchases  <i
          className="zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle"/> </span>
      </div>
    );
  }
}


export default Recentpurchases;
