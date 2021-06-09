import React from "react";
import "./carousel.css";
import ArrowLeft from "../assets/arrow-left.svg"
import ArrowRight from "../assets/arrow-right.svg"


export const Carousel = ({ children }) => {

  const [activeIndex, setActiveIndex] = React.useState(0);


  return (

  children && (
    <>
    <div className="carousel">
      <div className= "carousel__button carousel__button--backward" onClick={()=> setActiveIndex(activeIndex <= 0 ? React.Children.count(children) - 1  : (activeIndex - 1))}>
      <ArrowLeft/>
      </div>
        {React.Children.map(children, (child,i) => (
          <div className= {`carousel__item ${activeIndex === i ? "carousel--active" : "carousel--inactive"}`}>
            {React.cloneElement(child)}
          </div>
        ))}
        <div className="bubbles">
          { React.Children.map(children, (child,i) => (
            <div 
            onClick = {() => setActiveIndex(i)}
            className= {`bubble ${activeIndex === i ? "bubble--active" : "bubble--inactive"}`}>
          </div>
          ))}
        </div>
        <div className= "carousel__button carousel__button--forward" onClick={()=> setActiveIndex(activeIndex >= React.Children.count(children) - 1? 0 : (activeIndex+ 1))}>
          <ArrowRight/>
        </div>
    </div>
    
  </>
  )
  )
}
