import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteItem,
	editItem,
	handleChangeItem,
	updateItem,
} from '../utils/addItemSlice';

const HandleInput = ({ taskName, name, value, dispatch }) => {
	if (!taskName.isEditable) {
		return <td>{taskName[name]}</td>;
	}
	return (
		<input
			name={name}
			value={value}
			onChange={(e) => {
				const { name, value } = e.target;
				dispatch(
					handleChangeItem({
						taskName: taskName.name,
						name,
						value,
					})
				);
			}}
		/>
	);
};

export const List = () => {
	const items = useSelector((store) => store.addItem);
	const dispatch = useDispatch();
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
		>
			<table style={{ justifyContent: 'center' }}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Task Name</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{items?.totalItems.map((taskName) => {
						return (
							<tr key={taskName.taskName}>
								<td>
									<HandleInput
										taskName={taskName}
										value={taskName.name}
										name="name"
										dispatch={dispatch}
									/>
								</td>
								<td>
									<HandleInput
										taskName={taskName}
										value={taskName.email}
										name="email"
										dispatch={dispatch}
									/>
								</td>
								<td>
									<HandleInput
										taskName={taskName}
										value={taskName.taskName}
										name="taskName"
										dispatch={dispatch}
									/>
								</td>
								<td>
									<div>
										<button
											onClick={() =>
												!taskName.isEditable
													? dispatch(editItem(taskName.name))
													: dispatch(updateItem(taskName.name))
											}
										>
											{!taskName.isEditable ? 'Edit' : 'Update'}
										</button>
										<button
											onClick={() => dispatch(deleteItem(taskName.taskName))}
										>
											Delete
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
