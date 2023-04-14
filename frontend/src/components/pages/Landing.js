import React from 'react';
import '../pages/Landing.css';

const Landing = () => {
  console.log('Landing is being rendered'); // Replace "ComponentName" with the actual component name.

  return (
    <div className="jumbotron">
      <h1 className="display-4">Cosmic Fantasy Quests</h1>
      <p className="lead">
        Welcome to Cosmic Fantasy Quests! Discover the lore and items of our
        immersive quests.
      </p>
      <hr className="my-4" />
      <p>Click on "Quests" or "Items" in the navigation bar to explore.</p>
    </div>
  );
};

export default Landing;
