import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listMenu: [],
  listNews: [],
  oneNews: {},
  formData: [],
  inputDataForm: { id: '', name: '', email: '', textarea: '' },
  isLoading: false,
  error: null,
  burgerState: false,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeBurgerState: (state, action) => {
      state.burgerState = action.payload;
    },
    addFormData: (state) => {
      state.formData = [...state.formData, state.inputDataForm];
    },
    addInputDataForm: (state, action) => {
      state.inputDataForm = action.payload;
    },

    inputChange: (state, action) => {
      state.inputDataForm = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase('content/fetchMenu/pending', (state) => {
        state.isLoading = true;
      })
      .addCase('content/fetchMenu/fulfilled', (state, action) => {
        state.isLoading = false;
        state.listMenu = action.payload;
      })
      .addCase('content/fetchMenu/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase('content/fetchNews/pending', (state) => {
        state.isLoading = true;
      })
      .addCase('content/fetchNews/fulfilled', (state, action) => {
        state.isLoading = false;
        state.listNews = action.payload;
      })
      .addCase('content/fetchNews/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // .addCase('content/fetchOneNews/pending', (state) => {
      //   state.isLoading = true;
      // })
      .addCase('content/fetchOneNews/fulfilled', (state, action) => {
        state.isLoading = false;
        state.oneNews = action.payload;
      })
      .addCase('content/fetchOneNews/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const burgerMenuSelector = (state) => state.content.burgerState;
export const listMenuSelector = (state) => state.content.listMenu;
export const listNewsSelector = (state) => state.content.listNews;
export const oneNewsSelector = (state) => state.content.oneNews;
export const inputDataFormSelector = (state) => state.content.inputDataForm;
export const formDataSelector = (state) => state.content.formData;

export const { changeBurgerState, addFormData, addInputDataForm } = contentSlice.actions;

export default contentSlice.reducer;
