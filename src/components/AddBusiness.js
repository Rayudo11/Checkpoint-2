import React,{useState,useRef} from 'react'
import CustomCard from './CustomCard'
import CustomStack from './CustomStack'
import { useDispatch } from 'react-redux'
import { businessActions } from '../store/business-slice'
import { useNavigate } from 'react-router'
import { Button, TextField } from '@mui/material'
import Map from './Map'


export default function AddBusiness() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const nameInput= useRef('')
    const addressInput= useRef('')
    const hoursInput= useRef('')
    const descriptionInput= useRef('')
    const [business,setBusiness]=useState({})

    const handleChange = () => {
        let Name = nameInput.current.value
        let Address = addressInput.current.value
        let HoursOfOperation = hoursInput.current.value
        let Description = descriptionInput.current.value
        
        setBusiness({
            Name,
            Address,
            HoursOfOperation,
            Description,
        })
    }

    const handleSubmit = () => {
        dispatch(businessActions.addBusiness({
            Name: nameInput.current.value,
            Address: addressInput.current.value,
            HoursOfOperation: hoursInput.current.value,
            Description: descriptionInput.current.value,
        }))
        navigate('/')
    }

    
  return (
    <CustomCard sx={{margin:'40px auto 40px auto', textAlign:'center'}}>
        <h1>
            Add a Business
        </h1>
        {console.log(business)}
        <section>

        <CustomStack sx={{width:350, margin: '40px'}}>
            <TextField label='Name' type='text' variant= 'outlined' inputRef={nameInput} onChange={handleChange}/>
            <TextField label='Address' type='text' variant= 'outlined' inputRef={addressInput} onChange={handleChange}/>
            <TextField label='Hours of Operation' type='text' variant= 'outlined' inputRef={hoursInput} onChange={handleChange}/>
            <TextField label='Description' type='text' variant= 'outlined' inputRef={descriptionInput}onChange={handleChange}/>
            <Button onClick={handleSubmit} variant='contained'>Submit</Button>
        </CustomStack>
        <div>
            <Map business={business}/>
        </div>
        </section>
    </CustomCard>
  )
}
