const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const getVideos = async (url) => readFile(url);

const getVideoById = async (url, id) => {
  const data = await getVideos(url);
  const { videos } = JSON.parse(data);
  const video = videos.filter((v) => parseInt(v.id, 10) === parseInt(id, 10));
  if (video.length === 0) throw new Error('Fannst ekki');
  return video[0];
};

exports.getVideos = getVideos;
exports.getVideoById = getVideoById;
