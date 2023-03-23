import { useState } from 'react';
import Person from './Person';

const PeopleList = (props) => {
  // mapinti per gauta sarasa ir gamiti Person componentus
  const zmSk = props.list.length;
  const hobiai = props.list.map((pObj) => pObj.hobby).join(', ');
  const hobReduce = props.list.reduce((str, pObj) => `${str}, ${pObj.hobby}`, '').slice(2);
  console.log('hobReduce ===', hobReduce);
  console.log('hobiai ===', hobiai);
  const [filterBy, setFilterBy] = useState('');
  let filtered = props.list.filter((pObj) => pObj.gender === filterBy);
  if (filterBy === '') {
    filtered = props.list;
  }
  return (
    <div>
      <button onClick={() => setFilterBy('male')}>Vyrai</button>
      <button>Moterys</button>
      <ul>
        {filtered.map((personObj) => (
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
        <p>Visi zmoniu hobiai: {hobiai}</p>
      </div>
    </div>
  );
};
export default PeopleList;
