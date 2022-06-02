import { Button, TextField } from '@mui/material'
import React,{useRef,useEffect} from 'react'
import CustomCard from './CustomCard'
import CustomStack from './CustomStack'
import {useDispatch, useSelector} from 'react-redux'
import {userActions} from '../store/user-slice'
import {useNavigate} from 'react-router'



function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} =  useSelector(state => state)
  const userNameInput = useRef('')
  const passwordInput = useRef('')
  const handleSubmit = () => {
    console.log(userNameInput.current)
    console.log(passwordInput.current.value)
    let username = userNameInput.current.value
    let password = passwordInput.current.value
    const body= {
      username,password
    }
    console.log(body)
    dispatch(userActions.login(body))
    document.cookie = "loggedIn=true;max-age=60*1000"
    navigate('/')
  }

  useEffect(()=>{
    console.log(user)
  }, [user])

  return (
   <CustomCard sx={{margin:'40px auto 40px auto', textAlign:'center'}}>
     <h1>Login</h1>
     <CustomStack sx={{width:350, margin: '40px'}}>
       <TextField inputRef={userNameInput} type='text' label='username' variant='outlined'/>
       <TextField inputRef={passwordInput} type='password' label='password' variant='outlined'/>
       <Button onClick={handleSubmit} variant='contained'>Submit</Button>
     </CustomStack>
   </CustomCard>
  )
}

export default Login