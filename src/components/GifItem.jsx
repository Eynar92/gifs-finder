import React from 'react'

export const GifItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img
                src={url}
                alt={`${title} image`}
            />
            <p>{title}</p>
        </div>
    )
}
