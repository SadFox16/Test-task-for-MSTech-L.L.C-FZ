document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video-piece");
  
    // Синхронизация всех видео
    if (videos.length > 0) {
      videos[0].addEventListener("play", () => {
        videos.forEach(video => {
          video.currentTime = videos[0].currentTime;
          video.play();
        });
      });
  
      videos[0].addEventListener("pause", () => {
        videos.forEach(video => {
          video.pause();
        });
      });
  
      videos[0].addEventListener("seeked", () => {
        videos.forEach(video => {
          video.currentTime = videos[0].currentTime;
        });
      });
    }
  });