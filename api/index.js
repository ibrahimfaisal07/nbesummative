const express = require ('express')
const app = express()

app.set("views", __dirname + "/../views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/../public"));

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(5000, () => console.log('http://localhost:5000'))