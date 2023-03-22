import Card from './Card';

const CardList = (props) => {
  console.log('CardList ivyko');
  return (
    <div>
      CardList
      <Card color={props.list[0]} />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default CardList;
