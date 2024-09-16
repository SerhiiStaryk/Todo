const updateObject = (oldObject, newValues) =>
	Object.assign({}, oldObject, newValues);

const updateItemInArray = (array, itemId, updateItemCallback) => {
	const updatedItems = array.map(item => {
		if (item.id !== itemId) return item;

		return updateItemCallback(item);
	});

	return updatedItems;
};

const removeItemFromArray = (array, itemId) =>
	array.filter((item) => item.id !== itemId);

const fetchTodo = async () => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}?_limit=20`);

	return await response.json();
}

export {
	fetchTodo,
	updateObject,
	updateItemInArray,
	removeItemFromArray,
}
