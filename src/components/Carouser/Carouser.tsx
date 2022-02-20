import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carouser.scss"
import baner from "./../../assets/baner.jpg"


export const Carouser: React.FC<any> = (props):any=> {
  return <div className="carousel">
    <Carousel >
      {props.imgs && props.imgs.map((src:any) => <Carousel.Item>
        {<img
          className="d-block w-100"
          src={src.src}
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