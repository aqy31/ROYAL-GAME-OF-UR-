const CACHE_NAME = 'ur-game-v1';

// هنا حطينا كل ملفاتك عشان تنحفظ أوفلاين
const ASSETS = [
    './',
    './index.html',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
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
            // إذا الملف موجود بالذاكرة يفتحه أوفلاين، وإلا يحمله من النت
            return response || fetch(event.request);
        })
    );
});
