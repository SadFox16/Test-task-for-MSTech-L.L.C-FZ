// document.addEventListener("DOMContentLoaded", function () {
//     const videos = document.querySelectorAll(".video-piece");
    
//     if (videos.length > 0) {
//         let isSyncing = false; // Флаг для предотвращения зацикливания

//         function syncVideos() {
//             if (isSyncing) return; // Прерываем, если уже синхронизируем
//             isSyncing = true; // Устанавливаем флаг
//             videos.forEach(video => {
//                 video.currentTime = videos[0].currentTime; // Синхронизируем текущее время
//             });
//             isSyncing = false; // Сбрасываем флаг
//         }

//         // Событие на воспроизведение
//         videos[0].addEventListener("play", () => {
//             syncVideos(); // Синхронизация времени
//             videos.forEach(video => video.play()); // Запуск всех видео
//         });

//         // Событие на паузу
//         videos[0].addEventListener("pause", () => {
//             videos.forEach(video => video.pause()); // Пауза всех видео
//         });

//         // Событие на перемотку
//         videos[0].addEventListener("seeked", syncVideos);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video-piece");

    if (videos.length > 0) {
        let isSyncing = false; // Флаг для предотвращения зацикливания

        function syncVideos() {
            if (isSyncing) return; // Прерываем, если уже синхронизируем
            isSyncing = true; // Устанавливаем флаг
            const currentTime = videos[0].currentTime;
            videos.forEach(video => {
                if (Math.abs(video.currentTime - currentTime) > 0.1) {
                    video.currentTime = currentTime; // Синхронизируем текущее время
                }
            });
            isSyncing = false; // Сбрасываем флаг
        }

        // Добавляем атрибут muted и autoplay для плавного воспроизведения
        videos.forEach(video => {
            video.muted = true;
            video.autoplay = true;
            video.loop = true;
        });

        // Событие на воспроизведение
        videos[0].addEventListener("play", () => {
            syncVideos(); // Синхронизация времени
            videos.forEach(video => video.play()); // Запуск всех видео
        });

        // Событие на паузу
        videos[0].addEventListener("pause", () => {
            videos.forEach(video => video.pause()); // Пауза всех видео
        });

        // Событие на перемотку
        videos[0].addEventListener("seeked", syncVideos);
    }
});