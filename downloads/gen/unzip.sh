cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims01-jht-ov1oy3CM8"
rm -rf "./ims01-jht-ov1oy3CM8"
mkdir "./ims01-jht-ov1oy3CM8"
pushd "./ims01-jht-ov1oy3CM8" > /dev/null
unzip -q "../../downloads/zips/ims01-jht-ov1oy3CM8"
popd > /dev/null
#
echo unzip 2 "video glitch thing copy copy-tF1Dwm4Aa"
rm -rf "./video glitch thing copy copy-tF1Dwm4Aa"
mkdir "./video glitch thing copy copy-tF1Dwm4Aa"
pushd "./video glitch thing copy copy-tF1Dwm4Aa" > /dev/null
unzip -q "../../downloads/zips/video glitch thing copy copy-tF1Dwm4Aa"
popd > /dev/null
#
echo unzip 3 "ims01-gabriel copy-b4GdH7TSy"
rm -rf "./ims01-gabriel copy-b4GdH7TSy"
mkdir "./ims01-gabriel copy-b4GdH7TSy"
pushd "./ims01-gabriel copy-b4GdH7TSy" > /dev/null
unzip -q "../../downloads/zips/ims01-gabriel copy-b4GdH7TSy"
popd > /dev/null
#
echo unzip 4 "ims01-gabriel copy-vB0QRSxBI"
rm -rf "./ims01-gabriel copy-vB0QRSxBI"
mkdir "./ims01-gabriel copy-vB0QRSxBI"
pushd "./ims01-gabriel copy-vB0QRSxBI" > /dev/null
unzip -q "../../downloads/zips/ims01-gabriel copy-vB0QRSxBI"
popd > /dev/null
#
echo unzip 5 "ims01-Arial copy-vBGuTcWj6"
rm -rf "./ims01-Arial copy-vBGuTcWj6"
mkdir "./ims01-Arial copy-vBGuTcWj6"
pushd "./ims01-Arial copy-vBGuTcWj6" > /dev/null
unzip -q "../../downloads/zips/ims01-Arial copy-vBGuTcWj6"
popd > /dev/null
#
echo unzip 6 "ims01-Althea copy-8knza3JaF"
rm -rf "./ims01-Althea copy-8knza3JaF"
mkdir "./ims01-Althea copy-8knza3JaF"
pushd "./ims01-Althea copy-8knza3JaF" > /dev/null
unzip -q "../../downloads/zips/ims01-Althea copy-8knza3JaF"
popd > /dev/null
#
echo unzip 7 "Hello, p5.js 2.0! Example VF Sketch v0-L7ob7qccY"
rm -rf "./Hello, p5.js 2.0! Example VF Sketch v0-L7ob7qccY"
mkdir "./Hello, p5.js 2.0! Example VF Sketch v0-L7ob7qccY"
pushd "./Hello, p5.js 2.0! Example VF Sketch v0-L7ob7qccY" > /dev/null
unzip -q "../../downloads/zips/Hello, p5.js 2.0! Example VF Sketch v0-L7ob7qccY"
popd > /dev/null
#
echo unzip 8 "ims-01 bounce fullscreen deltaTime-mWssDB4v-"
rm -rf "./ims-01 bounce fullscreen deltaTime-mWssDB4v-"
mkdir "./ims-01 bounce fullscreen deltaTime-mWssDB4v-"
pushd "./ims-01 bounce fullscreen deltaTime-mWssDB4v-" > /dev/null
unzip -q "../../downloads/zips/ims-01 bounce fullscreen deltaTime-mWssDB4v-"
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