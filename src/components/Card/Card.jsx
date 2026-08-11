import React from 'react'
import './Card.css'

function Card({ title, image, url = "" }) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <div className="hover-card">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default Card
