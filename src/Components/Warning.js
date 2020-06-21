import React from 'react'

export const Warning = ({text}) =>{
    return(
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    )
}