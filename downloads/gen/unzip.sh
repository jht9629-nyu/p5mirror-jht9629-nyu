cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims04-image-particle-584bCKj5G"
rm -rf "./ims04-image-particle-584bCKj5G"
mkdir "./ims04-image-particle-584bCKj5G"
pushd "./ims04-image-particle-584bCKj5G" > /dev/null
unzip -q "../../downloads/zips/ims04-image-particle-584bCKj5G"
popd > /dev/null
#
echo unzip 2 "ims04-video-particle-TtVWUuKVC"
rm -rf "./ims04-video-particle-TtVWUuKVC"
mkdir "./ims04-video-particle-TtVWUuKVC"
pushd "./ims04-video-particle-TtVWUuKVC" > /dev/null
unzip -q "../../downloads/zips/ims04-video-particle-TtVWUuKVC"
popd > /dev/null
#
echo unzip 3 "heavy RAM webcam v2-OBYuc5crK"
rm -rf "./heavy RAM webcam v2-OBYuc5crK"
mkdir "./heavy RAM webcam v2-OBYuc5crK"
pushd "./heavy RAM webcam v2-OBYuc5crK" > /dev/null
unzip -q "../../downloads/zips/heavy RAM webcam v2-OBYuc5crK"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js ml5.min.js
rm -f p5projects/*/p5.* p5projects/*/ml5.min.js
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi