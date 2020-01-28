import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './ss.css';
import Navbar from './navbar';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class Home extends Component{
    render(){
        return(
            <div class="backgroundimg" style={{overflow:"hidden"}}>
              <Navbar/>
              <div class="container">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
                        <ol class="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1"></li>
                          <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

  
              <div class="carousel-inner">
                 <div class="item active">
                 <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxTNJHpOSomC2OAT-Tll1YTp3klit2iqeLRIlFtMva2ob-_Nvw" alt="Los Angeles" style={{width:"100%",height:"30vw"}}/>
                </div>

               <div class="item">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjrKxtQc4futqxxQ2dR_swQ0jsI3kg3LOfZS2tOiDbQvt9kxjr" alt="Chicago" style={{width:"100%",height:"30vw"}} />
               </div>
    
              <div class="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRqe6LkYgqbC1-sPpq7xvD1TV7f3MvR9ZCxkUuDA9Zs32O9dxO" alt="New york" style={{width:"100%",height:"30vw"}}/>
              </div>
             </div>


              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
             <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
             </a>
         </div>
          
              </div>
                      <div class="cotainer">
                        <div class="row">
                          <div class="col-sm-4"> 
                          <div className="mm1 dib pa3 tc pa0"> 
                            <Link to="/top"><img class="mt1 grow shadow-lg p-3" style={{width:"90hw",height:"30vw"}} src="https://ak9.picdn.net/shutterstock/videos/23422279/thumb/1.jpg" alt="Slide"/></Link>
                            <div class="b1"><button class="btn btn-danger shadow-lg ma0 pa0" style={{fontSize:"2rem"}}><Link class="l1 black" to="/top">View</Link></button></div>
                          </div>
                          </div>
                          <div class="col-sm-4">
                          <div className="mm1 dib pa3 tc pa0">   
                          <Link to="/shoes"><img class="mt1 grow shadow-lg p-3" style={{width:"90hw",height:"30vw"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4CDviMh-eHYa9YI6bML6YboOKygj-UaUipQsZSpv5Oem6oDx" alt="Slide"/></Link>
                          <div class="b1"><button class="btn btn-danger shadow-lg ma0 pa0" style={{fontSize:"2rem"}}><Link class="l1 black" to="/shoes">View</Link></button></div>
                          </div>
                          </div> 
                          <div class="col-sm-4"> 
                          <div className="mm1 dib pa3 tc pa0">  
                          <Link to="/watch"><img class="mt1 grow shadow-lg p-3" style={{width:"60hw",height:"30vw"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ2mgbvgOuGK0zyOXskciWNtQOjWLCst6XmmUUSyyVsH68MljU" alt="Slide"/></Link>
                          <div class="b1"><button class="btn btn-danger shadow-lg ma0 pa0" style={{fontSize:"2rem"}}><Link class="l1 black" to="/watch">View</Link></button></div>
                          </div>
                          </div>
                      </div>
                      </div>
               </div>       
                      
        )
    }
}
export default Home;