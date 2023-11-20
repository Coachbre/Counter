// created using rafce
import { Button } from 'react-bootstrap';
import React from 'react';

const Counter = () => {
  return (
    <div style={{margin: "4rem"}}>
      <h1 style={{marginBottom: "2rem"}}>0</h1>
     <Button variant='success' style={{marginRight: "1rem"}}>+1</Button>
     <Button variant='danger'>-1</Button>
    </div>
  )
};

export default Counter;
