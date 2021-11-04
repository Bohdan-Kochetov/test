import React from 'react';
import { useSelector } from 'react-redux';
import { State } from './react-app-env';

export const ProductDetalis: React.FC<{}> = () => {
  const { productToRender, productId } = useSelector((state: State) => state.reducer);

  return (
    <div>
      <h3>Details of Product</h3>
      <div>{ `Name: ${(productToRender[productId - 1]).name}`}</div>
      <div>{ `ID: ${(productToRender[productId - 1]).id}`}</div>
      <div>{ `Count: ${(productToRender[productId - 1]).count}`}</div>
      <div>
        {
          `Size: width-${(productToRender[productId - 1]).size.width}, height-${(productToRender[productId - 1]).size.height}`
        }

      </div>
      <div>{ `Weight: ${(productToRender[productId - 1]).weight}`}</div>
    </div>
  );
};
