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
        <div className="input-group mb-3">
          <span className="input-group-text">Name</span>
          {' '}
          <input
            required
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />

        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Url</span>
          <input
            required
            type="text"
            value={imageUrl}
            onChange={event => setimageUrl(event.target.value)}
          />

        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Count</span>
          {' '}
          <input
            required
            type="number"
            placeholder="Count"
            value={count}
            onChange={event => setCount(+event.target.value)}
          />

        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Weight</span>
          <input
            required
            type="number"
            value={weight}
            onChange={event => setWeight(+event.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Width</span>
          <input
            required
            type="number"
            value={width}
            onChange={event => setWidth(+event.target.value)}
          />

        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Height</span>
          <input
            required
            type="number"
            value={height}
            onChange={event => setHeight(+event.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-warning"
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
        className="btn btn-danger"
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
