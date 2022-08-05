import React from "react";



function SalesPersonHistoryList(props) {
    return (
        <div className="container">
        <h2 className="display-5 fw-bold">Sales Person History</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.sales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{ sale.sales_person }</td>
                <td>{ sale.customer }</td>
                <td>{ sale.automobile }</td>
                <td>{ sale.price }</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default SalesPersonHistoryList;
  