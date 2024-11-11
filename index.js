//import json server
const jsonServer=require ('json-server')

//create a server application using json server
const  mediaServer=jsonServer.create()

//create middleware using json server
const middleware=jsonServer.defaults

//set up route for db.json
const router=jsonServer.router('db.json')

//applying middleaware to the server
mediaServer.use(middleware)

//applying router to the server
mediaServer.use(router)

// Setting the port to use environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Starting the server
mediaServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Media server started....listening on port ${PORT}`);
});
