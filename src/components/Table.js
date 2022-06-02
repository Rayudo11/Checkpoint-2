import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, MenuItem } from '@mui/material';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { businessActions } from '../store/business-slice';




export default function BasicTable(props) {
  const dispatch = useDispatch()
  const {user} =  useSelector(state => state)
 const {state} = props
 console.log(state)

const [anchorEl, setAnchorEl] = useState(null)
const open = Boolean(anchorEl)
const handleClick = (event) => {
  console.log(event.target)
 setAnchorEl(event.currentTarget)
}

const handleClose = () =>{
  setAnchorEl(null)
}

const handleRemove = (e, anchor) => {
  handleClose()
  console.log(anchor.id)
  dispatch(businessActions.removeBusiness(anchor.id))
}


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">HoursOfOperation</TableCell>
            <TableCell align="right">Description</TableCell>
              {user.online && (
                <TableCell align="right">Edit</TableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Id}
              </TableCell>
              <TableCell align="right">
                <Button component={Link} to={`/${row.Id}`}>
                   {row.Name}
                </Button>
                </TableCell>
              <TableCell align="right">{row.Address}</TableCell>
              <TableCell align="right">{row.HoursOfOperation}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              {user.online && (
                  <TableCell align="right">
                    <IconButton key={row.Id} id={row.Id} onClick={handleClick}>
                    <MoreVertIcon/>
                      
                    </IconButton>
                  </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            
      <MenuItem onClick={handleClose}>
        <IconButton>

                <EditIcon/>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={(e) => {handleRemove(e, anchorEl)}}>
          <IconButton>
            
                <DeleteIcon/>
          </IconButton>
      </MenuItem>
      </Menu>
    </TableContainer>
  );
}
