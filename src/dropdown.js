import { useState } from "react";

export function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Consult', 'Meeting']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>{selected}</div>
            {
                isActive && (
                    <div className="dropdown-content">{
                        options.map(options => (

                            <div onClick={(e) => {
                                setSelected(options)
                                setIsActive(false)
                            }} className="dropdown-item">
                                {options}
                            </div>
                        ))}
                    </div>
                )
            }


        </div>
    )
}
export default Dropdown;