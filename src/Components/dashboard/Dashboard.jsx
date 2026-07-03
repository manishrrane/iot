import React from 'react';
import { useState, useEffect } from 'react';
import {database} from '../../firebase';
import '../dashboard/dashboard.css';

import {ref,onValue} from 'firebase/database';

const Dashboard = () => {

  const [sensorData, setsensorData]=useState({
    Temperature: 0,
    Humidity: 0,
    Gas :0,
  })

  useEffect(() => {

    const sensorRef=ref(database,"SensorData");

    onValue(sensorRef,(snapshot) =>{
      const data =snapshot.val();

      if(data){
        setsensorData(data);
      }
    });
  },[]);


  return (

    <>
    <div className="header">
      <h1 class>Sensor Data Fetching </h1>
    </div>

    <div className="container">
      <div className="data">
      <h1>Temperature</h1>
      <p>{sensorData.Temperature}</p>
    </div>
    <div className="data">
      <h1>Humidity</h1>
      <p>{sensorData.Humidity}</p>
    </div>
    <div className="data">
      <h1>Gas</h1>
      <p>{sensorData.Gas}</p>
    </div>
    </div>
    </>
  )
}

export default Dashboard
