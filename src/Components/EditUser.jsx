
import {FormGroup,FormControl,InputLabel,Input,Button,makeStyles,Typography} from '@material-ui/core';
import { useEffect } from 'react';
import  { useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';

import {editUser, getUsers} from '../service/api';


const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
       '&*': {
           marginTop:20
       }
    }
})


const initialvalues={
    name:'',
    username:'',
    email:'',
    phone:''
}









const EditUser = () => {
   
    const [user,setuser]=useState(initialvalues);
    const{name,username,email,phone}=user;
const classes =useStyle();
    const history=useHistory();
    const {id}=useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setuser(response.data);
    }

const onValueChange=(e)=>{
  
    setuser({...user,[e.target.name]:e.target.value})


}

        const editUserDetails= async ()=>{
            await editUser(id,user);
            history.push('./all');

        }

   
                return (
            <FormGroup className={classes.container}>
                <Typography variant="h4">Edit User</Typography>
                <FormControl>
                    <InputLabel>
                    Name
                    </InputLabel>
                    <Input onChange={(e)=> onValueChange(e) } name='name' value={name} />
                </FormControl>

                <FormControl>
                    <InputLabel>
            Username
                    </InputLabel>
                    <Input onChange={(e)=> onValueChange(e) } name='username' value={username} />
                </FormControl>

                <FormControl>
                    <InputLabel>
                Email
                    </InputLabel>
                    <Input onChange={(e)=> onValueChange(e) } name='email' value={email} />
                </FormControl>

                <FormControl>
                    <InputLabel>
                Phone
                    </InputLabel>
                    <Input onChange={(e)=> onValueChange(e) } name='phone'value={phone} />
                </FormControl>
                <Button variant="contained" onClick={()=> editUserDetails()} color="primary">Edit User</Button>
            </FormGroup>


                )
                
                    
                }
export default EditUser;