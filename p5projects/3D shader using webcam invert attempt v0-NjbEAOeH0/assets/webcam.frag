precision mediump float;

uniform sampler2D tex0;
uniform float u_time;
uniform vec2 u_resolution;

varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;

  // Horiznotal distortion
  float wave = sin(uv.y * 10.0 + u_time * 2.0) * 0.02;
  uv.x += wave;

  // Sample webcam color
  vec4 color = texture2D(tex0, uv);

  // Invert rgb
  vec3 inverted = vec3(1.0) - color.rgb;

  gl_FragColor = vec4(inverted, color.a);
}
