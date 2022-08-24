import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { deleteRecipe} from "../../../actions/Nutrition";

const Recipe=({recipe, setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6"  align="center">Name: {recipe.name}</Typography>
                
            </div>
            

            <Button size="large" color="primary" onClick={()=> setCurrentId(recipe._id)}>Edit</Button>
            <Button size="small" color="secondary" onClick={() => dispatch(deleteRecipe(recipe._id))}>Delete</Button>
        </Card>
    )
}

export default Recipe;