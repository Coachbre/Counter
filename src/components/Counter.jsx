// created using rafce
import CustomButton from './Button';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  }

  const subtractOne = () => {
    setCount(count -1);
  }

  return (
    <div style={{margin: "4rem"}}>
      <h1 style={{marginBottom: "2rem"}}>{count}</h1>

      <CustomButton 
        variant="success" 
        style={{marginRight: "1rem"}}
        onClick={addOne}>
        +1
      </CustomButton>

      <CustomButton variant="danger" 
      onClick={subtractOne}>
        -1
        </CustomButton>

    </div>
  )
};
//count is initially set to 0. +1 button has an onclick to setcount by adding 1
export default Counter;
