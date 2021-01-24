const express = require('express');
const path = require('path');
const { getVideos, getVideoById } = require('./src/videos.js');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

app.listen(port, () => {
});

app.use('/', (req, res, next) => {
  if (res.statusCode === 404) {
    res.render('404', { title: 'Fannst Ekki' });
  } else next();
});

app.locals = require('./src/helpers/timeConverter');

app.get('/', (req, res) => {
  const title = 'Fræðslumyndbandleigan';
  let videos = getVideos('./videos.json').then((data) => {
    videos = JSON.parse(data);

    res.render('index', { title, videos });
  }).catch(() => {
    videos = false;
    res.render('index', { title, videos });
  });
});

app.get('/:id', (req, res) => {
  const title = 'Fræðslumyndbandleigan';
  const { id } = req.params;
  getVideoById('./videos.json', id).then((v) => {
    res.render('video', { title, video: v });
  }).catch((err) => {
    res.status(404);
    res.render('404', { title: err.message });
  });
});
