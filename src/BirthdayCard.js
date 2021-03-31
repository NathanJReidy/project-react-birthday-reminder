import React from "react";
import data from "./data";

const BirthdayCard = ({ people, setPeople }) => {
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <div key={id} className="birthdayCard">
            <div className="imgContainer">
              <img src={img} className="img" />
            </div>

            <div className="detailsContainer">
              <p className="name">{name}</p>
              <p className="age">{age}</p>
              <p
                className="remove"
                onClick={() => {
                  removePerson(id);
                }}
              >
                Remove
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BirthdayCard;
