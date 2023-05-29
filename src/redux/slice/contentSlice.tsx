import { createSlice } from '@reduxjs/toolkit';
import { IInputDataForm, IRootState, IListMenu, IListNews, IContentState } from '../../types/types';
import {  PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu, fetchNews, fetchOneNews } from '../../api/api';

const initialState: IContentState = {
  listMenu: [],
  listNews: [],
  oneNews: {},
  formData: [],
  inputDataForm: { id: '', name: '', email: '', textarea: '' },
  isLoading: false,
  error: '',
  burgerState: false,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeBurgerState: (state, action:PayloadAction<boolean>) => {
      state.burgerState = action.payload;
    },
    addFormData: (state) => {
      state.formData = [...state.formData, state.inputDataForm];
    },
    addInputDataForm: (state, action: PayloadAction<IInputDataForm>) => {
      state.inputDataForm = action.payload;
    },

    // inputChange: (state, action) => {
    //   state.inputDataForm = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action:PayloadAction<IListMenu[]>) => {
        state.isLoading = false;
        state.listMenu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action:PayloadAction<IListNews[]>) => {
        state.isLoading = false;
        state.listNews = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // .addCase(fetchOneNews/pending', (state) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchOneNews.fulfilled, (state, action:PayloadAction<IListNews[]>) => {
        state.isLoading = false;
        state.oneNews = action.payload;
      })
      .addCase(fetchOneNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const burgerMenuSelector = (state:IRootState) => state.content.burgerState;
export const listMenuSelector = (state:IRootState) => state.content.listMenu;
export const listNewsSelector = (state:IRootState) => state.content.listNews;
export const oneNewsSelector = (state:IRootState) => state.content.oneNews;
export const inputDataFormSelector = (state:IRootState) => state.content.inputDataForm;
export const formDataSelector = (state:IRootState) => state.content.formData;

export const { changeBurgerState, addFormData, addInputDataForm } = contentSlice.actions;

export default contentSlice.reducer;
