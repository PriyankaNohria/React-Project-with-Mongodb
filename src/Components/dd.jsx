import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class DD extends Component{
    render(){
        return (
            <div id="myCarousel" class="carousel slide" data-ride="carousel"> 
         
            <ol class="carousel-indicators"> 
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li> 
                <li data-target="#myCarousel" data-slide-to="1"></li> 
                <li data-target="#myCarousel" data-slide-to="2"></li> 
            </ol> 
  
          
            <div class="carousel-inner"> 
                <div class="item active"> 
                    <img src= 
 "http://www.v3wall.com/wallpaper/1920_1200/1010/1920_1200_20101027082634367303.jpg"/> 
                </div> 
  
                <div class="item"> 
                    <img src= 
 "http://inn.spb.ru/images/600/DSC100610656.jpg"/> 
                </div> 
  
                <div class="item"> 
                    <img src= 
 "https://wallpapercave.com/wp/wp1877575.jpg"/> 
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
        </div> )}}
export default DD;