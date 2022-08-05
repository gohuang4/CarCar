import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let vehicleData, manufacturerData, salesData, customerData, automobileData, technicianData, appointmentData, appointmentHistoryData;
  const vehicleResponse = await fetch('http://localhost:8100/api/models/');
  const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers/');
  const salesResponse = await fetch ('http://localhost:8090/api/sales/');
  const customerResponse = await fetch ('http://localhost:8090/api/customers/');
  const automobileResponse = await fetch ('http://localhost:8100/api/automobiles/');
  // const vehicleResponse = await fetch('http://localhost:8100/api/models/');
  const techResponse = await fetch('http://localhost:8080/api/technician/')
  const appointmentResponse = await fetch('http://localhost:8080/api/appointment/');
  const appointmentHistoryResponse = await fetch('http://localhost:8080/api/history/');

  if (vehicleResponse.ok) {
    vehicleData = await vehicleResponse.json();
    // console.log('vehicle data: ', vehicleData)
  } else {
    console.error(vehicleResponse);
  }
  if (automobileResponse.ok) {
    automobileData = await automobileResponse.json();
    console.log('automobile data: ', automobileData)
  } else {
    console.error(automobileResponse);
  }

  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
    // console.log('manufacturer data: ', manufacturerData)
  } else {
    console.error(manufacturerResponse);
  }

  if (salesResponse.ok) {
    salesData = await salesResponse.json();
    // console.log('sales data: ', salesData)
  } else {
    console.error(salesResponse);
  }

  if (customerResponse.ok) {
    customerData = await customerResponse.json();
    // console.log('customer data: ', customerData)
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
  // if (hatResponse.ok) {
  //   hatData = await hatResponse.json();
  //   console.log('hat data: ', hatData)
  // } else {
  //   console.error(hatResponse);
  // }

  root.render(
    <React.StrictMode>
      <App vehicles={vehicleData} manufacturers={manufacturerData} sales={salesData} customer={customerData} automobiles={automobileData} hats={technicianData} appointments={appointmentData} historys = {appointmentHistoryData} />
      {/* <App vehicles={vehicleData} hats={technicianData} appointments={appointmentData} /> */}
    </React.StrictMode>
  );

}

loadInventory();
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));


// async function loadInventory() {
//   let serviceData, saleData;
//   const serviceResponse = await fetch('http://localhost:8080/api/services/');
//   const saleResponse = await fetch('http://localhost:8090/api/sales/');

//   if (serviceResponse.ok) {
//     serviceData = await serviceResponse.json();
//     console.log('service data: ', serviceData)
//   } else {
//     console.error(serviceResponse);
//   }
//   if (saleResponse.ok) {
//     saleData = await saleResponse.json();
//     console.log('sale data: ', saleData)
//   } else {
//     console.error(saleResponse);
//   }

//   root.render(
//     <React.StrictMode>
//       <App service={serviceData} sales={saleData} />
//     </React.StrictMode>
//   );
// }
// loadInventory();
