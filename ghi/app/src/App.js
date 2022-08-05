import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturerList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import Nav from './Nav';
import VehicleList from './VehicleList';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import VehiclesModelForm from './VehicleModelsForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />}/>
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route index element={<VehicleList vehicles={props.vehicles} />}/>
          </Route>
          <Route path="appointment">
            <Route index element={<AppointmentList appointments={props.appointments} />}/>
          </Route>
          <Route path = "technician">
            <Route path = 'new' element = {<TechnicianForm/>}/>
          </Route>
          <Route path = "appointment">
            <Route path = 'new' element = {<AppointmentForm/>}/>
          </Route>
          <Route path = "models">
            <Route path = 'new' element = {<VehiclesModelForm/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
