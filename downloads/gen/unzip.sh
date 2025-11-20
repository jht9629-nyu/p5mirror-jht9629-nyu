cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "bodyPose pixel oval v22-IJSKz0tNz"
rm -rf "./bodyPose pixel oval v22-IJSKz0tNz"
mkdir "./bodyPose pixel oval v22-IJSKz0tNz"
pushd "./bodyPose pixel oval v22-IJSKz0tNz" > /dev/null
unzip -q "../../downloads/zips/bodyPose pixel oval v22-IJSKz0tNz"
popd > /dev/null
#
echo unzip 2 "BodyPose - single image v0-JWggodbvY"
rm -rf "./BodyPose - single image v0-JWggodbvY"
mkdir "./BodyPose - single image v0-JWggodbvY"
pushd "./BodyPose - single image v0-JWggodbvY" > /dev/null
unzip -q "../../downloads/zips/BodyPose - single image v0-JWggodbvY"
popd > /dev/null
#
echo unzip 3 "bodyPose-blazePose-keypoints v0-lbIuVFbNG"
rm -rf "./bodyPose-blazePose-keypoints v0-lbIuVFbNG"
mkdir "./bodyPose-blazePose-keypoints v0-lbIuVFbNG"
pushd "./bodyPose-blazePose-keypoints v0-lbIuVFbNG" > /dev/null
unzip -q "../../downloads/zips/bodyPose-blazePose-keypoints v0-lbIuVFbNG"
popd > /dev/null
#
echo unzip 4 "polar three leaf clover-EMEY0maqR"
rm -rf "./polar three leaf clover-EMEY0maqR"
mkdir "./polar three leaf clover-EMEY0maqR"
pushd "./polar three leaf clover-EMEY0maqR" > /dev/null
unzip -q "../../downloads/zips/polar three leaf clover-EMEY0maqR"
popd > /dev/null
#
echo unzip 5 "pixel reveal oval v21-6DRHLF0ZJ"
rm -rf "./pixel reveal oval v21-6DRHLF0ZJ"
mkdir "./pixel reveal oval v21-6DRHLF0ZJ"
pushd "./pixel reveal oval v21-6DRHLF0ZJ" > /dev/null
unzip -q "../../downloads/zips/pixel reveal oval v21-6DRHLF0ZJ"
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