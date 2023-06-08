const express = require('express');
const path = require("path");

const app = express();
const PORT = 3001;
  

app.use(express.static(path.join(__dirname, "..", "..", "front-end", "build")));

app.use(express.json());
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*")
    res.set("Access-Control-Allow-Methods", 'POST, GET, PUT, DELETE');
    next();
})

app.listen(PORT, () => {console.log("Listening on port " + PORT)});

postDataBase = {};

app.get("/api/getList", (req, res, next) => {
    console.log("perfomed get");
    res.send(postDataBase);
});


app.post("/api/add", (req, res, next) => {
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

app.delete("/api/delete", (req, res, next) => {
    console.log("performed delete");
    console.log(req.body);
    const itemKey = req.body.key;
    const location = req.body.location;
    postDataBase[location].splice(itemKey, 1);
    console.log(postDataBase);
    res.send(postDataBase);
})

app.put("/api/edit", (req, res, next) => {
    console.log("started edit");
    const result = req.body;
    const place = result.place;
    const index = result.index;
    postDataBase[place][index].editing = true;
    console.log(postDataBase[place]);
    res.send(postDataBase);
});

app.post("/api/finishEdit", (req, res, next) => {
    console.log("finished edit");
    const result = req.body;
    const index = result.index;
    const place = result.place;
    console.log(postDataBase[place]);
    const post = postDataBase[place][index];
    post.content = result.content;
    post.rating = result.rating;
    post.name = result.name;
    post.date = result.date;
    post.editing = false;
    res.send(postDataBase);
});

module.exports = app;

