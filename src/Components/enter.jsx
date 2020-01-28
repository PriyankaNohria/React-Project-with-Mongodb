import React,{Component} from 'react';
import './nav.css';
import 'tachyons';
import {Link} from 'react-router-dom';

class Enter extends Component{
    render(){
        return (
            <div class="backgroundimg7">
               <h1 class="ml3" style={{fontStyle:"italic",fontSize:"70px"}}>Welcome to e-mart</h1>
                <marquee direction="down" style={{marginLeft:"9%",marginTop:"10px"}}><h2 style={{fontStyle:"italic",fontSize:"30px"}}>Please login or signup</h2></marquee>
                <div className="navbar navbar-expand-lg navbar-lg" style={{marginLeft:"9%",marginTop:"22px"}}>
                <div className="navbar-nav">
                <button className="btn btn-danger ml4 shadow col-lg-12" style={{fontSize:"2rem"}}><Link class="lik6 black pa0" to="/signup">Signup</Link></button>
                </div>
                <div className="navbar-nav">
                <button className="btn btn-danger ml5 shadow col-lg-12" style={{fontSize:"2rem"}}><Link class="lik6 black pa0" to="/login">Login</Link></button>
                </div>
                </div>
            </div>
        )
    }
}
export default Enter;