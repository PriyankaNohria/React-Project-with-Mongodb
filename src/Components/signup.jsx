import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './nav.css'
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import {sign} from './userfunction';

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    // componentDidMount(){  //lifecycle method of react automatically call before displaying anything on page
    //     this.setState({ 
    //        firstname:'first',
    //        lastname:'last',
    //        email:'email@gmail.com',
    //        password:'****'
    //     })
    // }
     onChange(e){
         this.setState({ [e.target.name] :e.target.value })
     }
  
     onSubmit(e){
         e.preventDefault();

         const user={
             firstname:this.state.firstname,
             lastname:this.state.lastname,
             email:this.state.email,
             password:this.state.password,
             cart:{
                 s:'',
                 name:'',
                 price:''
             },
             history:{
                 order:''
             }
         }

         sign(user).then(res => {
             if(res==undefined)
             {
                 alert("Already Exist")
             }
             else
             window.location='./login';
         })
         
     }
    render(){
        return (
         <React.Fragment>
           <div className="backgroundimg6" style={{overflow:"hidden"}}> 
           <div className="navbar-nav ml4" style={{fontFamily:"couriser",fontSize:"45px"}}>e-mart</div>
             <div class="tc pb5 pt3" style={{boxShadow:"5px 10px 8px 10px #888888",marginTop:"5%",marginLeft:"20%",marginRight:"20%"}}>
             <div className="container mt2 tc" style={{marginLeft:"10%",align:"center"}}>
                <form Validate onSubmit={this.onSubmit}>
                <div className="form-row">
                        <div className="form-group col-md-9">
                        <center><h2 style={{fontSize:"40px",color:"black"}}><span class="glyphicon glyphicon-user ml3 mr3" role="img"></span>Create Your Account</h2></center>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="text" className="form-control" style={{fontSize:"1.5rem"}}
                            name="firstname" value={this.state.firstname} placeholder="First Name" onChange={this.onChange}  required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="text" className="form-control" style={{fontSize:"1.5rem"}}
                            name="lastname" value={this.state.lastname} placeholder="Last Name" onChange={this.onChange} required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="email" className="form-control" style={{fontSize:"1.5rem"}} 
                            name="email" value={this.state.email} placeholder="Enter Email" onChange={this.onChange}  required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="password" className="form-control" style={{fontSize:"1.5rem"}}
                            name="password" value={this.state.password} placeholder="Password" onChange={this.onChange}  required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block shadow col-md-9" style={{fontSize:"1.5rem"}}>Signup</button>
                </form>
            </div>
          </div></div>
        </React.Fragment>
        )
    }
}
export default Signup; 