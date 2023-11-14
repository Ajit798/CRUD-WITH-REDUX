import { configureStore } from '@reduxjs/toolkit';
import addItemSlice from './addItemSlice';

const store = configureStore({
	reducer: {
		addItem: addItemSlice,
	},
});

export default store;
