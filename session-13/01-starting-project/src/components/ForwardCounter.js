import { useState, useEffect } from 'react';

import Card from './Card';
import uesCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = uesCounter((prevcouner) => prevcouner + 1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
