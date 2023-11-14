import { createSlice } from '@reduxjs/toolkit';

const addItemSlice = createSlice({
	name: 'add-item',
	initialState: {
		totalItems: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.totalItems.push(action.payload);
		},
		deleteItem: (state, action) => {
			console.log('task', action.payload);
			const taskItem = state.totalItems.filter(
				(item) => item.taskName !== action.payload
			);

			state.totalItems = taskItem;
		},
		editItem: (state, action) => {
			const findIndex = state.totalItems.findIndex(
				(task) => task.name === action.payload
			);
			state.totalItems[findIndex].isEditable =
				!state.totalItems[findIndex].isEditable;
		},
		handleChangeItem: (state, action) => {
			const { taskName, name, value } = action.payload;
			const index = state.totalItems.findIndex(
				(item) => item.name === taskName
			);

			state.totalItems[index] = { ...state.totalItems[index], [name]: value };
		},
		updateItem: (state, action) => {
			const findIndex = state.totalItems.findIndex(
				(task) => task.name === action.payload
			);
			state.totalItems[findIndex].isEditable =
				!state.totalItems[findIndex].isEditable;
		},
	},
});

export const { addItem, deleteItem, updateItem, editItem, handleChangeItem } =
	addItemSlice.actions;

export default addItemSlice.reducer;
