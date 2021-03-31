import "./App.css";
import data from "./data";
import BirthdayCard from "./BirthdayCard";
import React from "react";

function App() {
  const [people, setPeople] = React.useState(data);
  const [birthdayCount, setBirthdayCount] = React.useState(5);

  return (
    <>
      <div className="centerCard">
        <p className="birthdaysToday">{birthdayCount} birthdays today</p>
        <div className="birthdayCardList">
          {people.map((person) => {
            return <BirthdayCard key={person.id} {...person} />;
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
