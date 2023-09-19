const express = require("express")
const app = express()

app.set('port', 8000)

app.get('/', (req, res)=>(
    res.send('Bienvenidos')
))

app.listen(app.get('port'), ()=>(
    console.log(`Aplicación corriendo en el puerto ${app.get('port')}`)
))