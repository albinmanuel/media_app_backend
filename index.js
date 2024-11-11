// Import json-server
const jsonServer = require('json-server');

// Create a server application using json-server
const mediaServer = jsonServer.create();

// Create middleware using json-server
const middleware = jsonServer.defaults(); // Correctly calling as a function

// Set up route for db.json
const router = jsonServer.router('db.json');

// Applying middleware to the server
mediaServer.use(middleware);

// Applying router to the server
mediaServer.use(router);

// Set the port using environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server, listening on 0.0.0.0 to accept external requests
mediaServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Media server started....listening on port ${PORT}`);
});
