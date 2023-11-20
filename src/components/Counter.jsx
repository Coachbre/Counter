// created using rafce
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{margin: "4rem"}}>
      <h1 style={{marginBottom: "2rem"}}>{count}</h1>
      <Button variant='success' style={{marginRight: "1rem"}} 
        onClick={() => setCount(count + 1)}>
        +1
      </Button>
      
     <Button variant='danger'onClick={() => setCount(count -1)}>
        -1
      </Button>
    </div>
  )
};
//count is initially set to 0. +1 button has an onclick to setcount by adding 1
export default Counter;
