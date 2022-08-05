import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import ManufacturerList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import VehicleList from './VehicleList';
import SalesForm from './SalesForm';
import SalesList from './SalesList';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesPersonHistoryList from './SalesPersonHistory';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';

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
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={props.automobiles} />}/>
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList sales={props.sales} />}/>
            <Route path="new" element={<SalesForm />} />
            <Route path="history" element={<SalesPersonHistoryList />} />
          </Route>
          <Route path="sales_persons">
            <Route path="new" element={<SalesPersonForm />} />
          </Route>
          <Route path="models">
            <Route index element={<VehicleList vehicles={props.vehicles} />}/>
          </Route>
          <Route path="customers">
            <Route path="new" element={<CustomerForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
