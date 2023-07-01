// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const authenSelector = (state: RootState) => state.authen.status;
export const notifySelector = (state: RootState) => state.notify;
export const dishsSelector = (state: RootState) => state.dishs;
