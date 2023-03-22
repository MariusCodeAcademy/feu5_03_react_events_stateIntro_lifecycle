import Person from './Person';

const PeopleList = (props) => {
  // mapinti per gauta sarasa ir gamiti Person componentus
  return (
    <ul>
      {props.list.map((personObj) => (
        <Person key={personObj.id} name={personObj.name} />
      ))}
    </ul>
  );
};
export default PeopleList;
