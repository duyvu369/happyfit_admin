import React from "react";
import Recipe from "./Recipe/Recipe";
import { useSelector } from "react-redux";
import { Grid,CircularProgress } from "@material-ui/core";
import useStyles from './styles';


const Nutrition=( {setCurrentId} )=>{
    const classes = useStyles();
    const nutrition = useSelector((state=>state.nutrition))
    console.log(nutrition)
    return(
        !nutrition.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {nutrition.map((recipe)=>(
                    <Grid key={recipe._id} item xs={12} sml={6}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid>
        )
    )
}

export default Nutrition;