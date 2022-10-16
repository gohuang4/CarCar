import React from 'react';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        const data = {...this.state};
        console.log(data)
    
        const locationUrl = 'http://localhost:8080/api/technician/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
          const newShoe = await response.json();
          console.log(newShoe);
          this.setState({
            name: "",
            number: "",
          });
        }
      
    }

    handleChangeName(event) {
      const value = event.target.value;
      this.setState({ name: value });
    }
    handleChangeNumber(event) {
      const value = event.target.value;
      this.setState({ number: value });
    }

    render() {
        return (
          <div className='row'>
            <div className='offset-3 col-6'>
              <div className="shadow p-4 mt-4">
                <h1>Technicians</h1>
                <form onSubmit={this.handleSubmit} id="create-conference-form">
                  <div className='form-floating mb-3'>
                    <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input onChange={this.handleChangeNumber} value={this.state.number} placeholder="Number" required type="integer" name="number" id="number" className="form-control" />
                    <label htmlFor="number">Number</label>
                  </div>
                  <div>
                    <button className='btn btn-primary'>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}

export default TechnicianForm