import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let vehicleData, manufacturerData, salesData, customerData, automobileData, technicianData, appointmentData, salesHistoryData, appointmentHistoryData;
  const vehicleResponse = await fetch('http://localhost:8100/api/models/');
  const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers/');
  const salesResponse = await fetch ('http://localhost:8090/api/sales/');
  const salesHistoryResponse = await fetch ('http://localhost:8090/api/sales_history');
  const customerResponse = await fetch ('http://localhost:8090/api/customers/');
  const automobileResponse = await fetch ('http://localhost:8100/api/automobiles/');
  const techResponse = await fetch('http://localhost:8080/api/technician/')
  const appointmentResponse = await fetch('http://localhost:8080/api/appointment/');
  const appointmentHistoryResponse = await fetch('http://localhost:8080/api/history/');

  if (vehicleResponse.ok) {
    vehicleData = await vehicleResponse.json();
  } else {
    console.error(vehicleResponse);
  }
  if (salesHistoryResponse.ok) {
    salesHistoryData = await salesHistoryResponse.json();
    console.log("!!!!!!!!!!!!!!",salesHistoryData)
    

  } else {
    console.error(salesHistoryResponse);
  }
  if (automobileResponse.ok) {
    automobileData = await automobileResponse.json();
    console.log('automobile data: ', automobileData)
  } else {
    console.error(automobileResponse);
  }

  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
  } else {
    console.error(manufacturerResponse);
  }

  if (salesResponse.ok) {
    salesData = await salesResponse.json();
  } else {
    console.error(salesResponse);
  }



  if (customerResponse.ok) {
    customerData = await customerResponse.json();
  } else {
    console.error(customerResponse);
  }

  if (techResponse.ok) {
    technicianData = await techResponse.json();
    console.log('tech data: ', technicianData)
  } else {
    console.error(techResponse);
  }

  if (appointmentResponse.ok) {
    appointmentData = await appointmentResponse.json();
    console.log('appointment data: ', appointmentData)
  } else {
    console.error(appointmentResponse);
  }

  if (appointmentHistoryResponse.ok) {
    appointmentHistoryData = await appointmentHistoryResponse.json();
    console.log('history data: ', appointmentHistoryData)
  } else {
    console.error(appointmentHistoryResponse);
  }

  root.render(
    <React.StrictMode>
      <App vehicles={vehicleData} manufacturers={manufacturerData} sales={salesData} customer={customerData} automobiles={automobileData} hats={technicianData} appointments={appointmentData} sales_history={salesHistoryData} historys = {appointmentHistoryData}/>
    </React.StrictMode>
  );

}

loadInventory();
