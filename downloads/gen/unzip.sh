cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "1202combine-Jessie-ejg95EK-5"
rm -rf "./1202combine-Jessie-ejg95EK-5"
mkdir "./1202combine-Jessie-ejg95EK-5"
pushd "./1202combine-Jessie-ejg95EK-5" > /dev/null
unzip -q "../../downloads/zips/1202combine-Jessie-ejg95EK-5"
popd > /dev/null
#
echo unzip 2 "2024-11-30-Matter Triangle-R-BDJJkkR"
rm -rf "./2024-11-30-Matter Triangle-R-BDJJkkR"
mkdir "./2024-11-30-Matter Triangle-R-BDJJkkR"
pushd "./2024-11-30-Matter Triangle-R-BDJJkkR" > /dev/null
unzip -q "../../downloads/zips/2024-11-30-Matter Triangle-R-BDJJkkR"
popd > /dev/null
#
echo unzip 3 "mo-gallery-rroom renewal-rroom copy-5k5yNIimz"
rm -rf "./mo-gallery-rroom renewal-rroom copy-5k5yNIimz"
mkdir "./mo-gallery-rroom renewal-rroom copy-5k5yNIimz"
pushd "./mo-gallery-rroom renewal-rroom copy-5k5yNIimz" > /dev/null
unzip -q "../../downloads/zips/mo-gallery-rroom renewal-rroom copy-5k5yNIimz"
popd > /dev/null
#
echo unzip 4 "Standing cowl-X8Y1ZXt3Z"
rm -rf "./Standing cowl-X8Y1ZXt3Z"
mkdir "./Standing cowl-X8Y1ZXt3Z"
pushd "./Standing cowl-X8Y1ZXt3Z" > /dev/null
unzip -q "../../downloads/zips/Standing cowl-X8Y1ZXt3Z"
popd > /dev/null
#
echo unzip 5 "2024-11-21-yoga5.js-uiGpjxuK4"
rm -rf "./2024-11-21-yoga5.js-uiGpjxuK4"
mkdir "./2024-11-21-yoga5.js-uiGpjxuK4"
pushd "./2024-11-21-yoga5.js-uiGpjxuK4" > /dev/null
unzip -q "../../downloads/zips/2024-11-21-yoga5.js-uiGpjxuK4"
popd > /dev/null
#
echo unzip 6 "text points perlin noise copy-ayJgJmo1h"
rm -rf "./text points perlin noise copy-ayJgJmo1h"
mkdir "./text points perlin noise copy-ayJgJmo1h"
pushd "./text points perlin noise copy-ayJgJmo1h" > /dev/null
unzip -q "../../downloads/zips/text points perlin noise copy-ayJgJmo1h"
popd > /dev/null
#
echo unzip 7 "text points perlin noise copy-O4APPvw4J"
rm -rf "./text points perlin noise copy-O4APPvw4J"
mkdir "./text points perlin noise copy-O4APPvw4J"
pushd "./text points perlin noise copy-O4APPvw4J" > /dev/null
unzip -q "../../downloads/zips/text points perlin noise copy-O4APPvw4J"
popd > /dev/null
#
echo unzip 8 "Truchet Therapeutic - evolution-aj-hT_W1O"
rm -rf "./Truchet Therapeutic - evolution-aj-hT_W1O"
mkdir "./Truchet Therapeutic - evolution-aj-hT_W1O"
pushd "./Truchet Therapeutic - evolution-aj-hT_W1O" > /dev/null
unzip -q "../../downloads/zips/Truchet Therapeutic - evolution-aj-hT_W1O"
popd > /dev/null
#
echo unzip 9 "ims-03-jht truchet tiles pause copy-CYMdD77ySc"
rm -rf "./ims-03-jht truchet tiles pause copy-CYMdD77ySc"
mkdir "./ims-03-jht truchet tiles pause copy-CYMdD77ySc"
pushd "./ims-03-jht truchet tiles pause copy-CYMdD77ySc" > /dev/null
unzip -q "../../downloads/zips/ims-03-jht truchet tiles pause copy-CYMdD77ySc"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi