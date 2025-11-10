// https://editor.p5js.org/jht9629-nyu/sketches/aKZQQb471
// Wk09 - Channing fix
// https://editor.p5js.org/ChanningMu/sketches/GCJniezZ4

// ---- p5 + ml5 v1 BodyPose (Web Editor 极简稳版) ----
let bodyPose;     // 模型实例（preload 里创建）
let video;        // 摄像头
let poses = [];   // 检测结果
let connections;  // 骨架连线（可选）
let started = false; // 兜底：需要一次点击来启动摄像头（有些浏览器策略更严）

function preload() {
  // 按官方教程：预加载模型（默认 MoveNet MULTIPOSE_LIGHTNING）
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);
  textFont('monospace'); textSize(14); fill(255);

  // 先画启动提示（如果浏览器需要用户手势，会让你点一下）
  background(0);
  text('Click to start camera (if you see no video).', 10, 22);

  // 直接尝试创建摄像头（大多数 Chrome/Edge 直接可用）
  startCamera();
}

function startCamera() {
  if (started) return; // 避免多次调用
  started = true;

  // 更兼容的约束（优先前置摄像头）
  const constraints = {
    video: {
      width: { ideal: 640 },
      height: { ideal: 480 },
      facingMode: 'user'
    },
    audio: false
  };

  video = createCapture(constraints, (stream) => {
    console.log('✅ getUserMedia ok');
  });
  video.size(640, 480);
  video.hide();

  // 监听元数据，确认尺寸
  if (video.elt) {
    video.elt.addEventListener('loadedmetadata', () => {
      console.log('🎥 video ready:', video.elt.videoWidth, video.elt.videoHeight);
    });
  }

  // 开始连续检测（按教程：detectStart(video, callback)）
  bodyPose.detectStart(video, gotPoses);

  // 可选：骨架连线
  connections = bodyPose.getSkeleton();

  console.log('✅ BodyPose started');
}

function mousePressed() {
  // 如果没有视频/没权限，点击一下再次尝试启动
  if (!video || (video.elt && video.elt.readyState < 2)) {
    startCamera();
  }
}

function gotPoses(results) {
  poses = results;
  // console.log('poses:', poses.length);
}

function draw() {
  background(0);

  // 如果 video 已经 ready，画出来
  if (video && video.width > 0 && video.height > 0) {
    image(video, 0, 0, width, height);

    // 画关键点 + 骨架（可选）
    if (poses.length > 0) {
      for (const pose of poses) {
        // 关键点
        noStroke(); fill(0, 255, 0);
        for (const k of pose.keypoints) {
          if (k.confidence > 0.1) circle(k.x, k.y, 6);
        }
        // 骨架
        stroke(255, 0, 0); strokeWeight(2);
        for (const [a, b] of connections) {
          const ka = pose.keypoints[a];
          const kb = pose.keypoints[b];
          if (ka.confidence > 0.1 && kb.confidence > 0.1) {
            line(ka.x, ka.y, kb.x, kb.y);
          }
        }
      }
    }
  } else {
    // 兜底提示：没画面时提示允许摄像头 & 点击启动
    fill(200);
    text('No video yet. Allow camera permission, then click canvas to start.', 10, 22);
  }
}
