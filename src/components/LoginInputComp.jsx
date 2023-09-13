import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const LoginInputComp = ({ userState, setUserState }) => {

    const [handlePass, setHandlePass] = useState({ showPassword: false, passType: 'password' })
    const { register, handleSubmit, formState:{errors}, watch, reset } = useForm()

    const [logInUser, setLogInUser] = useState({ signUpUser: {}, modalShow: false })


    let checkEnter = (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            onSubmit();
        }
    }

    let onSubmit = () => {
        reset();
        setUserState({ ...userState, modalShow: true })
    }
    let handleClickShowPassword = () => {
        if (handlePass.passType === 'password') {
            setHandlePass({ ...handlePass, showPassword: !handlePass.showPassword, passType: 'text' })
        }
        else {
            setHandlePass({ ...handlePass, showPassword: !handlePass.showPassword, passType: 'password' })
        }
    }
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setLogInUser({ ...logInUser, signUpUser: storedUser })
        }
    }, [])

    return (
        <>
            <form action='/' className='form' onSubmit={handleSubmit(onSubmit)}>

                <Box>
                    <TextField fullWidth label="Email-Id" variant="outlined" type="email" onKeyDown={checkEnter} {...register('userEmail', {
                        required: {
                            value: true,
                            message: 'userEmail is required'
                        },
                        validate: {
                            checkEmail: (fieldValue) => {
                                return logInUser.signUpUser.userEmail === fieldValue ||
                                    'Email does not match'
                            }
                        }
                    })} error={!!errors.userEmail} helperText={errors.userEmail?.message} />
                </Box>

                <Box>
                    <TextField fullWidth label="Password" variant="outlined" type={handlePass.passType} onKeyDown={checkEnter} {...register('loginUserPass', {
                        required: {
                            value: true,
                            message: 'password is must'
                        },
                        validate: {
                            checkPass: (fieldValue) => {
                                return logInUser.signUpUser.pass === fieldValue || 'password does not match'
                            }
                        }
                    })}
                        error={!!errors.loginUserPass} helperText={errors.loginUserPass?.message}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end"
                                    onClick={handleClickShowPassword}
                                >

                                    {handlePass.showPassword ? <Visibility /> : <VisibilityOff />}

                                </InputAdornment>
                            )
                        }} />
                </Box>


                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button type='submit' variant="contained" sx={{ width: '100%' }} >Log In</Button>
                </Box>
            </form>

        </>
    )
}

export default LoginInputComp
