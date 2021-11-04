import React from 'react';
import { useSelector } from 'react-redux';
import { State } from './react-app-env';

export const ProductDetalis: React.FC<{}> = () => {
  const { productToRender, productId } = useSelector((state: State) => state.reducer);
  const { width, height } = productToRender[productId - 1].size;
  const {
    name, id, count, weight,
  } = productToRender[productId - 1];

  return (
    <div>
      <h3>Details of Product</h3>
      <div className="list-group-item">{ `Name: ${name}`}</div>
      <div className="list-group-item">{ `ID: ${id}`}</div>
      <div className="list-group-item">{ `Count: ${count}`}</div>
      <div className="list-group-item">
        {
          `Size: width-${width}, height-${height}`
        }

      </div>
      <div className="list-group-item">{ `Weight: ${weight}`}</div>
    </div>
  );
};
