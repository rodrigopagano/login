
const express = require('express');
const {connectionSocket} = require('./utils/soket.io')
const server = express();
const Session = require('express-session')
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo')

const handlebars = require('express-handlebars');
const productsRoute = require('./routes/products.routes');
const cardsRoute = require ('./routes/carts.routes')
const productsRouteBd = require('./routes/products.router.bd')
const cartsRouteBd = require('./routes/carts.router.bd')
const viewRoute = require('./routes/views.route')
const chatsRouter = require('./routes/chats.router')
const sessionRoute = require('./routes/session.route')
mongoose.set('strictQuery', false)




const httpServer = server.listen(8080, ()=> {
    console.log('Servidor Listo en puerto 8080')
})






server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');

server.use(
  Session ({
   store: connectMongo.create({
       mongoUrl:'mongodb+srv://CoderUser:874@codercluster.haaqxj8.mongodb.net/?retryWrites=true&w=majority',
       mongoOptions:{
          useNewUrlParser:true,
          useUniFiedTopology:true
           },
      
    }),
  secret: 'secret',
  resave: true,
  saveUninitialized:true, 
  })
);  


server.use(express.static(__dirname+'/public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.use("/api/products/", productsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/", viewRoute);
server.use("/api/productsBd/", productsRouteBd );
server.use("/api/cartsBd/", cartsRouteBd );
server.use("/api/chats/", chatsRouter );
server.use('/api/session/', sessionRoute)




mongoose.connect('mongodb+srv://CoderUser:874@codercluster.haaqxj8.mongodb.net/?retryWrites=true&w=majority',

(error)=>{
   if (error) {
     console.log('error de conexion', error);
     process.exit();
   }else {
    console.log('Conexion exitosa con mongoose');
    
   }
});

connectionSocket (httpServer);






