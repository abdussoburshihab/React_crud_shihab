import {FormControl,FormGroup,InputLabel,Input,Button, makeStyles,Typography} from "@material-ui/core";


const useStyle= makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '&>*':{
            marginTop:20
        }

    }
})



const AddUsers = () =>{
    const classess=useStyle();
    return(
        <FormGroup className={classess.container}>
            <Typography variant="h4">Add User</Typography>
        <FormControl>
        <InputLabel >Name</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
      <InputLabel >Username</InputLabel>
      <Input />
    </FormControl>
    <FormControl>
    <InputLabel >Email</InputLabel>
    <Input />
  </FormControl>
  <FormControl>
    <InputLabel >Phone</InputLabel>
    <Input />
  </FormControl>
  <Button variant="contained">Add User</Button>
  </FormGroup>
  
    )
}


export default AddUsers;