'use strict';

const express = require('express');
const router = express.Router();
const spoty = require('../helpers/spotyCred');

router.get('/', (req, res, next) => {
  // Lo ponemos entre corchetes porque nos devuleve un objeto

  // usamos name porque es el mismo que hemos puesto en el index.hbs
  const { artist } = req.query;

  spoty.searchArtists(artist)

    .then(data => {
      // console.log('The received data from the API: ', data.body.artists.items);
      const artists = data.body.artists.items;
      res.render('artists', { artists });
    })
    .catch(err => {
      console.log('The error while searching artists occurred: ', err);
    });
});

module.exports = router;
