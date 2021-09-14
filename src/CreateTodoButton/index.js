import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <button className='CreateTodoButton' onClick={() => onClickButton('clic')}>
      +
    </button>
  );
};

export { CreateTodoButton };
