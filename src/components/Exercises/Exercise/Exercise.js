import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { deleteExercise} from "../../../actions/Exercises";

const Exercise=({exercise, setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <div className= {`${classes.overlay}`}>
                <Typography variant="h6" align="center" >{exercise.name}</Typography>
                
            </div>

            <Button size="large" color="primary" onClick={()=> setCurrentId(exercise._id)}>Edit</Button>
            <Button size="small" color="secondary" onClick={() => dispatch(deleteExercise(exercise._id))}>Delete</Button>
        </Card>
    )
}

export default Exercise;