import React from "react";
import Exercise from "./Exercise/Exercise";
import { useSelector } from "react-redux";
import { Grid,CircularProgress } from "@material-ui/core";
import useStyles from './styles';

const Exercises=( {setCurrentId} )=>{
    const classes = useStyles();
    const exercises = useSelector((state=>state.exercises))
    console.log(exercises)
    return(
        !exercises.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {exercises.map((exercise)=>(
                    <Grid key={exercise._id} item xs={12} sml={6}>
                        <Exercise exercise={exercise} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid>
        )
    )
}

export default Exercises;