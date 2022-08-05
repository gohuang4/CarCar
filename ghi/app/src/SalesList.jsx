function SalesList(props) {
    return (
      <div className="container">
        <h2 className="display-5 fw-bold">Sales</h2>
        <div className="row">
          {props.sales.map(sale => {
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
  
  export default SalesList;