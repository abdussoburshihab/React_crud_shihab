import { useState } from "react";
import { useEffect } from "react";
import { getUsers,deleteUser } from "../service/api";
import {TableCell,TableRow,Table,TableHead,TableBody, makeStyles,Button} from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyle= makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
    },
    thead:{
        '&>*':{
            background:'black',
            color:'white',
            fontSize:20
        }
    },

row:{
    '&>*':{
        fontSize:20
    }
}





})






const AllUsers = () =>{

    const [users,setusers]=useState([]);
    const classes=useStyle();

    useEffect(()=>{
getAllUsers();
    },[])

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

const getAllUsers = async ()=>{
    const response = await getUsers();
    
    console.log(response.data);
    setusers(response.data);
}

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.row}>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                            </TableCell>
                        </TableRow>
                    ))
                    }
            </TableBody>
        </Table>
    );
}


export default AllUsers;