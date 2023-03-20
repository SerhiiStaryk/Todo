export const updateObject = (oldObject, newValues) =>
	Object.assign({}, oldObject, newValues);

export const updateItemInArray = (array, itemId, updateItemCallback) => {
	const updatedItems = array.map((item) => {
		if (item.id !== itemId) {
			return item;
		}

		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
};

export const removeItemFromArray = (array, itemId) => {
	const updatedItems = array.filter((item) => item.id !== itemId);
	return updatedItems;
};
