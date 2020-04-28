module.exports = {
	timesVisited: async (req, res) => {
		const date = `${new Date().getFullYear()}-${
			new Date().getMonth() + 1
		}-${new Date().getDate()}`;
		if (req.session.user) {
			if (date === req.session.user.lastVisited) {
				null;
			} else {
				let timesVisited = req.session.user.timesVisited;
				console.log(timesVisited);
				req.session.user = {
					timesVisited: timesVisited + 1,
					lastVisited: date,
				};
			}
		} else {
			req.session.user = { timesVisited: 1, lastVisited: date };
		}
		res.status(200).send("Session Updated");
	},
};
