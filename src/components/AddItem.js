import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/addItemSlice';

export const AddItem = () => {
	const [taskData, setTaskData] = React.useState({
		name: '',
		email: '',
		taskName: '',
		isEditable: false,
	});
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setTaskData({ ...taskData, [event.target.name]: event.target.value });
	};

	const handleTaskSubmit = () => {
		if (!Object.values(taskData).includes('')) {
			dispatch(addItem(taskData));
			setTaskData({
				name: '',
				email: '',
				taskName: '',
			});
		} else {
			alert('Please fill all the details');
		}
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '20px',
				gap: '10px',
			}}
		>
			<input
				name="name"
				placeholder="Enter Name..."
				onChange={handleChange}
				value={taskData.name}
			/>
			<input
				name="email"
				placeholder="Enter Email..."
				onChange={handleChange}
				value={taskData.email}
			/>
			<input
				name="taskName"
				placeholder="Enter Task Name...."
				onChange={handleChange}
				value={taskData.taskName}
			/>
			<button onClick={handleTaskSubmit}>Submit</button>
		</div>
	);
};
