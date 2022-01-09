import React, { useState, useEffect } from 'react';
import './style/App.css';
import dataJson from './data.json'

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    setData(dataJson.near_earth_objects)
  }, [setData])

  return (
    <ul>
      {data.map(item => {
        console.log(item)
        return<li key={item.id}>
          {item.estimated_diameter.kilometers.estimated_diameter_min}
        </li>
      })}
    </ul>
  )
}

export default App;
