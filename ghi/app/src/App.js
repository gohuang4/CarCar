import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturerList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import Nav from './Nav';
import VehicleList from './VehicleList';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
