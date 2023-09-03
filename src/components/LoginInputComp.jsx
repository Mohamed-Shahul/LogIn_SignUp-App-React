import React from 'react'

const LoginInputComp = ({setLogInUser,errMsg,passVisible,logInUser,passShowHide,checkEnter}) => {
  return (
    <>
      <label>E-mail</label>
          <input type="email" onKeyDown={checkEnter} onChange={(e)=>setLogInUser({...logInUser,email:e.target.value})} />
          <div>{errMsg.errEmail}</div>
          <label>Password</label>
          <input type={passVisible.passType} onKeyDown={checkEnter} onChange={(e)=>setLogInUser({...logInUser,pass:e.target.value})}/>
          <span className={passVisible.passShow ? 'loginFocus' : 'loginPassEye'} onClick={passShowHide}>👁</span>
          <div>{errMsg.errPass}</div>
    </>
  )
}

export default LoginInputComp
