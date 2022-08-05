import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        vin: "",
        owner: "",
        date: "",
        technician: "",
        technicians: [],
        reason: "",
    };

    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeVin=this.handleChangeVin.bind(this)
    this.handleChangeTech=this.handleChangeTech.bind(this)
    this.handleChangeOwner=this.handleChangeOwner.bind(this)
    this.handleChangeDate=this.handleChangeDate.bind(this)
    this.handleChangeReason=this.handleChangeReason.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/technician/'

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      //console.log(data.technicians)
      this.setState({ technicians: data });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    const data = {...this.state};
    delete data.technicians
    console.log(data)
    // delete data.bins;
    // delete data.picture_url;

    const appointUrl = 'http://localhost:8080/api/appointment/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(appointUrl, fetchConfig);
    if (response.ok) {
      const newAppoint = await response.json();
      console.log("jello",newAppoint);
      this.setState({
        vin: "",
        owner: "",
        date: "",
        technician: "",
        reason: "",
      });
    }
  }

  handleChangeVin(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }

  handleChangeTech(event) {
    const value = event.target.value;
    this.setState({ technician: value });
  }

  handleChangeOwner(event) {
    const value = event.target.value;
    this.setState({ owner: value });
  }

  handleChangeDate(event) {
    const value = event.target.value;
    this.setState({ date: value });
  }

  handleChangeReason(event) {
    const value = event.target.value;
    this.setState({ reason: value });
  }
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add appointments</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">

              <div className="form-floating mb-3">
                <input onChange={this.handleChangeVin} value={this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Vin</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChangeOwner} value={this.state.owner} placeholder="Owner" required type="text" name="owner" id="owner" className="form-control" />
                <label htmlFor="owner">Owner</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChangeDate} value={this.state.date} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                <label htmlFor="date">Date</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChangeReason} value={this.state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeTech} value={this.state.technician} required name="technician" id="technician" className="form-select">
                  <option value="">Technician</option>
                  {this.state.technicians.map(technician => {
                    return (
                      <option key={technician.number} value={technician.number}>{technician.name}</option>
                    )
                  })}
                </select>
              </div>

              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentForm;
