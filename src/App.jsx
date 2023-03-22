import './App.css';
import CardList from './components/CardList';
import Counter from './components/Counter';
import Header from './components/Header';

const arr = ['red', 'green', 'blue'];

const App = () => {
  console.log('App ivyko');

  const handleClick = () => {
    // alert('paspaudei');
    console.count('paspaudei');
  };

  return (
    <div>
      <Header />
      {/*<h1>App</h1>
      <CardList list={arr} />
      <button onClick={handleClick}>Show alert</button> */}
      <Counter />
    </div>
  );
};
export default App;
