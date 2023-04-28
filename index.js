const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid'); 

const app = express();

app.get("/outfit", (req, res) => {
    const tops = ["Black", "White", "Orange", "Navy"]
    const bottoms = ["Grey", "White", "Yellow", "Blue"]
    const shoes = ["White", "Orange", "Navy", "Black"]
    res.json({
        top: _.sample(tops),
        bottoms: _.sample(bottoms),
        shoes: _.sample(shoes)
    });
})

app.post("/comments", (req, res) => {
    const id = uuidv4();
    console.log(id);
    res.sendStatus(201)
})
app.listen(3000, () => {
    console.log('Server started');
});