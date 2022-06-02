import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Map from './Map'

export default function BusinessDetails() {
  const {id} = useParams()
  const {businesses} = useSelector((state) => {
    return state.businesses
  })
  if (businesses.length === 0 ) return <div>loading...</div>
  const business = businesses.find(business => business.Id.toString() === id)

  return (
    <div>

    <h1>{business.Name}</h1>
    <p>{business.Description}</p>
    <p>{business.Address}</p>
    <p>{business.HoursOfOperation}</p>
    <Map business={business}/>
    </div>
    
  )
}
