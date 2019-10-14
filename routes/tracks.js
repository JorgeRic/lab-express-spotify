'use strict';

const express = require('express');
const router = express.Router();

const spoty = require('../helpers/spotyCred');

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const trackArray = await spoty.getAlbumTracks(id);

    console.log('hola que tal', { tracks: trackArray.body.items.tracks });
    res.render('tracks', { tracks: trackArray.body.items.tracks });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
