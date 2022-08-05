import React from 'react';

class SalesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      customer: "",
      customers: [],
      automobile: "",
      automobiles: [],
      sales_person: "",
      sales_persons: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeCustomerName = this.handleChangeCustomerName.bind(this);
    this.handleChangeAutomobile = this.handleChangeAutomobile.bind(this);
    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
  }

  // async componentDidMount() {
  //   const url = 'http://localhost:8100/api/automobiles/';
  //   const response = await fetch(url);

  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log(data)
  //     this.setState({ automobiles: data });
  //   }
  // }

  async componentDidMount() {
    const AutoUrl = 'http://localhost:8100/api/automobiles/';
    const CustomerUrl = 'http://localhost:8090/api/customers/';
    const SalesPersonUrl = 'http://localhost:8090/api/sales_persons/';

    const AutoResponse = await fetch(AutoUrl);
    const CustomerResponse = await fetch(CustomerUrl);
    const SalesPersonResponse = await fetch(SalesPersonUrl);


    if (AutoResponse.ok) {
      const data = await AutoResponse.json();
      console.log(data)
      this.setState({ automobiles: data });
    }

    if (CustomerResponse.ok) {
      const data = await CustomerResponse.json();
      console.log(data)
      this.setState({ customers: data });
    }
    if (SalesPersonResponse.ok) {
      const data = await SalesPersonResponse.json();
      console.log(data)
      this.setState({ sales_persons: data });
    }


  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.customers
    delete data.automobiles
    delete data.sales_persons

    const locationUrl = 'http://localhost:8090/api/sales/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newSale = await response.json();
      console.log(newSale);
      this.setState({
        price: '',
        customer: '',
        sales_person: '',
        automobile: '',
      });
    }
  }

  handleChangePrice(event) {
    const value = event.target.value;
    this.setState({ price: value });
  }

  handleChangeAutomobile(event) {
    const value = event.target.value;
    this.setState({ automobile: value });
  }

  handleChangeCustomerName(event) {
    const value = event.target.value;
    this.setState({ customer: value });
  }

  handleChangeSalesPerson(event) {
    const value = event.target.value;
    this.setState({ sales_person: value });
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale!</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePrice} value={this.state.price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                <label htmlFor="price">Sale Price</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeSalesPerson} value={this.state.sales_person} required name="sales_person" id="sales_person" className="form-select">
                  <option value="">Choose a sales person</option>
                  {this.state.sales_persons.map(sales_person => {
                    return (
                      <option key={sales_person.id} value={sales_person.id}>{sales_person.employee}</option>
                    )
                  })}
                </select>
                </div>
              <div className="mb-3">
                <select onChange={this.handleChangeAutomobile} value={this.state.automobile} required name="automobile" id="automobile" className="form-select">
                  <option value="">Choose an Automobile</option>
                  {this.state.automobiles.map(automobile => {
                    return (
                      <option key={automobile.id} value={automobile.vin}>{automobile.vin}</option>
                    )
                  })}
                </select>
                </div>
              <div className="mb-3">
                <select onChange={this.handleChangeCustomerName} value={this.state.customer} required name="customer" id="customer" className="form-select">
                  <option value="">Choose a customer</option>
                  {this.state.customers.map(customer => {
                    return (
                      <option key={customer.id} value={customer.id}>{customer.name}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesForm;
