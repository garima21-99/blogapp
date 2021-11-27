import React from 'react'
import { NavLink,useState,useEffect } from 'react-router-dom'
import Blogs from './Blogs'

const Login = () => {
    // const [storage, setStorage] = useState("")
    
    // useEffect(() => {
    //     localStorage.setItem('user',JSON.stringify(storage))
    
        
    // }, [storage]);
    return (
        <>
            <div>
                <center>
                    <div className="login-container">
                        <h1 className="login">Login</h1>
                        <form>
                            
                            <label>Name</label><br/>
                            <input className="logininput" type="text" placeholder="Enter your Name" required/><br/>
                            <label>Password</label><br/>
                            <input className="logininput" type="password" placeholder="Enter your Password" required/><br/>
                     <NavLink to="/blog" className="loginbtn">Submit </NavLink>                    
                          </form>
                    </div>
                </center>
            </div>
        </>
    )
}

export default Login
