const express = require('express')
const router = express.Router();
const path = require('path'); 

const model = require("../model/model");


router.get('^/$|/home', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
})

// memes
router.get('/memes', async (req, res, next) => {
    try {
      const memesData = await model.getMemes();
      res.json(memesData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  // dogs
router.get('/dogs', async (req, res, next) => {
    try {
      const dogsData = await model.getDogs();
      res.json(dogsData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  // Rick and Morty Characters
router.get('/characters', async (req, res, next) => {
    try {
      const charactersData = await model.getCharacters();
      res.json(charactersData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  // Single Character by ID
router.get('/character/:charID', async (req, res, next) => {
    try {
      const characterData = await model.getCharacter();
      res.json(characterData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  module.exports = router;