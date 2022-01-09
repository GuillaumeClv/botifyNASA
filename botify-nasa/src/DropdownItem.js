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
                type="checkbox"
                onChange={onChange}
            ></input>
            <p>{body}</p>
        </li>
    )
}

export default DropdownItem