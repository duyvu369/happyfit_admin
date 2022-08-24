import React,{useState, useEffect} from "react";
import { TextField, Button,Typography, Paper } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { createRecipe,updateRecipe } from "../../actions/Nutrition";


const NutritionForm = ( {currentId, setCurrentId} )=>{
    const [nutritionData, setNutritionData]= useState({
        name:'', description:'', ingredient:'', nutrition:'',instruction:'',imageUrl:''
    });
    const nutrition = useSelector((state)=>currentId ? state.nutrition.find((e)=>e._id===currentId):null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(nutrition) setNutritionData(nutrition);
    },[nutrition])

    const handleSubmit= async (e)=>{
        e.preventDefault();

        if (currentId){
            dispatch(updateRecipe(currentId,nutritionData))
        } else{dispatch(createRecipe(nutritionData))}
        clear();
    }
    const clear =()=>{
        setCurrentId(null);
        setNutritionData({
            name:'', description:'', ingredient:'', nutrition:'',instruction:'',imageUrl:''
    })
    }
    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ?'NUTRITION EDIT':"NUTRITION POST"}</Typography>
            <TextField 
            name="name" 
            variant="outlined" 
            label="Name" 
            fullWidth
            value={nutritionData.name}
            onChange={((e)=> setNutritionData({...nutritionData, name: e.target.value}))}/>

            <TextField 
            name="description" 
            variant="outlined" 
            label="Description" 
            fullWidth
            value={nutritionData.description}
            
            onChange={((e)=> setNutritionData({...nutritionData, description: e.target.value}))}/>

            <TextField 
            name="ingredient" 
            variant="outlined" 
            label="Ingredient" 
            fullWidth
            value={nutritionData.ingredient}
            onChange={((e)=> setNutritionData({...nutritionData, ingredient: e.target.value}))}/>

            <TextField 
            name="nutrition" 
            variant="outlined" 
            label="Nutritional value" 
            fullWidth
            value={nutritionData.nutrition}
            onChange={((e)=> setNutritionData({...nutritionData, nutrition: e.target.value}))}/>

            <TextField 
            name="instruction" 
            variant="outlined" 
            label="Instruction" 
            fullWidth
            value={nutritionData.instruction}
            onChange={((e)=> setNutritionData({...nutritionData, instruction: e.target.value}))}/>

            <TextField 
            name="imageUrl" 
            variant="outlined" 
            label="Picture link" 
            fullWidth
            value={nutritionData.imageUrl}
            onChange={((e)=> setNutritionData({...nutritionData, imageUrl: e.target.value}))}/>

            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"  fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear}  fullWidth>Clear</Button>
        </form>

        </Paper>
    )
        
    
};

export default NutritionForm;