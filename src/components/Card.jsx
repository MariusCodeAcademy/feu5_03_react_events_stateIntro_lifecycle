import UiCard from './ui/UiCard';

const Card = (props) => {
  console.log('Card ivyko');

  // sukurti state kintamaji su useState, "currentClass"
  // pradine reiksme ''
  // sukurti funckija kuria iskviesim mygtuko paspaudimu
  // fn
  // jsx dalyje panaudoti "currentClass" kintamaji klase reiksmes vietoje
  return (
    <UiCard>
      <h2 className=''>Title</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      <button>make special</button>
    </UiCard>
  );
};
export default Card;
