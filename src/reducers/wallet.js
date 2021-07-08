import * as actions from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.REQUEST_API_SUCCESS:
    return { ...state, currencies: action.payload };
  case actions.ADD_EXPENSE_SUCCESS:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}
