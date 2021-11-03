import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state: any) => state.reducer);

  return (
    <div className="App">
      <h1>Redux list of todos</h1>
      {number}
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'add' });
        }}
      >
        add123

      </button>
    </div>
  );
};

export default App;
