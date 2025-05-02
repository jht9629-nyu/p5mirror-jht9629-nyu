// VideoManager Class
class VideoManager {
  constructor(category) {
    this.category = category;
    this.selectedVideo = null;
    this.layout = null;
  }

  chooseRandomVideo() {
    const vids = categoryVideos[this.category];
    if (!vids.length) return;

    const index = Math.floor(random(vids.length));
    this.selectedVideo = vids[index];
    this.selectedVideo.loop();

    if (!this.layout) {
      let tries = 10,
        best = null;
      for (let i = 0; i < tries; i++) {
        let scale = random(0.25, 0.5);
        let w = width * scale;
        let h =
          w / (this.selectedVideo.width / this.selectedVideo.height || 1.78);
        let x = random(w / 2, width - w / 2);
        let y = random(h / 2, height - h / 2);
        if (!isTooClose(x, y, w, h)) {
          this.layout = { x, y, w, h, scale };
          usedLayouts.push(this.layout);
          return;
        } else if (!best) best = { x, y, w, h, scale };
      }
      this.layout = best;
      usedLayouts.push(best);
    }
  }

  stopVideo() {
    if (this.selectedVideo) {
      this.selectedVideo.stop();
      this.selectedVideo.elt.pause();
      this.selectedVideo.elt.currentTime = 0;
      this.layout = null;
      this.selectedVideo = null;
    }
  }

  displayVideoAtLayout() {
    if (!this.selectedVideo || !this.layout) return;
    const { x, y, w, h } = this.layout;
    image(this.selectedVideo, x - w / 2, y - h / 2, w, h);
  }
}

// Helpers
function isTooClose(x, y, w, h) {
  return usedLayouts.some(
    (l) => abs(x - l.x) < (w + l.w) / 2 && abs(y - l.y) < (h + l.h) / 2
  );
}

// Video Manager Instances
const videoManagers = categories.map((c) => new VideoManager(c));
