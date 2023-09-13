import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import LoginAlert from './LoginAlert'
import LoginInputComp from './LoginInputComp'
import { Box, Typography } from '@mui/material'

const LoginPage = () => {
  const[userState,setUserState]=useState({modalShow:false})


 
  return (
    <>
      <Box className="logInBox" sx={{
                    width: '380px',
                    height: '400px',
                    backgroundColor: 'white',
                    borderRadius:'25px',
                    display:'flex',
                    flexDirection:'column',
                    padding:'20px',
                    gap:'20px'
                  }}>

      <Box className="header" sx={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
           <Link to='/login' className='link login' ><Typography>Login</Typography></Link>
            <Link to='/' className='link'><Typography >SignUp</Typography></Link>
      </Box>

        <Box className="inputDiv" sx={{
                    height:'500px',
                    padding:'10px',
                }}>
          <LoginInputComp userState={userState} setUserState={setUserState}/>
        </Box>

      </Box>

      <LoginAlert
        show={userState.modalShow}
        onHide={() => setUserState({...userState,modalShow:false})}
      />

    </>
  )
}

export default LoginPage
