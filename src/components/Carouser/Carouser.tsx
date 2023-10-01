import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Carouser.scss";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

export const Carouser: React.FC<any> = (props): any => {
  const [bannes, setBannes] = useState([{ src: "" }]);

  useEffect(() => {
    onSnapshot(collection(db, "baners"), (snapshot) =>
      setBannes((prev) =>
        prev.concat([
          {
            src: snapshot.docs[0].data().src,
          },
        ])
      )
    );
  }, []);
  return (
    <div className="carousel">
      <Carousel>
        {bannes &&
          bannes.map((img: { src: string }) => (
            <Carousel.Item>
              {
                <img
                  className="d-block w-100"
                  src={img.src}
                  alt="First slide"
                />
              }
              {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};
