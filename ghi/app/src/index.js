import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


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