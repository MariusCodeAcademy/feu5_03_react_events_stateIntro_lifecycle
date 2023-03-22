import { useState } from 'react';
import UiCard from './ui/UiCard';

const Counter = () => {
  console.log('Counter mounted');
  // logic

  // const [Kintamojo pavadinimas, funkcija nustatyti naujai reiksmei] = useState(pradine kintamojo reikme);
  let [count, setCount] = useState(0);
  console.log('count po mounted ===', count);
  const handleIncrement = () => {
    console.log('handleIncrement');
    // kai naujas state priklauso nuo pries tai buvusio turetume atnaujinti su funkcija
    setCount(count + 1);
  };

  const handleDecrement = () => {
    //
    console.log('count pries ===', count);
    setCount(count - 1);
    // cia count reikme nera pasikeitusi, ji pasikeis pergeneravus
    console.log('count po ===', count);
  };

  const handleChange = (howMuch) => {
    //
    if (howMuch === 'reset') {
      setCount(0);
      return;
    }
    setCount(count + howMuch);
  };

  return (
    <UiCard>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
      <button onClick={() => handleChange(5)}>Add 5</button>
      <button onClick={() => handleChange(10)}>Add 10</button>
      <button onClick={() => handleChange('reset')}>Reset Counter</button>
    </UiCard>
  );
};
export default Counter;
