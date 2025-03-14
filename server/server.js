const http = require('http');
const app = require('./src/app');
const dotenv = require('dotenv');

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`🍎 The server is listening on ${PORT}`);
});
