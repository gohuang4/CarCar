
  function AutomobileList(props) { 
      var automobiles1=props.automobiles
    // console.log("0000000000000000",props.automobiles)
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
          {console.log(automobiles1)}
        {
        
        automobiles1.map(auto => {
        //   console.log("!!!!!!!!!!!",auto)
          return (
            <tr key={auto.vin}>
              <td>{ auto.vin }</td>
              <td>{ auto.color }</td>
              <td>{ auto.year }</td>
              <td>{ auto.model.name }</td>
              <td>{ auto.model.manufacturer.name }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default AutomobileList
