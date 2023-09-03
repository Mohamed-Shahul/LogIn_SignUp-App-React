import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterAlert from './RegisterAlert'
import InputComp from './InputComp'

const SignUpPage = () => {

    const [passVisible, setpassShowHide] = useState({ passShow: false, confPassShow: false, passType: 'password', confPassType: 'password' })
    const [user, setUser] = useState({ name: '', email: '', pass: '', confPass: '', modalShow: false })
    const [errMsg, setErrMsg] = useState({})

    let passShowHide = () => {
        if (passVisible.passType === "password") {
            setpassShowHide({ ...passVisible, passType: 'text', passShow: !passVisible.passShow })
        } else {
            setpassShowHide({ ...passVisible, passType: 'password', passShow: !passVisible.passShow })
        }
    }

    let confPassShowHide = () => {
        if (passVisible.confPassType === "password") {
            setpassShowHide({ ...passVisible, confPassType: 'text', confPassShow: !passVisible.confPassShow })
        } else {
            setpassShowHide({ ...passVisible, confPassType: 'password', confPassShow: !passVisible.confPassShow })
        }
    }

    function checkEnter(event) {
        if (event.keyCode === 13 || event.which === 13) {
          handleSubmit();
        }
      }
    

    let handleSubmit = () => {

        const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailRes = result.test(String(user.email).toLowerCase());

        let errorMessages = {
            errName: '',
            errEmail: '',
            errPass: '',
            errConfPass: ''
        };

        if (!user.name) {
            errorMessages.errName = 'Name is required';
        }

        if (!emailRes) {
            errorMessages.errEmail = 'Enter a valid email address';
        }

        if (user.pass.length < 8) {
            errorMessages.errPass = 'Password must be 8 characters';
        }

        if (user.pass !== user.confPass) {
            errorMessages.errConfPass = 'Passwords do not match';
        }

        // Set error messages
        setErrMsg(errorMessages);

        // Check if there are no error messages
        if (
            !errorMessages.errName &&
            !errorMessages.errEmail &&
            !errorMessages.errPass &&
            !errorMessages.errConfPass
        ) {
            localStorage.setItem("user_info", JSON.stringify(user));
            setUser({ name: '', email: '', pass: '', confPass: '', modalShow: true });
        }

        

    }
    return (
        <div>
            <div className="signUpBox">

                <div className="header">
                    <Link to='/login'><h3>Login</h3></Link>
                    <Link to='/'><h3 className='signup'>SignUp</h3></Link>
                </div>

                <div className="inputDiv">
                    <InputComp user={user} setUser={setUser} errMsg={errMsg} passVisible={passVisible} passShowHide={passShowHide} confPassShowHide={confPassShowHide}
                    checkEnter={checkEnter}/>
                </div>

                <div className="buttonDiv">
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>


            <RegisterAlert
                show={user.modalShow}
                onHide={() => setUser({ ...user, modalShow: false })}
            />


        </div>
    )
}

export default SignUpPage
