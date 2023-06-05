const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
})

app.listen(PORT, () => {console.log("Listening on port " + PORT)});

postDataBase = {
    Paris: [
        {
            content: "hello there from Paris",
            rating: 3,
            name: "bob",
            date: "02/22/2022"
        }
    ],
};

app.get("/home", (req, res, next) => {
console.log("perfomed get");
    res.sendFile("../../front-end/public/index.html");
});

app.get("/", (req, res, next) => {
    console.log("perfomed get");
        res.send(postDataBase);
    });
    


app.post("/", (req, res, next) => {
    console.log("performed post");
    const newItem = req.body;
    postDataBase.push(newItem);
    res.send(postDataBase);
})
