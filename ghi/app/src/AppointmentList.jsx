let d = new Date()

function AppointmentList(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>VIP</th>
                    </tr>
                </thead>
                <tbody>
                    {props.appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                            <td>{ appointment.vin }</td>
                            <td>{ appointment.owner }</td>
                            
                            <td>
                                { appointment.date =
                                 d.getFullYear()
                                 +"-"+d.getMonth()
                                 +"-"+d.getDate()}
                            </td>

                            <td>{ appointment.date = 
                            d.getHours()+':'+d.getMinutes()}
                            </td>

                            <td>{ appointment.technician }</td>
                            <td>{ appointment.reason }</td>

                            {/* <td>{
                            (() => {
                                if ( appointment.vip == true) {
                                    return(
                                        <td>yes</td>
                                    )
                                } else {
                                    return(
                                        <td>no</td>
                                    )
                                }
                            })}</td> */}
                            <td>{ appointment.vip }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AppointmentList


// function AppointmentList(props) {
//     return (
//       <div className="container">
//         <h2 className="display-5 fw-bold">Appointments</h2>
//         <div className="row">
//           {props.appointments.map(appointment => {
//             return (
//               <div key={appointment.id} className="col">
//                 {/* <div className="card mb-3 shadow">
//                   <div className="card-body">
//                     <h5 className="card-title">{hat.style}</h5>
//                     <h6 className="card-subtitle mb-2 text-muted">
//                       {hat.fabric}
//                     </h6>
//                     <p className="card-text">
//                       {hat.location}
//                     </p>
//                   </div>
//                 </div> */}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
  
//   export default AppointmentList