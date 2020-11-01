const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		message: 'test message to server',
	});
});

app.post('/messages', (req, res) => {
	console.log(req.body);
});

app.listen(process.env.PORT, () => {
	const { PORT } = process.env;
	console.log(
		`Server listening on port ${PORT}, go to http://localhost:${PORT}/`
	);
});
