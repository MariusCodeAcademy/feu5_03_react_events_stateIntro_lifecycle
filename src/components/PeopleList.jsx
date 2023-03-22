import Person from './Person';

const PeopleList = (props) => {
  // mapinti per gauta sarasa ir gamiti Person componentus
  const zmSk = 'gauti reiksme is props';
  const hobiai = 'gauti reiksme is props';
  return (
    <div>
      <ul>
        {props.list.map((personObj) => (
          <Person key={personObj.id} name={personObj.name} />
        ))}
      </ul>

      <div className='info'>
        <p>Viso zmoniu: XX</p>
        <p>Visi zmoniu hobiai: reading, swimming ...</p>
      </div>
    </div>
  );
};
export default PeopleList;
