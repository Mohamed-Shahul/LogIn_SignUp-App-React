import {  Visibility, VisibilityOff } from '@mui/icons-material';
import { Box,Button,InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const InputComp = ({ userState,setUserState }) => {

    const[handlePass,setHandlePass]=useState({showPassword:false,passType:'password'})
    const { register, handleSubmit, formState, watch, reset } = useForm()
    const { errors } = formState;
    const passValue = watch('pass');


    let checkEnter = (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            onSubmit();
        }
    }

    let onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUserState({...userState,modalShow:true})
        reset();
    }

    let handleClickShowPassword=()=>{
        if(handlePass.passType==='password'){
        setHandlePass({...handlePass,showPassword:!handlePass.showPassword,passType:'text'})
        }
        else{
        setHandlePass({...handlePass,showPassword:!handlePass.showPassword,passType:'password'})
        }
    }

    return (
        <>

        <form className='form' action='/login'  onSubmit={handleSubmit(onSubmit)}>
                <Box>
                <TextField fullWidth  label="UserName" variant="outlined" type='text'  {...register('userName', { required: 'userName is required'  })} onKeyDown={checkEnter} error={!!errors.userName} helperText={errors.userName?.message}/>
                </Box>

                <Box>
                <TextField fullWidth label="Email-Id" variant="outlined"  {...register('userEmail', {
                    required:'Email is required',
                    pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Invalid E-mail Format'
                    }
                })} onKeyDown={checkEnter} error={!!errors.userEmail} helperText={errors.userEmail?.message} />
                </Box>

                <Box>
                <TextField fullWidth label="Password" variant="outlined" type={handlePass.passType} {...register('pass', {
                    required: {
                        value: true, message: 'PassWord is required'
                    },
                    validate: {
                        checkPass: (fieldValue) => {
                            return fieldValue.length >= 8 ||
                                'Password 8 characters must'
                        }
                    }
                })} onKeyDown={checkEnter} error={!!errors.pass} helperText={errors.pass?.message} 
                InputProps={{ 
                    endAdornment: (
                          <InputAdornment  position="end" 
                          onClick={handleClickShowPassword}
                          >

                          {handlePass.showPassword ? <Visibility /> : <VisibilityOff />}
                        
                      </InputAdornment>
                    )
                  }}
                />
                </Box>
                <Box>
                <TextField fullWidth label="Conf-Password" variant="outlined"  type='password'  {...register('confPass', {
                    required: {
                        value: true, message: 'Confirm Password is required'
                    },
                    validate: {
                        checkConfPass: (fieldValue) => {
                            return fieldValue === passValue || 'Password does not match'
                        }
                    }
                })} onKeyDown={checkEnter} error={!!errors.confPass} helperText={errors.confPass?.message}/>

                </Box>

                <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                <Button type='submit' variant="contained" sx={{width:'100%'}} >Submit</Button>
                </Box>
                
            </form>
            
            

        </>
    )
}

export default InputComp
