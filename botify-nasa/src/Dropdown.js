import React from "react"
import DropdownItem from "./DropdownItem"

// Main Dropdown Component
const Dropdown = ({orbitingBodys, setBodyDisplayed}) => (
    <div>
        <h1>Obiting Body (Earth)</h1>
        <ul className="orbiting-bodys">
            { orbitingBodys.map(body => (
                <DropdownItem 
                    body={body} 
                    setBodyDisplayed={setBodyDisplayed}
                />
            ))}
        </ul>
    </div>
)

export default Dropdown