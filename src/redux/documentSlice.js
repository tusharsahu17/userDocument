import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setDocument(state, action) {
      state.data = action.payload;
    },
  },
});

export const {setDocument} = documentSlice.actions;

export default documentSlice.reducer;
