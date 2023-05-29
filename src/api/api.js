import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFormData } from '../redux/slice/contentSlice';

//example fetch response
export const fetchMenu = createAsyncThunk('content/fetchMenu', async () => {
  try {
    const response = await fetch('https://base-twmn.onrender.com/listMenu');
    if (!response.status === 200) {
      throw new Error('Error fetching news list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

//example response with .then
export const fetchNews = createAsyncThunk('content/fetchNews', async () => {
  try {
    const response = await fetch('https://base-twmn.onrender.com/news').then((data) => data.json());
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

//large example response with .then
// export const fetchNews = createAsyncThunk('content/fetchNews', async () => {
//   return new Promise((resolve, reject) => {
//     fetch('http://localhost:3000/news')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Error fetching news list');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(new Error(error.message));
//       });
//   });
// });

//example axios response
export const fetchOneNews = createAsyncThunk('content/fetchOneNews', async (id) => {
  try {
    const response = await fetch(`https://base-twmn.onrender.com/news/${id}`);
    if (!response.status === 200) {
      throw new Error('Error fetching news list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const postFormData = createAsyncThunk('content/postFormData', async (imputDataForm, { dispatch }) => {
  try {
    const response = await fetch('https://base-twmn.onrender.com/formData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imputDataForm),
    });

    if (!response.status === 200) {
      throw new Error('Can not post data');
    }

    dispatch(addFormData(imputDataForm));

    return;
  } catch (error) {
    throw new Error(error.message);
  }
});

//example with axios post
// export const postFormData = createAsyncThunk('content/postFormData', async (imputDataForm, { dispatch }) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:3000/formData',
//       {
//         name: imputDataForm.name,
//         email: imputDataForm.email,
//         textarea: imputDataForm.textarea,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     if (!response.status === 200) {
//       throw new Error('Can not post data');
//     }

//     dispatch(addFormData(imputDataForm));

//     return;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });
