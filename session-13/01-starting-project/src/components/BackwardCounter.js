import { useState, useEffect } from 'react';

import Card from './Card';
import uesCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = uesCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
