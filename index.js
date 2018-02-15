import {
    log
} from 'util';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('hey');
    res.send('Hey! It works!');
    console.log(req);
});