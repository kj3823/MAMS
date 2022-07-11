import React, { useState } from "react";
import { ToastContainer , toast , Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css';
import {FaKey , FaEnvelope as FC ,FaUser} from "react-icons/fa";
import { margin } from "@mui/system";
export default function Loginform({Login , error}) { 
    const [details , setDetails] = useState({email: "" , password: "" , Visible: false});
    const submitHandler = e =>{
        e.preventDefault();
        setDetails({...details,Visible: true})
        Login(details);  
    }
    const invokeToast = () =>{
        toast("Please contact the Administrators!",{
            className: "toastcls",
            draggable: true,
            position: toast.POSITION.TOP_CENTER
        });
    };
     return (
               <form onSubmit={submitHandler}>
                <div className="container"><br />
                    <h2 style={{textAlign: "center"}}>Log in</h2><br />
                    <FaUser style={{color: "lightblue" , fontSize: "60px", margin:" 0 auto"}} />
                    <FC style={{color: "white" , fontSize: "30px"}} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" required onChange={e => setDetails({...details,email: e.target.value})} value={details.email}/>
                    <br />
                    <FaKey style={{color: "white" , fontSize: "30px"}}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" required onChange={e => setDetails({...details,password: e.target.value})} value={details.password}/><br />
                    <div className="custom-control custom-checkbox">
                        <button type="submit" name="submit" className="btn btn-dark btn-lg btn-block">Sign in</button><br/>
                        <>
                          <ToastContainer draggable={false} transition={Zoom} autoClose={1000} />
                        </>
                        <button className=" btn btn-info" style={{marginLeft: "0 auto"}}type="button" onClick={invokeToast}>Forgot Password?</button>
                    </div>
                </div>
            </form>
        );
    }


