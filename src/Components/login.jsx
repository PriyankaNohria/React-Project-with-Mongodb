import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './nav.css'
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import {login} from './userfunction';

class Login extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            email:'',
            password:'',
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

     onChange (e) {
         this.setState({ [e.target.name] : e.target.value })
     }
  
     onSubmit(e){
         e.preventDefault()

         const user={
             email:this.state.email,
             password:this.state.password
         }

         login(user).then(res => {
            console.log(res);
            if(res==="wrong password"||res==="user does not exist"||res===undefined)
             {
                 alert(res)
             }
             else{
             //this.props.getUser(user.email)
                window.location='./home';
             }
         })
     }

    render(){
        return (
         <React.Fragment>
           <div className="backgroundimg5" style={{overflow:"hidden"}}>
           <div className="navbar-nav ml4" style={{fontFamily:"couriser",fontSize:"45px"}}>e-mart</div>
             <div class="tc pb5" style={{boxShadow:"5px 10px 8px 10px #888888",marginTop:"7%",marginLeft:"20%",marginRight:"20%"}}>
             <div className="container mt2 tc" style={{marginLeft:"10%",align:"center"}}>
                <form Validate onSubmit={this.onSubmit}>
                <div className="form-row">
                        <div className="form-group col-md-9">
                        <center><h2 style={{fontSize:"40px",color:"black"}}>Login</h2>
                        <p style={{fontSize:"20px"}}>Welcome back! Login to acess Shopping Site</p></center>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="email" className="form-control" style={{fontSize:"1.6rem"}} 
                            name="email" value={this.state.email} placeholder="Enter email" onChange={this.onChange}  required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="password" className="form-control" style={{fontSize:"1.6rem"}} 
                            name="password" value={this.state.password} placeholder="Password" onChange={this.onChange}  required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block shadow col-md-9" style={{fontSize:"1.6rem"}}>Login</button>
                </form>
            </div>
           </div>
          </div>
        </React.Fragment>
        )
    }
}
export default Login; 