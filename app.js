const express = require("express");
const path = require("path")
const app = express();

const publicPath = path.resolve(__dirname,"./public")
app.use(express.static(publicPath));

app.get("/", (req, res)=> {
    const archivoAEnviar = path.join(__dirname, "/views/home.html")
    res.sendFile(archivoAEnviar)
})
app.get("/register", (req, res)=> {
    const archivoAEnviar = path.join(__dirname, "/views/register.html")
    res.sendFile(archivoAEnviar)
})
app.get("/login", (req, res)=> {
    const archivoAEnviar = path.join(__dirname, "/views/login.html")
    res.sendFile(archivoAEnviar)
})
app.listen(process.env.PORT || 3055, () => console.log( "Levantando un servidor con Express","http://localhost:3055/"));