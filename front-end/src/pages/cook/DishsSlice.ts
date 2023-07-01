import { createSlice } from '@reduxjs/toolkit';
import { dishsProps } from '../../interface/Interface';

export const dishsSlice = createSlice({
    name: 'dishs',
    initialState: {
        data: [] as dishsProps[],
    },
    reducers: {
        updateDishs: (state, action) => {
            state.data = action.payload;
        },
        deleteDish: (state, action) => {
            const index = state.data.findIndex((d) => d.id === action.payload);
            state.data[index].status = 0;
        },
        restoreDish: (state, action) => {
            const index = state.data.findIndex((d) => d.id === action.payload);
            state.data[index].status = 1;
        },
    },
});

export const { updateDishs, deleteDish, restoreDish } = dishsSlice.actions;

export default dishsSlice.reducer;
