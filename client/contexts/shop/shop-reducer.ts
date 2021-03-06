import { LOAD_PRODUCTS } from './shop-types';
import { Product } from 'types';

type State = {
  products: Product[];
  currentPage: number;
  isLoading: boolean;
  hasLoadMore: boolean;
};

type Action = {
  type: string;
  payload?: any;
};

const shopReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const products = action.payload.products;
      const newProducts = state.products.concat(products);
      const totalProducts = action.payload.total;
      const hasLoadMore = newProducts.length < totalProducts;

      return {
        ...state,
        products: newProducts,
        isLoading: false,
        hasLoadMore,
        currentPage: state.currentPage + 1,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
