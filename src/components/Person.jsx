import UiCard from './ui/UiCard';

const Person = (props) => {
  return (
    <li>
      <UiCard>
        <h3>{props.name}</h3>
        <p>Age: </p>
      </UiCard>
    </li>
  );
};
export default Person;
