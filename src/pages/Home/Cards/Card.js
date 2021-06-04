import React from "react";
import "./Card.css";
import { ReactComponent as Logo1 } from "../../../images/4.svg";
import { ReactComponent as Logo2 } from "../../../images/5.svg";
import { ReactComponent as Logo3 } from "../../../images/6.svg";

const cardDatas = [
  {
    icon: "fa fa-codepen",
    heading: "Lorem ipsum dolor sit ",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi officiis, dolore harum earum obcaecati quidem molestiae .",
  },
  {
    icon: "fa fa-free-code-camp",
    heading: "Lorem ipsum dolor sit consectetur",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi officiis, dolore harum earum obcaecati quidem .",
  },
  {
    icon: "fa fa-code",
    heading: "Lorem ipsum dolor sit amet",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi officiis, dolore harum earum obcaecati quidem molestiae excepturi .",
  },
];

const Card = () => {
  return (
    <>
      <div className="cards container-wrapper py-5">
        {cardDatas.map((cardData, index) => (
          <IndividualCard key={index} cardData={cardData} />
        ))}
      </div>
      <div className="partner-cards container-wrapper  py-5">
        <div className="partner-card">
          <Logo1 />
        </div>
        <div className="partner-card">
          <Logo2 />
        </div>
        <div className="partner-card">
          <Logo3 />
        </div>
        <div className="partner-card">
          <Logo1 />
        </div>
        <div className="partner-card">
          <Logo2 />
        </div>
        <div className="partner-card">
          <Logo3 />
        </div>
      </div>
    </>
  );
};

export default Card;

const IndividualCard = ({ cardData }) => {
  return (
    <div className="card">
      <i className={cardData.icon} aria-hidden="true"></i>
      <h3>{cardData.heading}</h3>
      <p className="content">{cardData.subheading}</p>
    </div>
  );
};
