const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const fs = require('fs');

let videos = require('../data/videos.json')
let playlists = require('../data/playlists.json')

app.get("/api/getAllVideos", (req, res) => {
    res.json(videos);
});

app.get("/api/getAllPlaylists", (req, res) => {
    res.json(playlists);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});