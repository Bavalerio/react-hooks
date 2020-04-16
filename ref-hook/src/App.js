import React from 'react';
import './App.css';

import ClassTimer from './components/classTimer';
import HookTimer from './components/hookTimer';
import FocusInput from './components/focusInput';

function App() {
  return (
    <div>
      <FocusInput />
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
