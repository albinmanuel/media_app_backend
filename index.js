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

//setting the port
const PORT=3000

//starting the server
mediaServer.listen(PORT,()=>{
    console.log("media server started....listening on" +PORT)
})