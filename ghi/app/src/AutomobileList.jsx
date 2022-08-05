
  function AutomobileList(props) { 
      let automobiles=[props.automobiles.autos]
    console.log(props.automobiles)
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
        {automobiles.map(auto => {
          console.log(auto)
          return (
            <tr key={auto.vin}>
              <td>{ auto.vin }</td>
              <td>{ auto.color }</td>
              <td>{ auto.year }</td>
              <td>{ auto.model }</td>
              {/* <td>{ auto.model.manufacturer.name }</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default AutomobileList
