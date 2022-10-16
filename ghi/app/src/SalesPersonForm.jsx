import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: "",
      number: "",
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmployee = this.handleChangeEmployee.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};


    const locationUrl = 'http://localhost:8090/api/sales_persons/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();
      console.log(newSalesPerson);
      this.setState({
        employee: '',
        number: '',
 
      });
    }
  }

  handleChangeEmployee(event) {
    const value = event.target.value;
    this.setState({ employee: value });
  }

  handleChangeNumber(event) {
    const value = event.target.value;
    this.setState({ number: value });
  }



  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new sales person</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
                <input onChange={this.handleChangeEmployee} value={this.state.employee} placeholder="Employee" required type="text" name="employee" id="employee" className="form-control" />
                <label htmlFor="employee">New employee</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeNumber} value={this.state.number} placeholder="Number" required type="text" name="number" id="number" className="form-control" />
                <label htmlFor="number">Add employee number</label>
              </div>              
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesPersonForm;
