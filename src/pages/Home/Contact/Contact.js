import React from "react";
import Button from "../../../components/button/Button";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="container-fluid contact py-5">
      <div className="contact_wrapper container-wrapper">
        <div className="contact_form">
          <div className="form_wrapper">
            <div className="form_img">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=250"
                alt=""
              />
            </div>
            <div className="form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <Button
                type="lg btn-block"
                text="Download a sample"
                bgColor="bg-dark-green"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="heading">
            The Most Useful Resource
            <br />
            <b className="text-green">ever created for dev|</b>
          </h3>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo
            officiis aperiam culpa ducimus possimus, ipsum molestias quia
            dolores non quos, earum nobis minus beatae quam unde vitae
            voluptatem. Qui, sed dolores?
          </p>
          <div className="points text-green">
            <span>
              <i className="fa fa-check"></i>Lifetime Updates
            </span>
            <span>
              <i className="fa fa-check"></i>Tech Support
            </span>
          </div>
          <div className="points text-green">
            <span>
              <i className="fa fa-check"></i>Lifetime Updates
            </span>
            <span>
              <i className="fa fa-check"></i>Tech Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
