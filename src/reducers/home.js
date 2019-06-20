const intialState = {
  products: [],
  selectedProduct: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_PRODUCTS":
      return { ...state, products: actions.products };
    case "SAVE_SELECTED_EVENT":
      return { ...state, selectedProduct: action.product };
    default:
      return state;
  }
};
