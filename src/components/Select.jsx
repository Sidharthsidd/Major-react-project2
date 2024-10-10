import React from "react"
import { useId } from 'react';
function Select({
    options,
    label,
    className,
    ...props
},ref){
    const id=useId()
    return (
        <div className="w-ful">
            {label && <label htmlFor ={id} className =""></label>}
            <select {...props} id={id} ref={ref} className={` ${className}`}>

                {options?.map((option)=>(
                    <options key={option} value={option}>{option}</options>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)