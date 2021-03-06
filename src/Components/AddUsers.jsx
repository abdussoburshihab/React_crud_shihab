
import {FormGroup,FormControl,InputLabel,Input,Button,makeStyles,Typography} from '@material-ui/core';
import  { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {adduser} from '../service/api';


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









const AddUsers = () => {
   
    const [user,setuser]=useState(initialvalues);
    const{name,username,email,phone}=user;
const classes =useStyle();
    const history=useHistory();

const onValueChange=(e)=>{
  
    setuser({...user,[e.target.name]:e.target.value})


}

        const addUserDetails= async ()=>{
            await adduser(user);
            history.push('./all');

        }

   
                return (
            <FormGroup className={classes.container}>
                <Typography variant="h4">Add User</Typography>
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
                <Button variant="contained" onClick={()=> addUserDetails()} color="primary">Add User</Button>
            </FormGroup>


                )
                
                    
                }
export default AddUsers;