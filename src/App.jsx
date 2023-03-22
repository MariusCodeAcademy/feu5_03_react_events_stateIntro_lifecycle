import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';

const App = () => {
  console.log('App ivyko');
  return (
    <div>
      <Header />
      <h1>App</h1>
      <CardList />
    </div>
  );
};
export default App;
