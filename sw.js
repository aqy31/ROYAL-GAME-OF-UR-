const CACHE_NAME = 'ur-game-v1';
const ASSETS = [
    './',
    './index.html',
    './board.png', './board_side.png', './table.png', './table_side.png',
    './blue.png', './red.png', './dice.png', './tray.png', './wall.png',
    './bg.png', './btn1.png', './btn2.png', './btn3.png', './btn4.png',
    './logo.png', './tele.png', './insta.png', './p1_name.png', './p2_name.png',
    './turn_p1.png', './turn_p2.png', './btn_roll.png', './chat_bg.png',
    './instructions.png', './zoom_hint.png', './set_icon.png',
    './set_bg.png', './set_title.png', './set_music.png', './set_sfx.png',
    './slider_track.png', './slider_thumb.png', './set_resume.png',
    './set_restart.png', './set_exit.png', './icon.png',
    './music.mp3', './dice.mp3', './move.mp3', './click.mp3'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
