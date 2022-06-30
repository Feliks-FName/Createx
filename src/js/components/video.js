const videoBlock = document.querySelector(".video-block");
if (videoBlock) {
  const video = videoBlock.querySelector("video");
  const videoPlayBtn = videoBlock.querySelector(".video-block__play");

  // videoPlayBtn.addEventListener("click", () => {
  //   if (videoPlayBtn.classList.contains("video-block__play--played")) {
  //     video.pause();
  //     videoPlayBtn.classList.remove("video-block__play--played");
  //   } else {
  //     videoBlock.classList.add("video-block--played");
  //     video.play();
  //     video.controls = true;
  //     videoPlayBtn.classList.add("video-block__play--played");
  //   }
  // });

  // video.addEventListener("click", () => {
  //   video.pause();
  //   videoPlayBtn.classList.remove("video-block__play--played");
  // });

  videoPlayBtn.addEventListener("click", () => {
    videoBlock.classList.add("video-block--played");
    video.play();
    video.autoplay = false;
    video.loop = false;
    video.controls = true;
    videoPlayBtn.classList.add("video-block__play--played");
  });

  video.onpause = function () {
    videoBlock.classList.remove("video-block--played");
    video.controls = false;
    videoPlayBtn.classList.remove("video-block__play--played");
  };
}
