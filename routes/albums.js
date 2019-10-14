'use strict';
const express = require('express');
const router = express.Router();
const spoty = require('../helpers/spotyCred');

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  spoty.getArtistAlbums(id)
    .then(data => {
      // console.log(data.body);
      const albums = data.body.items;
      res.render('albums', { albums });
    })
    .catch(err => {
      console.log('The error while searching artists occurred: ', err);
    });
});

module.exports = router;
