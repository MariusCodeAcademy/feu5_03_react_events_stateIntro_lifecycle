import UiCard from './ui/UiCard';

const Person = (props) => {
  // atvaizduoti visa info is objekto
  // kur lytis parasyti "vyras" arba "moteris"
  // <button>Dark Mode</button> paspaudus uzdesim klase li elementui ir fonas taps tamsus , textas sviesus

  return (
    <li>
      <UiCard>
        <h3>{props.name}</h3>
        <p>Age: </p>
        <button>Dark Mode</button>
      </UiCard>
    </li>
  );
};
export default Person;
