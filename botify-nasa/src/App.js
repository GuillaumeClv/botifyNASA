import React, { useState, useEffect } from 'react';
import './style/App.css';
import dataJson from './data.json'
import { Chart } from "react-google-charts";

function App() {
  const [data, setData] = useState([])

  // Bar chart options
  const options = {
    chartArea: { width: "50%" },
    hAxis: {
      title: "Min Estimated Diameter (km)",
    },
    vAxis: {
      title: "NEO Name",
      minValue: 0,
    },
  }

  // Get data from API
  useEffect(() => {
    // Theoretically fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    setData(dataJson.near_earth_objects)
  }, [setData])

  const dataChart = [...data.map(({name, estimated_diameter}) => [
    name,
    estimated_diameter.kilometers.estimated_diameter_min, 
    estimated_diameter.kilometers.estimated_diameter_max]
  )]

  // console.log(data.map(item => {
  //   console.log(item)
  // }))

  return (
    <>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        options={options}
        data={[["NEO", "Min Estimated Diameter (km)", "Max Estimeted Diameter"], ...dataChart]}
      />
    </>
  )
}

export default App;
