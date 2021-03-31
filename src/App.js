import "./App.css";
import data from "./data";
import BirthdayCard from "./BirthdayCard";
import React from "react";

function App() {
  // Create initial state for the data of the people with birthdays today
  const [people, setPeople] = React.useState(data);

  return (
    <main>
      <section className="centerCard">
        <h3 className="birthdaysToday">{people.length} birthdays today</h3>
        <div className="birthdayCardList">
          <BirthdayCard people={people} setPeople={setPeople} />
        </div>
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
