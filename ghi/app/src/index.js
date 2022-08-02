import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let vehicleData
  const vehicleResponse = await fetch('http://localhost:8100/api/automobiles/');
  // const hatResponse = await fetch('http://localhost:8090/api/hats/');

  if (vehicleResponse.ok) {
    vehicleData = await vehicleResponse.json();
    console.log('vehicle data: ', vehicleData)
  } else {
    console.error(vehicleResponse);
  }
  // if (hatResponse.ok) {
  //   hatData = await hatResponse.json();
  //   console.log('hat data: ', hatData)
  // } else {
  //   console.error(hatResponse);
  // }

  root.render(
    <React.StrictMode>
      <App vehicles={vehicleData} />
    </React.StrictMode>
  );
}
loadInventory()
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
