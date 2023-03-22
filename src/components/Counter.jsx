import { useState } from 'react';
import UiCard from './ui/UiCard';

const Counter = () => {
  console.log('Counter mounted');
  // logic

  // const [Kintamojo pavadinimas, funkcija nustatyti naujai reiksmei] = useState(pradine kintamojo reikme);
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('handleIncrement');
    // kai naujas state priklauso nuo pries tai buvusio turetume atnaujinti su funkcija
    setCount(count + 1);
  };

  const handleDecrement = () => {
    //
  };

  const handleChange = (howMuch) => {
    //
  };

  return (
    <UiCard>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Plus</button>
      <button>Minus</button>
      <button>Add 5</button>
      <button>Add 10</button>
      <button>Reset Counter</button>
    </UiCard>
  );
};
export default Counter;
