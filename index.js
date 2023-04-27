const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid'); 

const app = express();

app.listen(3000, () => {
    console.log('Server started');
});