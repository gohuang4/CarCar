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

