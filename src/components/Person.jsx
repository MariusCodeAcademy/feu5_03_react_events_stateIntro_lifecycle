const Person = (props) => {
  return <li style={{ backgroundColor: props.name }}>{props.name}</li>;
};
export default Person;
