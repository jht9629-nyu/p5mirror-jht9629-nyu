function setup_palette() {
    color_center = [
    color(255, 255, 100), // 0 yellow
    color(253, 106, 1), // 1  orange
    color(1, 143, 201), // 2 greenish blue
    color(167, 87, 182), // 3 purple
    color(64, 204, 239), // 4 light blue
    color(120, 179, 61), // 5  green
    color(176, 28, 67), // 6  red
    color(255), // 7 white
  ];

  color_outer = [
    color(20, 1, 244), // 0 deep blue
    color(255, 175, 70), // 1 light orange
    color(227, 27, 37), // 2 red
    color(123, 4, 192), // 3 purple
    color(255), // 4 white
    color(255, 50, 150), // 5 bright pink
    color(255, 255, 100), // 6 yellow
    color(120, 179, 61), // 7  green
  ];

  color_pairs = [
    [color_center[0], color_outer[5]],
    [color_center[1], color_outer[4]],
    [color_center[5], color_outer[3]],
    [color_center[3], color_outer[1]],
    [color_center[1], color_outer[0]],
    [color_center[2], color_outer[2]],
    [color_center[6], color_outer[6]],
    [color_center[7], color_outer[3]],
    [color_center[4], color_outer[7]],
    [color_center[6], color_outer[0]],
    [color_center[2], color_outer[2]],
  ];

}
