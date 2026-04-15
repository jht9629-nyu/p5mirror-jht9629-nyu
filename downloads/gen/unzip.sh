cd "/Users/jht2/Documents/projects/_2026/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "sliding window v1 responsive horizontal two hands copy-Y8xEY-4dj"
rm -rf "./sliding window v1 responsive horizontal two hands copy-Y8xEY-4dj"
mkdir "./sliding window v1 responsive horizontal two hands copy-Y8xEY-4dj"
pushd "./sliding window v1 responsive horizontal two hands copy-Y8xEY-4dj" > /dev/null
unzip -q "../../downloads/zips/sliding window v1 responsive horizontal two hands copy-Y8xEY-4dj"
popd > /dev/null
#
echo unzip 2 "ims04-media-particle-CDlUfTNmy"
rm -rf "./ims04-media-particle-CDlUfTNmy"
mkdir "./ims04-media-particle-CDlUfTNmy"
pushd "./ims04-media-particle-CDlUfTNmy" > /dev/null
unzip -q "../../downloads/zips/ims04-media-particle-CDlUfTNmy"
popd > /dev/null
#
echo unzip 3 "ims03-Arial copy-c0DCRqGto"
rm -rf "./ims03-Arial copy-c0DCRqGto"
mkdir "./ims03-Arial copy-c0DCRqGto"
pushd "./ims03-Arial copy-c0DCRqGto" > /dev/null
unzip -q "../../downloads/zips/ims03-Arial copy-c0DCRqGto"
popd > /dev/null
#
echo unzip 4 "ims03-Arial v0-GJxfSr5Fj"
rm -rf "./ims03-Arial v0-GJxfSr5Fj"
mkdir "./ims03-Arial v0-GJxfSr5Fj"
pushd "./ims03-Arial v0-GJxfSr5Fj" > /dev/null
unzip -q "../../downloads/zips/ims03-Arial v0-GJxfSr5Fj"
popd > /dev/null
#
echo unzip 5 "heavy RAM webcam v2-OBYuc5crK"
rm -rf "./heavy RAM webcam v2-OBYuc5crK"
mkdir "./heavy RAM webcam v2-OBYuc5crK"
pushd "./heavy RAM webcam v2-OBYuc5crK" > /dev/null
unzip -q "../../downloads/zips/heavy RAM webcam v2-OBYuc5crK"
popd > /dev/null
#
echo unzip 6 "ims01-jht basic-ov1oy3CM8"
rm -rf "./ims01-jht basic-ov1oy3CM8"
mkdir "./ims01-jht basic-ov1oy3CM8"
pushd "./ims01-jht basic-ov1oy3CM8" > /dev/null
unzip -q "../../downloads/zips/ims01-jht basic-ov1oy3CM8"
popd > /dev/null
#
echo unzip 7 "ims04-video-particle-TtVWUuKVC"
rm -rf "./ims04-video-particle-TtVWUuKVC"
mkdir "./ims04-video-particle-TtVWUuKVC"
pushd "./ims04-video-particle-TtVWUuKVC" > /dev/null
unzip -q "../../downloads/zips/ims04-video-particle-TtVWUuKVC"
popd > /dev/null
#
echo unzip 8 "shapes random innerCount v25-6vzZeu7LG"
rm -rf "./shapes random innerCount v25-6vzZeu7LG"
mkdir "./shapes random innerCount v25-6vzZeu7LG"
pushd "./shapes random innerCount v25-6vzZeu7LG" > /dev/null
unzip -q "../../downloads/zips/shapes random innerCount v25-6vzZeu7LG"
popd > /dev/null
#
echo unzip 9 "download test 02-C0QlBQaS3"
rm -rf "./download test 02-C0QlBQaS3"
mkdir "./download test 02-C0QlBQaS3"
pushd "./download test 02-C0QlBQaS3" > /dev/null
unzip -q "../../downloads/zips/download test 02-C0QlBQaS3"
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