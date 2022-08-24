import React from 'react'
import { IconButton, TextField,Grid, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({ type, name, placeholder, onChange, value,handleShowPassword }) => {
  return (
        <>
        <input 
          type={type} 
          className="rounded-lg mt-2 p-2"  
          name={name} 
          value = {value}
          placeholder={placeholder}
          onChange = {onChange}
          InputProps={name==='password' && {
            endAdornment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type==="password" ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        }}
          />
        </>
  )
}

export default Input;