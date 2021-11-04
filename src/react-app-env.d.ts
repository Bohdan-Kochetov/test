/// <reference types="react-scripts" />

export interface Product {
  id: number,
  imgUrl: string,
  name: string,
  count: number,
  size: {
    width: number,
    height: number,
  }
  weight: string,
  comments: obj[],
}

export interface State {
  reducer: {
    product: Product[],
    productToRender: Product[],
    select: string,
    productId: 0,
    add: false,
  }
}
