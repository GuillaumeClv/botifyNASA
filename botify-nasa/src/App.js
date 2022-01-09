import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

import './style/App.css';
import dataJson from './data.json'

import Dropdown from './Dropdown';
import Table from './Table';

function App() {
  const [data, setData] = useState([])
  const [bodyDisplayed, setBodyDisplayed] = useState("")
  const [switchButton, setSwitchButton] = useState(true)
  const orbitingBodys = ["Earth", "Juptr", "Mars", "Merc"]

  // Get data from API
  useEffect(() => {
    // Theoretically fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    setData(dataJson.near_earth_objects)
  }, [setData])

  // Switch between chart and table vue
  const switchView = () => setSwitchButton(!switchButton)

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

  return (
    <>
      <Dropdown
        orbitingBodys={orbitingBodys}
        bodyDisplayed={bodyDisplayed}
        setBodyDisplayed={setBodyDisplayed}
      />

      <button onClick={switchView}>Changer de vue</button>

      {
        switchButton && bodyDisplayed === "" && <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          options={options}
          data={[["NEO", "Min Estimated Diameter (km)", "Max Estimeted Diameter"], ...dataChart]}
        />
      }
      {
        switchButton && bodyDisplayed !== "" && <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          options={options}
          data={[["NEO", "Min Estimated Diameter (km)", "Max Estimeted Diameter"], ...singleChart]}
        />
      }
      {
        !switchButton && <Table data={dataChart}/>
      }
    </>
  )
}

export default App;
