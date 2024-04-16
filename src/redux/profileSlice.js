import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profiles: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
  },
});

export const {addProfile} = profileSlice.actions;

export default profileSlice.reducer;
