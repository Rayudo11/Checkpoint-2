import React from 'react'

export default function Map(props) {
    const {Name, Address} = props.business    

    let addressParam = [Name, Address].join(' ').replaceAll(' ', '+')
    console.log(addressParam)
    return (
    
    <iframe
    width="600"
    height="450"
    style={{border:0}}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API}
        &q=${addressParam}`}>
    </iframe>
    )
    }


