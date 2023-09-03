import React from 'react'

const InputComp = ({user,setUser,errMsg,passVisible,passShowHide,confPassShowHide,checkEnter}) => {
    return (
        <>
            <label>Name</label>
            <input type="text" value={user.name}  onKeyDown={checkEnter}  onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
            <div>{errMsg.errName}</div>
            <label>E-mail</label>
            <input type="email" value={user.email} onKeyDown={checkEnter} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
            <div>{errMsg.errEmail}</div>
            <label>Password</label>
            <input type={passVisible.passType} value={user.pass} onKeyDown={checkEnter} onChange={(e) => { setUser({ ...user, pass: e.target.value }) }} />
            <span className={passVisible.passShow ? 'focus' : 'passEye'} onClick={passShowHide}>👁</span>
            <div>{errMsg.errPass}</div>
            <label>Confirm Password</label>
            <input type={passVisible.confPassType} value={user.confPass} onKeyDown={checkEnter} onChange={(e) => { setUser({ ...user, confPass: e.target.value }) }} />
            <span className={passVisible.confPassShow ? 'focusConf' : 'confPassEye'} onClick={confPassShowHide}>👁</span>
            <div>{errMsg.errConfPass}</div>
        </>
    )
}

export default InputComp
