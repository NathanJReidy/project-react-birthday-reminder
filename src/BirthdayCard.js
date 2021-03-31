import React from "react";

const BirthdayCard = (props) => {
  console.log(props);
  const { id, name, age, img } = props;
  return (
    <div className="birthdayCard">
      <div className="imgContainer">
        <img src={img} className="img" />
      </div>

      <div className="detailsContainer">
        <p className="name">{name}</p>
        <p className="age">{age}</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
