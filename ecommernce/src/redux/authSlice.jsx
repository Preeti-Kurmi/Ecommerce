import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { role, token } = action.payload;
      state.role = role;
      state.token = token;
      localStorage.setItem('role', role);
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.role = null;
      state.token = null;
      localStorage.removeItem('role');
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
