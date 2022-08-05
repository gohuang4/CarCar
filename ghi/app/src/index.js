import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let vehicleData, technicianData, appointmentData;
  const vehicleResponse = await fetch('http://localhost:8100/api/models/');
  const techResponse = await fetch('http://localhost:8080/api/technician/')
  const appointmentResponse = await fetch('http://localhost:8080/api/appointment/');
  if (vehicleResponse.ok) {
    vehicleData = await vehicleResponse.json();
    console.log('vehicle data: ', vehicleData)
  } else {
    console.error(vehicleResponse);
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
  // if (hatResponse.ok) {
  //   hatData = await hatResponse.json();
  //   console.log('hat data: ', hatData)
  // } else {
  //   console.error(hatResponse);
  // }

  root.render(
    <React.StrictMode>
      <App vehicles={vehicleData} hats={technicianData} appointments={appointmentData} />
    </React.StrictMode>
  );
}
loadInventory();
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
