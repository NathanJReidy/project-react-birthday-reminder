import "./App.css";
import data from "./data";
import BirthdayCard from "./BirthdayCard";
import React from "react";

function App() {
  // Create initial state for the data of the people with birthdays today
  const [people, setPeople] = React.useState(data);
  // Create initial state for the number of people whose birthday it is
  const [birthdayCount, setBirthdayCount] = React.useState(people.length);

  return (
    <>
      <div className="centerCard">
        <p className="birthdaysToday">{birthdayCount} birthdays today</p>
        <div className="birthdayCardList">
          {people.map((person) => {
            return (
              <BirthdayCard
                key={person.id}
                {...person}
                people={people}
                setPeople={setPeople}
                birthdayCount={birthdayCount}
                setBirthdayCount={setBirthdayCount}
              />
            );
          })}
        </div>
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
            setBirthdayCount(0);
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;
