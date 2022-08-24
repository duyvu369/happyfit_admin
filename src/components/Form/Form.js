import React,{useState, useEffect} from "react";
import { TextField, Button,Typography, Paper } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { createExercise,updateExercise } from "../../actions/Exercises";


const Form = ( {currentId, setCurrentId} )=>{
    const [exerciseData, setExerciseData]= useState({
        name:'', description:'', difficulty:'', category:[],tip:'',videoURL:''
    });
    const exercise = useSelector((state)=>currentId ? state.exercises.find((e)=>e._id===currentId):null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(exercise) setExerciseData(exercise);
    },[exercise])

    const handleSubmit= async (e)=>{
        e.preventDefault();

        if (currentId){
            dispatch(updateExercise(currentId,exerciseData))
        } else{dispatch(createExercise(exerciseData))}
        clear();
    }
    const clear =()=>{
        setCurrentId(null);
        setExerciseData({
            name:'', description:'', difficulty:'', category:[],tip:'',videoURL:''
    })
    }
    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ?'EXERCISE UPDATE':"EXERCISE POST"}</Typography>
            <TextField 
            name="name" 
            variant="outlined" 
            label="Name" 
            fullWidth
            value={exerciseData.name}
            onChange={((e)=> setExerciseData({...exerciseData, name: e.target.value}))}/>

            <TextField 
            name="description" 
            variant="outlined" 
            label="Description" 
            fullWidth
            value={exerciseData.description}
            
            onChange={((e)=> setExerciseData({...exerciseData, description: e.target.value}))}/>

            <TextField 
            name="difficulty" 
            variant="outlined" 
            label="Difficulty" 
            fullWidth
            value={exerciseData.difficulty}
            onChange={((e)=> setExerciseData({...exerciseData, difficulty: e.target.value}))}/>

            <TextField 
            name="category" 
            variant="outlined" 
            label="Category" 
            fullWidth
            value={exerciseData.category}
            onChange={((e)=> setExerciseData({...exerciseData, category: e.target.value.split(',')}))}/>

            <TextField 
            name="tip" 
            variant="outlined" 
            label="Tip" 
            fullWidth
            value={exerciseData.tip}
            onChange={((e)=> setExerciseData({...exerciseData, tip: e.target.value}))}/>

            <TextField 
            name="videoURL" 
            variant="outlined" 
            label="VideoURL" 
            fullWidth
            value={exerciseData.videoURL}
            onChange={((e)=> setExerciseData({...exerciseData, videoURL: e.target.value}))}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"  fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear}  fullWidth>Clear</Button>
        </form>

        </Paper>
    )
        
    
};

export default Form;