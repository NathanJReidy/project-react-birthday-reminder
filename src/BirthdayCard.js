import React from "react";

const BirthdayCard = (props) => {
  return (
    <div className="birthdayCard">
      <div className="imgContainer">
        <img
          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
          alt=""
          className="img"
        />
      </div>

      <div className="detailsContainer">
        <p className="name">Bertie Yates</p>
        <p className="age">29 years</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
