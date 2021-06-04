import React from "react";
import "./Theme.css";
import { ReactComponent as ThemeImage } from "../../../images/2.svg";
import { ReactComponent as AirBnb } from "../../../images/4.svg";

const Theme = () => {
  return (
    <div style={{ position: "relative" }}>
      <section className="d-flex theme py-5 container-wrapper">
        <div className="theme_left">
          <div className="heading ">
            <h2>
              Lorem ipsum Landkit
              <br />
              <b className="text-ligh-blue">dolor sit amet</b>
            </h2>
          </div>
          <div className="subheading content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              exercitationem eos numquam excepturi. Doloribus obcaecati
              laudantium odio adipisci molestiae minus consequatur beatae
              repellendus ut corrupti, enim dolorem nostrum. Possimus, harum.
            </p>
          </div>
          <div className="sub-points d-flex">
            <div className="ico">
              <i className="fa fa-bolt" aria-hidden="true"></i>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit amet </h3>
              <p className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                dolore ipsa! Officiis dolorum earum ducimus!
              </p>
            </div>
          </div>
          <div className="sub-points d-flex">
            <div className="ico">
              <i className="fa fa-bolt"></i>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit amet consectetur </h3>
              <p className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                dolore ipsa! Officiis dolorum earum ducimus!
              </p>
            </div>
          </div>
        </div>
        <div className="theme_right">
          <ThemeImage className="theme-image" />
        </div>
      </section>
      <section className="customer-msg py-5 pb-10">
        <h2>Our Customers are our Biggest Fans</h2>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          asperiores. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
        </p>
      </section>
      <section className="testimonial d-flex">
        <div className="test-img">
          <img
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="test-content">
          <div className="content-img text-center">
            <AirBnb />
          </div>
          <div className="content-text text-center">
            <p className="content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              aperiam, deserunt aut dolor accusamus tenetur possimus deleniti
              quos? Nemo, quo.
            </p>
            <h3 className="author">Bikash Ranjan Dash</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theme;
