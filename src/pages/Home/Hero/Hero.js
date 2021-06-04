import React from "react";
import Button from "../../../components/button/Button";
import { ReactComponent as HeroImage } from "../../../images/1.svg";

import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero d-flex py-5 container-wrapper">
      <div className="hero_left">
        <div className="heading ">
          <h2>
            Lorem ipsum <b className="text-ligh-blue">Landkit</b>
            <br />
            dolor sit amet
          </h2>
        </div>
        <div className="subheading content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            exercitationem eos numquam excepturi. Doloribus obcaecati laudantium
            odio adipisci molestiae minus consequatur beatae repellendus ut
            corrupti, enim dolorem nostrum. Possimus, harum.
          </p>
        </div>
        <div className="action-btn">
          <Button
            type="lg"
            text="View All Pages"
            bgColor="bg-ligh-blue"
            textColor="text-light-grey"
            icon="fa fa-arrow-right"
          />
          <Button
            type="lg"
            text="Documentation"
            bgColor="bg-dark-grey"
            textColor="text-ligh-blue"
          />
        </div>
      </div>
      <div className="hero_right">
        <HeroImage className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
