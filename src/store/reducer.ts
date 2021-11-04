import { request } from '../apiGoods';
import { Product } from '../react-app-env';

const initialState = {
  product: [],
  productToRender: [],
  select: 'select',
  productId: 0,
  add: false,
};

export function productSuccess(product: any) {
  return {
    type: 'productSuccess',
    product,
  };
}

export function productFetchData() {
  return (dispatch : any) => request('product')
    .then(result => dispatch(productSuccess(result)));
}

export function selected(string: string) {
  return string === 'count' ? {
    type: 'filterByCount',
  } : {
    type: 'filterByAlphabet',
  };
}

export function chooseProductId(id: number) {
  return {
    type: 'choosenProduct',
    productId: id,
  };
}

function generateProduct(length: number, arr: any) {
  const [name, imageUrl, count, weight, width, height] = arr;

  return {
    id: length + 1,
    name,
    imageUrl,
    count,
    size: {
      width,
      height,
    },
    weight: `${weight}g`,
    comments: [],
  };
}

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'productSuccess':
      return {
        ...state,
        product: action.product,
        productToRender: action.product,
      };
    case 'filterByCount':
      return {
        ...state,
        productToRender: state.product.sort((a: Product, b: Product) => a.count - b.count),
      };
    case 'filterByAlphabet':
      return {
        ...state,
        productToRender: state.product
          .sort((a: Product, b: Product) => a.name.localeCompare(b.name)),
      };
    case 'alphabetically':
      return {
        ...state,
        select: 'alphabetically',
      };
    case 'count':
      return {
        ...state,
        select: 'count',
      };
    case 'select':
      return {
        ...state,
        select: 'select',
      };
    case 'choosenProduct':
      return {
        ...state,
        productId: action.productId,
      };
    case 'add':
      return {
        ...state,
        add: !state.add,
      };
    case 'delete':
      return {
        ...state,
        product: state.product.filter((item: Product) => item.id !== action.id),
        productToRender: state.product.filter((item: Product) => item.id !== action.id),
      };
    case 'addProduct':
      return {
        ...state,
        product: [...state.product, generateProduct(state.product.length, action.details)],
        productToRender: [...state.product, generateProduct(state.product.length, action.details)],
      };
    default:
      return state;
  }
}
