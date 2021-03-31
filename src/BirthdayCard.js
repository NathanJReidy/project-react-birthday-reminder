import React from "react";
import data from "./data";

const BirthdayCard = (props) => {
  console.log(props);
  const { id, name, age, img, people, setPeople } = props;

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div className="birthdayCard">
      <div className="imgContainer">
        <img src={img} className="img" />
      </div>

      <div className="detailsContainer">
        <p className="name">{name}</p>
        <p className="age">{age}</p>
        <p className="remove" onClick={() => removePerson(id)}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default BirthdayCard;
