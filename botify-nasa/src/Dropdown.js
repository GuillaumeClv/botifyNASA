import React, { useState } from "react"
import DropdownItem from "./DropdownItem"

// Main Dropdown Component
const Dropdown = ({orbitingBodys, bodyDisplayed, setBodyDisplayed}) => {
    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <h1>Orbiting Body ({bodyDisplayed})</h1>
            <input type="text" value={value} onChange={onChange} />
            <ul className="orbiting-bodys">
                {
                    orbitingBodys
                        .filter(body => value === "" || body.includes(value))
                        .map(body => (
                        <DropdownItem 
                            key={body}
                            body={body}
                            setBodyDisplayed={setBodyDisplayed}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Dropdown