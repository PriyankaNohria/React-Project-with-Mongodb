import React,{Component} from 'react';
import Navbar from './navbar';
import axios from 'axios'

class Add extends Component{
    constructor(){
        super();
        this.state={
            cartEvents:[],
            events:[]
        }
    }

    componentDidMount(){
        console.log("Inside CDM addCart");
        console.log(this.props.item);
        axios.post("http://localhost:3009/users/verifyUser", {
            token: localStorage.getItem("usertoken")
        }).then(res => {  
            console.log("First Axios call cart");
            console.log(res);
            axios.post(`http://localhost:3009/users/addtocart`, {
                uid: res.data.user._id,
                pid: this.props.item._id
            }).then(res => {
                console.log("Second Axios call cart");
                console.log(res);
                axios.get(`http://localhost:3009/users/getcart?userId=${res.data.id}`)
                    .then(res => {
                        this.setState({
                            events: res.data.cart.cart
                        })
            }).catch(err=>console.log(err));
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));
 
    }
    
    render(){
        var total = 0;
        return (
            <div>
                <Navbar/>
                <div class="container">
                <div className="row component-margin">     
                 <div className="col">  
                 <table className="table">
                     <thead>
                         <tr>
                             <th style={{textAlign:"center"}}><h3>Item</h3></th>
                             <th style={{textAlign:"center"}}><h3>Name</h3></th>
                             <th style={{textAlign:"center"}}><h3>Price</h3></th>
                         </tr>
                     </thead>
                     <tbody>
                      {this.state.events.map((ele)=>{
                            total+=ele.price; 
                              return(
                            <tr><td style={{textAlign:"center"}}><img style={{width:"22vh",height:"22vh"}} src={ele.s}/></td>
                             <td  style={{textAlign:"center"}}><h2>{ele.name}</h2></td>
                             <td  style={{textAlign:"center"}}><h2>{ele.price}</h2></td></tr> 
                             )}
                             )}
                             <tr>
                                 <td style={{textAlign:"center"}}></td>
                                 <td style={{textAlign:"center"}}><h2>Total</h2></td>
                                <td style={{textAlign:"center"}}><h2>{total}</h2></td>
                             </tr>
                     </tbody>
                 </table>
                 </div> 
                 </div> 
                </div>
            </div>
        )
    }
}
export default Add;