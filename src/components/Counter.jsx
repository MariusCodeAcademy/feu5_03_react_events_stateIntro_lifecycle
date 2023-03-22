import UiCard from './ui/UiCard';

const Counter = () => {
  console.log('Counter mounted');
  // logic
  // paprastas kinamasis neveikia jei reikia kintamos reikmes JSX
  let count = 0;

  const handleIncrement = () => {
    console.log('handleIncrement');
    count = count + 1;
    console.log('count ===', count);
  };

  return (
    <UiCard>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Plus</button>
    </UiCard>
  );
};
export default Counter;
