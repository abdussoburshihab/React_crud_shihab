import { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../service/api";
import {TableCell,TableRow,Table,TableHead,TableBody, makeStyles} from '@material-ui/core';

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
                        </TableRow>
                    ))
                    }
            </TableBody>
        </Table>
    );
}


export default AllUsers;