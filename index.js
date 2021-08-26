const app = require('express')();
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const port = 3000;

http.createServer(app).listen(port);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
console.log(`Run in http://localhost:${port}/doc`);

require('./endpoints')(app);