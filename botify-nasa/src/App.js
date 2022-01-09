import React, { useState, useEffect } from 'react';
import './style/App.css';
import dataJson from './data.json'
import { Chart } from "react-google-charts";

import Dropdown from './Dropdown';

function App() {
  const [data, setData] = useState([])
  const [bodyDisplayed, setBodyDisplayed] = useState("")

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

  // Get data for default chart
  const dataChart = [...data.map(({name, estimated_diameter}) => [
    name,
    estimated_diameter.kilometers.estimated_diameter_min, 
    estimated_diameter.kilometers.estimated_diameter_max]
  )]

  // Data from body checked in Dropdown only for oldest date time
  let singleChart = [...data.filter((item) => item.close_approach_data[0].orbiting_body === bodyDisplayed)]
  singleChart = [...singleChart.map((item) => (
    [
      item.name,
      item.estimated_diameter.kilometers.estimated_diameter_min,
      item.estimated_diameter.kilometers.estimated_diameter_max
    ]
  ))]

  const orbitingBodys = ["Earth", "Juptr", "Mars", "Merc"]

  return (
    <>
      <Dropdown
        orbitingBodys={orbitingBodys}
        bodyDisplayed={bodyDisplayed}
        setBodyDisplayed={setBodyDisplayed}
      />
      <p>bodyDisplayed : {bodyDisplayed}</p>
      {
        bodyDisplayed === ""
        ? 
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          options={options}
          data={[["NEO", "Min Estimated Diameter (km)", "Max Estimeted Diameter"], ...dataChart]}
        />
        :
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          options={options}
          data={[["NEO", "Min Estimated Diameter (km)", "Max Estimeted Diameter"], ...singleChart]}
        />
      }
    </>
  )
}

export default App;
