import { configureStore } from '@reduxjs/toolkit';
import authenReducer from '../components/Layout/DefaultLayout/Taskbar/authenSlice';
import dishsReducer from '../pages/cook/DishsSlice';

const store = configureStore({
    reducer: {
        authen: authenReducer,
        dishs: dishsReducer,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
