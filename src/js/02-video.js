{/* <iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe> */}
// В HTML есть < iframe > с видео для Vimeo плеера.
// Напиши скрипт который будет сохранять текущее время воспроизведения видео
// в локальное хранилище и,
// при перезагрузке страницы, продолжать воспроизводить видео с этого времени.
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});