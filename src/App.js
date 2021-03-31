import "./App.css";
import people from "./data";
import BirthdayCard from "./BirthdayCard";

function App() {
  return (
    <>
      <div className="centerCard">
        <p>X birthdays today</p>
        <div className="birthdayCardList">
          {people.map((person) => {
            return <BirthdayCard key={person.id} {...person} />;
          })}
        </div>
        <button className="btn">Clear All </button>
      </div>
    </>
  );
}

export default App;
