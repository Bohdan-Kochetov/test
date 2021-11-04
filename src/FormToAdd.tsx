import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const FormToAdd: React.FC = () => {
  const [name, setName] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();

  const readyToAdd = () => {
    return {
      type: 'addProduct',
      details: [name, imageUrl, count, weight, width, height],
    };
  };

  return (
    <form>
      <div className="input">
        <div>
          Name:
          {' '}
          <input
            required
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />

        </div>
        <div>
          imageUrl :
          <input
            required
            type="text"
            value={imageUrl}
            onChange={event => setimageUrl(event.target.value)}
          />

        </div>
        <div>
          Count:
          {' '}
          <input
            required
            type="number"
            placeholder="Count"
            value={count}
            onChange={event => setCount(+event.target.value)}
          />

        </div>
        <div>
          Weight:
          <input
            required
            type="number"
            value={weight}
            onChange={event => setWeight(+event.target.value)}
          />
        </div>
        <div>
          Width:
          <input
            required
            type="number"
            value={width}
            onChange={event => setWidth(+event.target.value)}
          />

        </div>
        <div>
          Height:
          <input
            required
            type="number"
            value={height}
            onChange={event => setHeight(+event.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          dispatch(readyToAdd());
          setName('');
          setimageUrl('');
          setCount(0);
          setWeight(0);
          setWidth(0);
          setHeight(0);
        }}
      >
        Confitm

      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'add',
            add: true,
          });
        }}
      >
        Cancel

      </button>
    </form>
  );
};
