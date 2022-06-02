import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {userActions} from '../store/user-slice'
import { useNavigate } from 'react-router';


export default function ButtonAppBar() {
  const navigate = useNavigate()
  const {user} =  useSelector(state => state)
  const dispatch = useDispatch()
   const handleClick = () => {
    dispatch(userActions.logout())
    document.cookie = "loggedIn="
    navigate('/login')
   }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user.online ? (
            <Button onClick={handleClick} color="inherit">Logout</Button>
          ) : (
            <Button component={Link} to='/login' color="inherit">Login</Button>
          )}
          <Button component={Link} to='/' color="inherit">Dashboard</Button>
          <Button component={Link} to='/add-business' color="inherit">Add Business</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
