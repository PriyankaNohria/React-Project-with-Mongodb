import React,{Component} from 'react';
import Navbar from './navbar';
import './ss.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';
//import {addtocart} from './userfunction';

class TT extends Component{

  constructor(){
    super();
    this.state={
        item:[],
    }
    // this.addcart=this.addcart.bind(this);
}

// componentDidMount(){
//   console.log("Component is mounted");
//   fetch('http://localhost:3009/top1')    
//   .then(res => res.json())
//   .then(res => {
//       console.log(JSON.stringify(res));
//       this.setState({top1:res})
//   })
// }

  fun(val){
    this.props.ff1((val));
  }

  
    render(){
        return (
          <div className="t1 backgroundimg" style={{overflow:"hidden"}}> 
                <Navbar/>
               <div className="container mt4"> 
                <div className="table-responsive">
                    <table className="table table-borderless" style={{width:"75%",margin:"auto"}}>
                      <tr>
                        <th style={{align:"center"}}>
                        <img class="ig1" style={{boxShadow:"2px 2px"}} src={this.props.info1.s} alt="Picture"/>
                        </th>
                        <th colspan="4" style={{align:"center"}}>
                          <p class="f1" style={{fontSize:"60px"}}>{this.props.info1.name}</p>
                          <p class="fw9-ns f3 ma0 tc ma0 red" style={{textShadow:"3px 3px black",fontSize:"30px"}}>Price : {this.props.info1.price}</p>
                          <button className="btn btn-danger mt4 grow fw7-ns black ml5 col-md-12" style={{color:"black",fontSize:"20px"}} onclick={()=>this.fun(this.props.info1)}><Link class="l1 black" to="/addcart">Add to Cart</Link></button>
                        </th>
                      </tr>
                    </table>
            </div>
         </div>
       </div> 
        )
    }
}
export default TT;