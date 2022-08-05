// import React from "react";
// function SalesPersonHistoryList(props) {
//     console.log("!!!!!", sales1)
//     return (
//         <div className="container">
//         <h2 className="display-5 fw-bold">Sales Person History</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Sales Person</th>
//             <th>Customer</th>
//             <th>VIN</th>
//             <th>Sale Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sales.map(sale => {
//             return (
//               <tr key={sale.id}>
//                 <td>{ sale.sales_person }</td>
//                 <td>{ sale.customer }</td>
//                 <td>{ sale.automobile }</td>
//                 <td>{ sale.price }</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       </div>
//     );
//   }
  
//   export default SalesPersonHistoryList;
  

function SalesPersonHistoryList(props) {
    return (
      <div className="container">
        <h2 className="display-5 fw-bold">Sales History</h2>
        <div className="row">
          {props.sales_history.map(sale => {
            return (
              <div key={sale.id} className="col">
                <div className="card mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{sale.sales_person}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {sale.customer}
                    </h6>
                    <p className="card-text">
                      {sale.automobile}
                    </p>
                    <p className="card-text">
                      {sale.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default SalesPersonHistoryList;