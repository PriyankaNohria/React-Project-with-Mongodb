import React,{Component} from 'react';
import './nav.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {logout} from './userfunction';

class Navbar extends Component{
   

//   fun(e){

//     e.preventDefault()

//     const user={
//         email:this.state.email,
//         password:this.state.password
//     }

//     logout(user).then(res=>{
//       if(res){
//         console.log("logout");
//           window.location='./enter';}
//   })
// }  

    render(){
      return(
         <div className="d1 row">
           <div className="nav1 col">
            <nav className="navbar navbar-expand-lg navbar-lg">
              <div className="navbar-nav ml3" style={{fontFamily:"couriser",fontSize:"50px"}}>e-mart</div>
               <div className="navbar-nav">
               <Link className="lik1 ml6 black" to="/home">Home</Link>
               </div>
               <div className="navbar-nav">
               <Link className="lik2 ml4 black" to="/top">Top</Link>
               </div> 
               <div className="navbar-nav">
               <Link className="lik3 ml4 black" to="/Shoes">Footwear</Link> 
               </div>
               <div className="navbar-nav">
               <Link className="lik4 ml4 black" to="/watch">Watch</Link>
               </div>
               <div className="navbar-nav">
                  <Link className="l1 black" to="/profile"><span class="glyphicon glyphicon-user ml4" style={{marginLeft:"570px"}} role="img"></span></Link>
               </div>
               <div className="navbar-nav ml5">
                <Link className="l1 black" to="/addcart"><span class="glyphicon glyphicon-shopping-cart" role="img"></span></Link>
               </div>
              
            </nav>
           </div>
         </div>
)
}
}
export default Navbar;