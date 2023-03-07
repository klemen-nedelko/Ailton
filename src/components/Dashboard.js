import React from 'react';
import Dial from './Dial/Dial';
import { Navigation } from './nav/Navigation';
import Wrapper from './wrapper';

export const Dashboard = () => {
  return (
    <div>
         <Navigation/>
        <Wrapper/>
        <Dial/>
    </div>
  )
}
