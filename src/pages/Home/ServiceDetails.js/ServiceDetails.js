import React from "react";
import "./ServiceDetails.css";
import { ReactComponent as ThemeImage } from "../../../images/3.svg";

const ServiceDetails = () => {
  return (
    <div className="container-fluid bg-dark-grey servicedeatail">
      <section className="d-flex service py-5 pt-10 container-wrapper">
        <div className="service_left">
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
        <div className="service_right">
          <ThemeImage className="service-image" />
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
    </div>
  );
};

export default ServiceDetails;
