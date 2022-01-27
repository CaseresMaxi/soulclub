import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carouser.scss"
import baner from "./../../assets/baner.jpg"

export const Carouser: React.FC<any> = (props):any=> {
  //console.log(props.imgs)
  return <div className="carousel">
    <Carousel >
      {props.imgs && props.imgs.map((img:any) => <Carousel.Item>
        {<img
          className="d-block w-100"
          src={baner}
          alt="First slide"
        />}
         {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
      </Carousel.Item>
)}
       

    </Carousel>
  </div>
}