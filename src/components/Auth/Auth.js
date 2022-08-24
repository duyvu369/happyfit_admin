import React,{useState, useEffect} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { userLogin } from '../../actions/Auth';
import {useNavigate} from 'react-router-dom'



function Auth() {
    const classes = useStyles();
    const [isSignup,setIsSignup]= useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [imageUrl,setImageUrl]=useState('')
    const [confirmedPassword, setConfirmedPassword]=useState('');
    const navigate = useNavigate();

    const switchMode =()=>{
        setIsSignup((prevIsSignup)=> !prevIsSignup);
        handleShowPassword(false)
    }
    const handleShowPassword=()=> setShowPassword((prevShowPassword)=> !prevShowPassword)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if (!isSignup){
                const credential ={
                    email: email,
                    password: password
                }
                const {data} = await userLogin(credential);
                localStorage.setItem('userInfo',JSON.stringify(data))
                // let path = '/'
                // navigate(path)
                // console.log(data)
            } else {
            }
          
          }
        catch(err){
          console.log(err)
        }};
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign up' : ' Login'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSignup ? (
                        <>
                        <Input 
                        name='email' 
                        label='Email Address' 
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email" />

                        <Input 
                        name='password' 
                        label='Password' 
                        
                        type={showPassword ? "text" : "password"}
                        onChange={(e)=> setPassword(e.target.value)} /> 
        
                        <Input 
                        name='confirmedPassword' 
                        label='Confirmed password' 
                        onChange={(e)=> setConfirmedPassword(e.target.value)}
                         />
                     
                        <Input 
                        name='firstname' 
                        label='Firstname' 
                        onChange={(e)=> setFirstname(e.target.value)}
                        half />
                        
                        <Input 
                        name='lastname' 
                        label='Lastname' 
                        onChange={(e)=> setLastname(e.target.value)}
                        half />
                        
                        <Input 
                        name='imageUrl' 
                        label='Image Link' 
                        onChange={(e)=> setImageUrl(e.target.value)} />
                        <Button color="secondary" type="submit" fullWidth variant='contained' className={classes.submit}>Register</Button>
                        </>
                    ) : <div>
                       <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10' onSubmit={handleSubmit}>
                            <div className='flex flex-col py-2'>
                            <Input
                            type={'text'} 
                            name={'email'} 
                            placeholder={'Email'} 
                            onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <div className='flex flex-col py-2'>
                            <Input 
                            type={handleShowPassword} 
                            name={'password'} 
                            placeholder={'Password'}
                            onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <Button color="secondary" type="submit" fullWidth variant='contained' className={classes.submit}>Log In</Button>
                        </form>
                        </div>}
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Button onClick={switchMode}>{isSignup ? 'Already have an account? Login' : "Don't have an account? Register"}</Button>
                            </Grid>

                        </Grid>
                        
                        
            </Grid>
        </form>
        </Paper>

    </Container>
  )
}


export default Auth