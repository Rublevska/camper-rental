import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fdd097b2a18489b385766f.mockapi.io';

export const fetchCampers = createAsyncThunk('adverts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFavoriteContact = createAsyncThunk(
  'adverts/add',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/adverts', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
