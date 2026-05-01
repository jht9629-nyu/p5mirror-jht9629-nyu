cd "/Users/jht2/Documents/projects/_2026/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "matt-parker-oct-16-RoplKxfBB"
rm -rf "./matt-parker-oct-16-RoplKxfBB"
mkdir "./matt-parker-oct-16-RoplKxfBB"
pushd "./matt-parker-oct-16-RoplKxfBB" > /dev/null
unzip -q "../../downloads/zips/matt-parker-oct-16-RoplKxfBB"
popd > /dev/null
#
echo unzip 2 "face doodle v3 yifan-sDA_AH3Gm"
rm -rf "./face doodle v3 yifan-sDA_AH3Gm"
mkdir "./face doodle v3 yifan-sDA_AH3Gm"
pushd "./face doodle v3 yifan-sDA_AH3Gm" > /dev/null
unzip -q "../../downloads/zips/face doodle v3 yifan-sDA_AH3Gm"
popd > /dev/null
#
echo unzip 3 "matt-parker-nov15 copy-EE84Ci6hM"
rm -rf "./matt-parker-nov15 copy-EE84Ci6hM"
mkdir "./matt-parker-nov15 copy-EE84Ci6hM"
pushd "./matt-parker-nov15 copy-EE84Ci6hM" > /dev/null
unzip -q "../../downloads/zips/matt-parker-nov15 copy-EE84Ci6hM"
popd > /dev/null
#
echo unzip 4 "matt-parker-nov15-jr1ok4EaN"
rm -rf "./matt-parker-nov15-jr1ok4EaN"
mkdir "./matt-parker-nov15-jr1ok4EaN"
pushd "./matt-parker-nov15-jr1ok4EaN" > /dev/null
unzip -q "../../downloads/zips/matt-parker-nov15-jr1ok4EaN"
popd > /dev/null
#
echo unzip 5 "Butterfly copy-iCJlXu0CP"
rm -rf "./Butterfly copy-iCJlXu0CP"
mkdir "./Butterfly copy-iCJlXu0CP"
pushd "./Butterfly copy-iCJlXu0CP" > /dev/null
unzip -q "../../downloads/zips/Butterfly copy-iCJlXu0CP"
popd > /dev/null
#
echo unzip 6 "Althea-genie copy-Mvo2b44O-"
rm -rf "./Althea-genie copy-Mvo2b44O-"
mkdir "./Althea-genie copy-Mvo2b44O-"
pushd "./Althea-genie copy-Mvo2b44O-" > /dev/null
unzip -q "../../downloads/zips/Althea-genie copy-Mvo2b44O-"
popd > /dev/null
#
echo unzip 7 "p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
rm -rf "./p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
mkdir "./p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
pushd "./p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3" > /dev/null
unzip -q "../../downloads/zips/p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
popd > /dev/null
#
echo unzip 8 "p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
rm -rf "./p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
mkdir "./p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
pushd "./p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN" > /dev/null
unzip -q "../../downloads/zips/p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
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