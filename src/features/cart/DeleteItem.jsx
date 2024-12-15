import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
	const dispatch = useDispatch();

	function handleDeleteItem() {
		dispatch(removeItem(pizzaId));
	}

	return (
		<Button type="small" onClick={handleDeleteItem}>
			Delete
		</Button>
	);
}

export default DeleteItem;
