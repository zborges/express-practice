const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid'); 

const app = express();

app.use(express.json());

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

app.get("/comments/:id", async (req, res) => {
    const id = req.params.id;
    let content;

    try {
        content = await fs.readFile(`data/comments/${id}.txt`, "utf-8")
    } catch (err) {
        return res.sendStatus(404)
    }

    res.json({
        content: content
    })
});

app.post("/comments", async (req, res) => {
    const id = uuidv4();
    const content = req.body.content;

    if (!content) {
        return res.sendStatus(400)
    }

    await fs.mkdir("data/comments", { recursive: true })
    await fs.writeFile(`data/comments/${id}.txt`, content)
    res.status(201).json({
        id: id
    })
})
app.listen(3000, () => {
    console.log('Server started');
});