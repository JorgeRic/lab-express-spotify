const SpotifyWebApi = require('spotify-web-api-node');

const clientId = 'c3182e51f71b4eeab1a93e2a444df7f8';
const clientSecret = '61731740186d4b6097e65bf5a8d53258';

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});
spotifyApi.clientCredentialsGrant()
  .then(data => {
    spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch(error => {
    console.log('Something went wrong when retrieving an access token', error);
  });
  module.exports = spotifyApi;