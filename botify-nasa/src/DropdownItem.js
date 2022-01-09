import React, {useState} from "react"

const DropdownItem = ({body, setBodyDisplayed}) => {
    const [isChecked, setIsChecked] = useState(false)

    const onChange = () => {
        setIsChecked(!isChecked)
        isChecked ? setBodyDisplayed("") : setBodyDisplayed(body)
    }

    return (
        <li key={body}>
            <input
                id={body}
                name={body}
                type="checkbox"
                onChange={onChange}
            ></input>
            <label
                htmlFor={body}
            >
                {body}
            </label>
        </li>
    )
}

export default DropdownItem