import './App.css';
import React, { useState } from 'react';
import Vikram from './Vikram';
import Card from './Card';
import foodList from './food';

const App = () => {
  let [name, setName] = useState('Lists:');
  let [application, setApplication] = useState(0);
  let array = [
    'Game Of Thrones',
    'Breaking Bad',
    'Dark',
    'Sex Education',
    'Stranger Things',
  ];
  const changeName = (lname) => {
    name = lname + ' ' + name;
    setName(name);
  };
  const changeState = (state) => {
    setApplication(state);
  };
  const showFoodApplication = () => {
    return (
      <div className="container">
        {foodList.map((food) => (
          <Card Carddata={food} />
        ))}
      </div>
    );
  };
  const listApplication = () => {
    return (
      <div>
        <h2>
          We Wil List Some Famous Web Series Name In This Application{' '}
          {application}
        </h2>
        <p>{name}</p>
        <Vikram series={array} />
        <button
          onClick={() => changeName('These Are My Favourite Web Series')}
          className="btn1"
        >
          Done
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="navbar">
        <button onClick={() => changeState(1)}>Show List Application</button>
        <button onClick={() => changeState(2)}>Show Food Application</button>
        <button onClick={() => changeState(3)}>Show Timer Application</button>
        <button onClick={() => changeState(4)}>Show Form Application</button>
        <button onClick={() => changeState(5)}>Show Library Application</button>
      </div>
      {application === 2 ? (
        showFoodApplication()
      ) : (
        <p id="para1">WELCOME TO MY REACT APP</p>
      )}
       {application === 1 ? (
        listApplication ()
      ) : (
        <img src="./" id="para1" width="500" height="600"></img>

      )}

    </>
  );
};

export default App;
