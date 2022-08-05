import React from 'react';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }



  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};


    const locationUrl = 'http://localhost:8090/api/customers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newCustomer = await response.json();
      console.log(newCustomer);
      this.setState({
        name: '',
        address: '',
        phone: '',
 
      });
    }
  }

  handleChangeCustomer(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeAddress(event) {
    const value = event.target.value;
    this.setState({ address: value });
  }
  handleChangePhone(event) {
    const value = event.target.value;
    this.setState({ phone: value });
  }



  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new customer</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
                <input onChange={this.handleChangeCustomer} value={this.state.name} placeholder="Customer" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeAddress} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Add an address</label>
              </div>   
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePhone} value={this.state.phone} placeholder="Phone" required type="text" name="phone" id="phone" className="form-control" />
                <label htmlFor="phone">Add a phone number</label>
              </div>   
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerForm;
