import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginAlert from './LoginAlert'
import LoginInputComp from './LoginInputComp'

const LoginPage = () => {

  const [passVisible, setpassShowHide] = useState({ passShow: false, confPassShow: false, passType: 'password' })
  const[logInUser,setLogInUser]=useState({email:'',pass:'',signUpUser:{},modalShow:false})
  const[errMsg,setErrMsg]=useState({})


  let passShowHide = () => {
    if (passVisible.passType === "password") {
        setpassShowHide({ ...passVisible, passType: 'text',passShow:!passVisible.passShow })
    } else {
        setpassShowHide({ ...passVisible, passType: 'password',passShow:!passVisible.passShow })
    }
}

useEffect(()=>{
  const storedUser = JSON.parse(localStorage.getItem("user_info"));
        console.log(storedUser);
        setLogInUser({...logInUser,signUpUser:storedUser})
},[])

function checkEnter(event) {
  if (event.keyCode === 13 || event.which === 13) {
    logIn();
  }
}
 let logIn=()=>{

  let errorMessages = {
    errEmail: '',
    errPass: '',
};
  if(logInUser.email !== logInUser.signUpUser.email){
    errorMessages.errEmail = 'Enter a valid email address';
  }
  else if(logInUser.pass !== logInUser.signUpUser.pass){
    errorMessages.errPass = 'Passwords do not match';
  }

    // Set error messages
    setErrMsg(errorMessages);


// Check if there are no error messages
if (
  !errorMessages.errEmail &&
  !errorMessages.errPass
) {
  setLogInUser({...logInUser,modalShow:true})
}

 }
  return (
    <div>
      <div className="logInBox">

      <div className="header">
           <Link to='/login' ><h3 className='login'>Login</h3></Link>
            <Link to='/'><h3 >SignUp</h3></Link>
      </div>

        <div className="inputDiv">
          <LoginInputComp errMsg={errMsg} passVisible={passVisible} setLogInUser={setLogInUser} logInUser={logInUser} passShowHide={passShowHide} checkEnter={checkEnter}/>
        </div>

        <div className="buttonDiv">
          <button onClick={logIn}>LogIn</button>
        </div>

      </div>

      <LoginAlert
        show={logInUser.modalShow}
        onHide={() => setLogInUser({...logInUser,modalShow:false})}
      />

    </div>
  )
}

export default LoginPage
