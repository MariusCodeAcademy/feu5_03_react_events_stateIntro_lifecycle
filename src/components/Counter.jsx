import UiCard from './ui/UiCard';

const Counter = () => {
  console.log('Counter mounted');
  // logic
  let count = 0;

  return (
    <UiCard>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <button>Plus</button>
    </UiCard>
  );
};
export default Counter;
