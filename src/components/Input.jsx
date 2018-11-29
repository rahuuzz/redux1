import React from 'react'

const Input = props => {
    // console.log(props.inputRef.value)
    return(
        <div>
            <input 
                ref={props.inputRef}
                name={props.name}
                type={props.type}
                placeholder={props.title}
               
               
            />
        </div>
    )
}

export default Input;