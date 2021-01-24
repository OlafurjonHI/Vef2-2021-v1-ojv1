const convertToDuration = (duration) => {
  const sec = parseInt(duration, 10);
  if (sec < 10) { return `0:0${sec}`; }
  if ((sec) < 60) { return `0:${sec}`; }
  let mins = Math.round(sec / 60);
  mins = (mins < 10) ? `${mins}` : mins;
  let secs = sec % 60;
  secs = (secs < 10) ? `0${secs}` : secs;
  if (mins <= 60) { return `${mins}:${secs}`; }
  return sec;
};

const getAge = (created) => {
  const age = new Date().valueOf() - new Date(created).valueOf();
  const year = Math.round((age / 1000) / (3600 * 24 * 365.25));
  const months = Math.round((age / 1000) / (3600 * 24 * 30));
  const weeks = Math.round((age / 1000) / (3600 * 24 * 7));
  const days = Math.round((age / 1000) / (3600 * 24));
  const hours = Math.round((age / 1000) / (3600));
  if (year >= 1) {
    if (year === 1) return `Fyrir ${year} ári síðan`;
    return `Fyrir ${year} árum síðan`;
  }
  if (months >= 1) {
    if (months === 1) { return `Fyrir ${months} mánuði síðan`; }
    return `Fyrir ${months} mánuðum síðan`;
  }
  if (weeks >= 1) {
    if (weeks === 1) { return `Fyrir ${weeks} viku síðan`; }
    return `Fyrir ${weeks} vikum síðan`;
  }
  if (days >= 1) {
    if (days === 1) return `Fyrir ${days} degi síðan`;
    return `Fyrir ${days} dögum síðan`;
  }
  if (hours >= 1) {
    if (hours === 1) return `Fyrir ${hours} klukkustund síðan`;
    return `Fyrir ${hours} klukkustundum síðan`;
  }

  return age;
};

exports.convertToDuration = convertToDuration;
exports.getAge = getAge;
