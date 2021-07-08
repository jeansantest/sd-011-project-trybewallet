// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, REQUEST_API_SUCCESS } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    isLoading: false,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isLoading: true };

  case REQUEST_API_SUCCESS:
    return { ...state, currencies: action.data, isLoading: false };

  default:
    return state;
  }
};

export default wallet;
