import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';

const arr = ['red', 'green', 'blue'];

const App = () => {
  console.log('App ivyko');
  return (
    <div>
      <Header />
      <h1>App</h1>
      <CardList list={arr} />
    </div>
  );
};
export default App;
