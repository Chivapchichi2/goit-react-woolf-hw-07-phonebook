export const pendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

export const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
