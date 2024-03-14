import React from 'react'
import Icon from "./react.svg"
import './loading.scss'
const loading: React.FC = () => {
    return (

        <div className="loading_container">
            <img
                className="rotating-image"
                src={Icon}
            />
        </div>
    )
}

export default loading