const paginate = (followers) => {
	const itemsPerPage = 9;
	const pages = Math.ceil(followers.length / itemsPerPage);

	const paginationArray = Array.from({ length: pages }, (_, index) => {
		const startingPoint = index * itemsPerPage;
		return followers.slice(startingPoint, startingPoint + itemsPerPage);
	});
	return paginationArray;
};

export default paginate;
