const express = require("express")
const app = express();
const port = process.env.PORT || 8081;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(port, () => {
    console.log("servidor rodando na porta: " + port )
})