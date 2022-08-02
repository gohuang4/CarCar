function VehicleList(props) {
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>manufacturer</th>
              <th>Vehicle</th>
            </tr>
          </thead>
          <tbody>
            {props.vehicles.map(vehicle => {
              return (
                <tr key={vehicle.id}>
                  <td>{ vehicle.name }</td>
                  <td>{ vehicle.picture_url }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    
export default VehicleList