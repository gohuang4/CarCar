import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleList from './VehicleList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models">
            <Route index element={<VehicleList vehicles={props.vehicles} />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
