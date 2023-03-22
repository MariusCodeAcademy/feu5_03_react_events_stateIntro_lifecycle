import { useState } from 'react';
import Person from './Person';

const PeopleList = (props) => {
  // mapinti per gauta sarasa ir gamiti Person componentus
  const zmSk = props.list.length;
  const hobiai = 'gauti reiksme is props';
  let [filtered, setFiltered] = useState([...props.list]);

  return (
    <div>
      <button>vyrai</button>
      <button>Moterys</button>
      <ul>
        {props.list.map((personObj) => (
          <Person
            key={personObj.id}
            name={personObj.name}
            age={personObj.age}
            gender={personObj.gender}
            hobby={personObj.hobby}
          />
        ))}
      </ul>
      <br />
      <div className='info'>
        <p>Viso zmoniu: {zmSk}</p>
        <p>Visi zmoniu hobiai: reading, swimming ...</p>
      </div>
    </div>
  );
};
export default PeopleList;
