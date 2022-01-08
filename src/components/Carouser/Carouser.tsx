import React from "react";
import { Carousel } from "react-bootstrap";

export const Carouser: React.FC<any> = (): any => {
    return <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/Mjzx_UOqoIs/maxresdefault.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.somosmamas.com.ar/wp-content/uploads/2017/05/como-combinar-ropa-de-mujer-2.jpg"
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/d1/50/77/d15077fad76d3863985571751800c7c9.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    </div>
}