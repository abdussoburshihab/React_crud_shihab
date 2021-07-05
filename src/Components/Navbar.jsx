import {AppBar , Toolbar ,Typography,makeStyles} from '@material-ui/core';

const useStyle = makeStyles ({
    header:{
        background:'#111111'
    }

    
})

const Navbar = () =>{
    const classes =useStyle();
    return (
        <AppBar className={classes.header} position="static" >
            <Toolbar>
          <Typography component="h2">Code for interview</Typography>
          <Typography component="h2">All user</Typography>
          <Typography component="h2">Add user</Typography>
            </Toolbar>
        </AppBar>
        
    )
}
export default Navbar;