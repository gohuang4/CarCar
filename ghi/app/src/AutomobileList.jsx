
  function AutomobileList(props) {
    return (
    <div className="container">
    <h2 className="display-5 fw-bold">Automobiles</h2>        
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Color</th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {props.automobiless.map(auto => {
          return (
            <tr key={auto.model}>
              <td>{ auto.vin }</td>
              <td>{ auto.color }</td>
              <td>{ auto.year }</td>
              <td>{ auto.model }</td>
              <td>{ auto.manufacturer }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default AutomobileList
