import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterAlert from './RegisterAlert'
import InputComp from './InputComp'
import { Box, Typography } from '@mui/material'

const SignUpPage = () => {

    const[userState,setUserState]=useState({modalShow:false})

    return (
        <>

            <Box className="signUpBox" 
                sx={{
                    width: '380px',
                    height: '600px',
                    backgroundColor: 'white',
                    borderRadius:'25px',
                    display:'flex',
                    flexDirection:'column',
                    padding:'20px',
                    gap:'20px'
                  }}
            >

                <Box className="header"
                    sx={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Link className='link' to='/login'><Typography>Login</Typography></Link>
                    <Link className='link signup' to='/'><Typography>SignUp</Typography></Link>
                </Box>

                <Box className="inputDiv" sx={{
                    height:'500px',
                    padding:'10px',
                }}>
                    <InputComp userState={userState} setUserState={setUserState} />
                </Box>

              

            </Box>


            <RegisterAlert
                show={userState.modalShow}
                onHide={() => setUserState({ ...userState, modalShow: false })}
            />


        </>
    )
}

export default SignUpPage
