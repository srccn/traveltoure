const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*")
    res.set("Access-Control-Allow-Methods", 'POST,GET');
    next();
})

app.listen(PORT, () => {console.log("Listening on port " + PORT)});

postDataBase = {};

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
    console.log(newItem);
    const name = newItem.key;
    if (postDataBase[name] !== undefined) {
        postDataBase[name].unshift(newItem.list);
    }
    else {
        postDataBase[name] = [];
        postDataBase[name].unshift(newItem.list);
    }
    console.log(postDataBase);
    res.send(postDataBase);
});

app.post("/delete", (req, res, next) => {
    console.log("performed delete");
    console.log(req.body);
    const itemKey = req.body.key;
    const location = req.body.location;
    postDataBase[location].pop(itemKey);
    console.log(postDataBase);
    res.send(postDataBase);
})
