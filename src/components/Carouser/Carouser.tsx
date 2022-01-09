import React from "react";
import { Carousel } from "react-bootstrap";

export const Carouser: React.FC<any> = (props):any=> {
  //console.log(props.imgs)
  return <div>
    <Carousel>
      {props.imgs.map((img:string) => <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
         {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
      </Carousel.Item>
)}
       

    </Carousel>
  </div>
}