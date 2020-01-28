import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'tachyons';
import './ss.css'
import Navbar from './navbar';

class Watch extends Component{
   
    constructor(){
        super();
        this.state={
            watch1:[],
       watch2:[],
        isRange: false
        }
    }

    componentDidMount(){
        console.log("Component is mounted");
        fetch('http://localhost:3009/watch1')
        .then(res => res.json())
        .then(res => {
            console.log(JSON.stringify(res));
            this.setState({watch1:res})
        })
        console.log(this.state.watch1)
    }
   
    display(val1,val2){
        const updatedTops = this.state.watch1.filter((ele)=>{
            return (ele.price>=val1&&ele.price<=val2);
        })

        this.setState({
            watch2: updatedTops,
            isRange: true
        })
    }   


    fun(val){
         this.props.onfun(val);
    }

    render(){
        return (
                <div className="t1 backgroundimg" style={{overflow:"hidden"}}>
                   <Navbar/>
                   <div> 
                   <input type="radio" name="r1" onChange={()=>this.display(1000,2000)} class="rd ml4 mt3"/><label>All</label>  
                     <input type="radio" name="r1" onChange={()=>this.display(1000,1500)} class="rd ml4 mt3"/><label>1000-1500</label>
                     <input type="radio" name="r1" onChange={()=>this.display(1500,2000)} class="rd ml4 mt3"/><label>1500-2000</label>
                   </div>
                     {!this.state.isRange ? this.state.watch1.map((ele)=>{
                        return(
                         <div className="main dib pa3 grow shadow-4 tc bg-white ba ml5 pa0 ma3 br4">
                         <img src={ele.s} alt="Top" style={{width:"22vh",height:"22vh"}}/>
                         <h3 class="ma0 pa0">{ele.name}</h3>
                         <h4 class="ma0 pa0">{ele.price}</h4>
                         <button class="btn btn-danger shadow-lg ma0 pa0" style={{fontSize:"1.5rem"}} onClick={()=>this.fun(ele)} ><Link class="l1 black" to="/tt">Shop Now</Link></button>
                         </div> 
                              )}): this.state. watch2.map(ele => {
                                  return(
                                    <div className="main dib pa3 grow shadow-4 tc bg-white ba ml5 pa0 ma3 br4">
                         <img src={ele.s} alt="Top" style={{width:"22vh",height:"22vh"}}/>
                         <h3 class="ma0 pa0">{ele.name}</h3>
                         <h4 class="ma0 pa0">{ele.price}</h4>
                         <button class="btn btn-danger shadow-lg ma0 pa0" style={{fontSize:"1.5rem"}} onClick={()=>this.fun(ele)} ><Link class="l1 black" to="/tt">Shop Now</Link></button>
                         </div> 
                                  )
                              })
                    }
                </div>
        ) 
    }
}
export default Watch;