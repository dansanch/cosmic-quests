import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/Quests.css';


const Quests = () => {
  console.log('Quests is being rendered'); // Replace "ComponentName" with the actual component name.

  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const fetchQuests = async () => {
try {
const response = await axios.get('https://aqueous-citadel-22387.herokuapp.com/');
setQuests(response.data);
} catch (error) {
console.error(error);
}
};
fetchQuests();
}, []);

return (
  <div className="container">
    <h1 className="my-4">Quests</h1>
  <div className="row">
    {quests.map((quest) => (
  <div className="col-md-4" key={quest._id}>
  <div className="card mb-4">
  <div className="card-body">
    <h5 className="card-title">{quest.name}</h5>
    <p className="card-text">{quest.description}</p>
  </div>
  </div>
  </div>
))}
</div>
</div>
);
};

export default Quests;
