import './App.css';
import CardList from './components/CardList';
import Counter from './components/Counter';
import Header from './components/Header';
import PeopleList from './components/PeopleList';
import { peopleData } from './assets/data';

const arr = ['tomato', 'green', 'blue', 'violet'];

const App = () => {
  console.log('App ivyko');
  console.log('peopleData ===', peopleData);
  const handleClick = () => {
    // alert('paspaudei');
    console.count('paspaudei');
  };

  return (
    <div>
      <Header />
      <h1>App</h1>
      <PeopleList list={peopleData} />
      {/* <CardList list={arr} />
      <button onClick={handleClick}>Show alert</button> */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
    </div>
  );
};
export default App;
