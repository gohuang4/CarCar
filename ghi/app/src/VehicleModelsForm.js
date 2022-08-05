import React from 'react';

class VehiclesModelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        picture_url: "",
        manufacturer_id: "",
        manufacturers: [],
    };

    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName=this.handleChangeName.bind(this)
    this.handleChangePicture_url=this.handleChangePicture_url.bind(this)
    this.handleChangeManu=this.handleChangeManu.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/'

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log("stuff",data)
      this.setState({ manufacturers: data });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    const data = {...this.state};
    delete data.manufacturers
    delete data.picture_url

    console.log(data)
    // delete data.bins;
    // delete data.picture_url;

    const appointUrl = 'http://localhost:8100/api/models/';
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
        name: "",
        picture_url: "",
        manufacturer_id: "",
      });
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangePicture_url(event) {
    const value = event.target.value;
    this.setState({ picture_url: value });
  }

  handleChangeManu(event) {
    const value = event.target.value;
    this.setState({ manufacturer_id: value });
  }

//   handleChangeDate(event) {
//     const value = event.target.value;
//     this.setState({ date: value });
//   }

//   handleChangeReason(event) {
//     const value = event.target.value;
//     this.setState({ reason: value });
//   }
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Models</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">

              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChangePicture_url} value={this.state.picture_url} placeholder="Picture_url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="picture_url">Picture</label>
              </div>

              {/* <div className="form-floating mb-3">
                <input onChange={this.handleChangeDate} value={this.state.date} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                <label htmlFor="date">Date</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChangeReason} value={this.state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                <label htmlFor="reason">Reason</label>
              </div> */}
              <div className="mb-3">
                <select onChange={this.handleChangeManu} value={this.state.manufacturer_id} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                  <option value="manufacturer_id">Manufacturer</option>
                  {this.state.manufacturers.map(manufacturer_id => {
                    return (
                      <option key={manufacturer_id.id} value={manufacturer_id.id}>{manufacturer_id.name}</option>
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

export default VehiclesModelForm;
