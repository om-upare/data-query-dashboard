import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate query processing with an async thunk (mocking an API call)
export const processQuery = createAsyncThunk(
  'dashboard/processQuery',
  async (query, thunkAPI) => {
    // Simulate delay for API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Generate mock data for chart visualization
    const mockData = [
      { name: 'Jan', value: Math.floor(Math.random() * 100) },
      { name: 'Feb', value: Math.floor(Math.random() * 100) },
      { name: 'Mar', value: Math.floor(Math.random() * 100) },
      { name: 'Apr', value: Math.floor(Math.random() * 100) },
      { name: 'May', value: Math.floor(Math.random() * 100) },
    ];
    return { query, data: mockData };
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    query: '',
    history: [],
    result: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    addToHistory(state, action) {
      state.history.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(processQuery.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(processQuery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.result = action.payload.data;
        if (!state.history.includes(action.payload.query)) {
          state.history.push(action.payload.query);
        }
      })
      .addCase(processQuery.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setQuery, addToHistory } = dashboardSlice.actions;

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});
