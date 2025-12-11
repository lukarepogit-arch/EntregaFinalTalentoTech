// importamos las configuraciones de las variables de entorno
import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.routes.js"
import authRouter  from "./src/routes/products.routes.js"
import { auth } from "./src/middlewares/auth.middleware.js"
// import bodyParser from "body-parser";

//creamos servidor
const app = express();
app.use(express.json());
// app.use(auth);

// app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.send("Proyecto Final on...")
})
// Middleware para usar las rutas importadas:
app.use('/api/products',productsRouter);
app.use('/api', authRouter);

// Middleware para devolver un mensaje en formato json cuando haya un error 404:
app.use((req,res,next)=>{
    res.status(404).json({ error:'Ruta invalida' })
});


// llamamos al puerto de nuestras variables de entorno
const PORT = process.env.PORT || 3005;

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));

