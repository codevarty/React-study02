import { useState, useEffect } from 'react';

import Card from './Card';
import uesCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = uesCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
