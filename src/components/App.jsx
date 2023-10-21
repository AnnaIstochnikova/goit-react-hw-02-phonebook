import React from 'react';

import { Phonebook } from './phonebook/phonebook';
// import '../index.scss';
export const App = () => {
  return (
    <div>
      <Phonebook onSubmit={value => console.log(value)} name={''} />
    </div>
  );
};
