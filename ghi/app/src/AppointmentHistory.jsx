import { useState } from "react"

let k = new Date()

function AppointmentHistory(props) {
    let [searchTerm,setSearchTerm] = useState("")
    return (
        <div className="form-control">
            <input  id = "search1" placeholder="Search. . ." type ="text" onChange={
                event => {setSearchTerm(event.target.value)}
            }/>
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
                    {props.historys.filter((history)=>{
                        if (searchTerm == "") {
                            return history
                        } else if (history.vin.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return history
                        }
                    }
                    ).map(history => {
                        return (
                            <tr key={history.id}>
                            <td>{ history.vin }</td>
                            <td>{ history.owner }</td>
                            
                            <td>
                                { history.date =
                                 k.getFullYear()
                                 +"-"+k.getMonth()
                                 +"-"+k.getDate()}
                            </td>

                            <td>{ history.date = 
                            k.getHours()+':'+k.getMinutes()}
                            </td>

                            <td>{ history.technician }</td>
                            <td>{ history.reason }</td>

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
                            <td>{ history.vip }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AppointmentHistory