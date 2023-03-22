import { useState } from 'react';
import UiCard from './ui/UiCard';

const Card = (props) => {
  console.log('Card ivyko');

  // sukurti state kintamaji su useState, "currentClass"
  const [currentClass, setCurrentClass] = useState('');
  // sukurti state kintamaji su useState, "title"
  const [title, setTitle] = useState('Title');
  const handleTitleChange = () => {
    setTitle('changed Title');
  };
  // paspaudus mygtuka <button>ChangeTitle</button> pakeisti title reikme i "changed Title"
  // pradine reiksme ''
  // sukurti funckija kuria iskviesim mygtuko paspaudimu
  const handleClass = () => {
    // fn
    setCurrentClass('special');
  };
  // jsx dalyje panaudoti "currentClass" kintamaji klase reiksmes vietoje
  // klases pavadinimas 'special'
  return (
    <UiCard>
      <h2 onClick={handleTitleChange} className={currentClass}>
        {title}
      </h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      <button onClick={handleClass}>make special</button>
      <button onClick={handleTitleChange}>ChangeTitle</button>
    </UiCard>
  );
};
export default Card;
