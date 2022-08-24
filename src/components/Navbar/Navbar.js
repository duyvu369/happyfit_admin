import React,{useState,useEffect} from "react";
import { AppBar, Avatar, Toolbar, Typography,Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
import useStyles from './styles';
const NavBar = () => {
    const classes = useStyles();
    const [ user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)

    useEffect(()=>{
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    })
    return (
        
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>

        </div>
        <Typography component={Link} to="/"className={classes.heading} variant="h2" align="center">
            Exercises
        </Typography>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName}>{user.result.name}</Typography>
                    <Button className={classes.logout} variant="contained" color="secondary" >Log Out</Button>
                </div>
            ) : (<Button component={Link} to="/Auth" variant="contained" color="primary">Log in</Button> )}
        </Toolbar>
    </AppBar>
)}

export default NavBar;