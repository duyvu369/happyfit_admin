import {Container, Typography, Grow, Grid} from '@material-ui/core';
import Exercises from "../Exercises/Exercises";
import Form from "../Form/Form";
import React,{useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { getExercises } from '../../actions/Exercises';
import Nutrition from '../Nutrition/Nutrition';
import { getNutrition } from '../../actions/Nutrition';
import NutritionForm from '../NutritionForm/NutritionForm';


const Home = () => {
    const [currentId,setCurrentId]= useState(null);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getExercises());
        dispatch(getNutrition())
    },[dispatch])

  return (
    <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch">
                    <Grid item xs={8} sm={4}>

                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <br/>
                        <NutritionForm currentId={currentId} setCurrentId={setCurrentId} />

                        
                    </Grid>
                    
                <Grid item xs={8} sm={3}>

                        <h1>EXERCISES LIST</h1>
                        <Exercises setCurrentId={setCurrentId}/>
                        
                    </Grid>
                <Grid item xs={8} sm={3}>

                        <h1>NUTRITION LIST</h1>
                        <Nutrition setCurrentId={setCurrentId}/>
                        
                    </Grid>
                
                </Grid>
            </Container>
        </Grow>
  )
}

export default Home;