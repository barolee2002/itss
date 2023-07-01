import { createSlice } from '@reduxjs/toolkit';
import { dishsProps } from '../../interface/Interface';

export const dishsSlice = createSlice({
    name: 'dishs',
    initialState: [] as dishsProps[],
    reducers: {
        updateDishs: (state, action) => {
            state = action.payload;
        },
    },
});

export const { updateDishs } = dishsSlice.actions;

export default dishsSlice.reducer;
