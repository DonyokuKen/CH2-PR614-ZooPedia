var express = require('express');
var index = express.Router();
var animals = require('../controller/animal');
var verte = require('../controller/vertebrata');
var inverte = require('../controller/invertebrata');

/* GET home page. */
index.get('/', animals.getAnimals);
index.get('/verte', verte.getAnimalsByVertebrata);
index.get('/inverte', inverte.getAnimalsByInvertebrata);

module.exports = index;
