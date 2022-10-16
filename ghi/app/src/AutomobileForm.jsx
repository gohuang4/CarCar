import React from 'react';

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: "",
      color: "",
      year: "",
      model: "",
      models: [],

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);

  }

  async componentDidMount() {
    const ModelUrl = 'http://localhost:8100/api/models/';

    const  ModelResponse = await fetch(ModelUrl);


    if (ModelResponse.ok) {
      const data = await ModelResponse.json();
      console.log(data)
      this.setState({ models: data });

    }


  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    data.model_id = data.model
    delete data.models
    console.log(data)

    const locationUrl = 'http://localhost:8100/api/automobiles/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newAutomobile = await response.json();
      console.log(newAutomobile);
      this.setState({
        vin: '',
        color: '',
        year: '',
        model: '',
      });
    }
  }

  handleChangeVin(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }
  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }
  handleChangeYear(event) {
    const value = event.target.value;
    this.setState({ year: value });
  }
  handleChangeModel(event) {
    const value = event.target.value;
    this.setState({ model: value });
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create an automobile</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeVin} value={this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeYear} value={this.state.year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeModel} value={this.state.model} required name="model" id="model" className="form-select">
                  <option value="">Choose a model</option>
                  {this.state.models.map(model => {
                    return (
                      <option key={model.id} value={model.id}>{model.name}</option>
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

export default AutomobileForm;
