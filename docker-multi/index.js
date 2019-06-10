const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});
client.set('visitas', 0);

app.get('/', (req, res) => {
    client.get('visitas', (err, visitas) => {
		res.send('Numero de visitas: ' + visitas);
		client.set('visitas', parseInt(visitas) + 1);
	});
});

app.listen(8081, () => {
    console.log('Ouvindo na porta 8081');
})