cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "arc overlap free v29-oX_IJ2zVt"
rm -rf "./arc overlap free v29-oX_IJ2zVt"
mkdir "./arc overlap free v29-oX_IJ2zVt"
pushd "./arc overlap free v29-oX_IJ2zVt" > /dev/null
unzip -q "../../downloads/zips/arc overlap free v29-oX_IJ2zVt"
popd > /dev/null
#
echo unzip 2 "arc test-Bvg-sIWPw"
rm -rf "./arc test-Bvg-sIWPw"
mkdir "./arc test-Bvg-sIWPw"
pushd "./arc test-Bvg-sIWPw" > /dev/null
unzip -q "../../downloads/zips/arc test-Bvg-sIWPw"
popd > /dev/null
#
echo unzip 3 "innerCount overlap free v28-Vz7S8m4vY"
rm -rf "./innerCount overlap free v28-Vz7S8m4vY"
mkdir "./innerCount overlap free v28-Vz7S8m4vY"
pushd "./innerCount overlap free v28-Vz7S8m4vY" > /dev/null
unzip -q "../../downloads/zips/innerCount overlap free v28-Vz7S8m4vY"
popd > /dev/null
#
echo unzip 4 "random innerCount overlap v27-9GoF-em-1"
rm -rf "./random innerCount overlap v27-9GoF-em-1"
mkdir "./random innerCount overlap v27-9GoF-em-1"
pushd "./random innerCount overlap v27-9GoF-em-1" > /dev/null
unzip -q "../../downloads/zips/random innerCount overlap v27-9GoF-em-1"
popd > /dev/null
#
echo unzip 5 "shapes random noutter v26-Ukn0gpH4r"
rm -rf "./shapes random noutter v26-Ukn0gpH4r"
mkdir "./shapes random noutter v26-Ukn0gpH4r"
pushd "./shapes random noutter v26-Ukn0gpH4r" > /dev/null
unzip -q "../../downloads/zips/shapes random noutter v26-Ukn0gpH4r"
popd > /dev/null
#
echo unzip 6 "random innerCount overlap v26-L4ClpFHhJ"
rm -rf "./random innerCount overlap v26-L4ClpFHhJ"
mkdir "./random innerCount overlap v26-L4ClpFHhJ"
pushd "./random innerCount overlap v26-L4ClpFHhJ" > /dev/null
unzip -q "../../downloads/zips/random innerCount overlap v26-L4ClpFHhJ"
popd > /dev/null
#
echo unzip 7 "random bg fg v1-cN8bDbHgE"
rm -rf "./random bg fg v1-cN8bDbHgE"
mkdir "./random bg fg v1-cN8bDbHgE"
pushd "./random bg fg v1-cN8bDbHgE" > /dev/null
unzip -q "../../downloads/zips/random bg fg v1-cN8bDbHgE"
popd > /dev/null
#
echo unzip 8 "shapes random innerCount v25-6vzZeu7LG"
rm -rf "./shapes random innerCount v25-6vzZeu7LG"
mkdir "./shapes random innerCount v25-6vzZeu7LG"
pushd "./shapes random innerCount v25-6vzZeu7LG" > /dev/null
unzip -q "../../downloads/zips/shapes random innerCount v25-6vzZeu7LG"
popd > /dev/null
#
echo unzip 9 "shapes random ninner v24-npE4WZS_0"
rm -rf "./shapes random ninner v24-npE4WZS_0"
mkdir "./shapes random ninner v24-npE4WZS_0"
pushd "./shapes random ninner v24-npE4WZS_0" > /dev/null
unzip -q "../../downloads/zips/shapes random ninner v24-npE4WZS_0"
popd > /dev/null
#
echo unzip 10 "shapes random pause v23-_waqMsgSP"
rm -rf "./shapes random pause v23-_waqMsgSP"
mkdir "./shapes random pause v23-_waqMsgSP"
pushd "./shapes random pause v23-_waqMsgSP" > /dev/null
unzip -q "../../downloads/zips/shapes random pause v23-_waqMsgSP"
popd > /dev/null
#
echo unzip 11 "Technology by Vamoss-syH2Nh5RO"
rm -rf "./Technology by Vamoss-syH2Nh5RO"
mkdir "./Technology by Vamoss-syH2Nh5RO"
pushd "./Technology by Vamoss-syH2Nh5RO" > /dev/null
unzip -q "../../downloads/zips/Technology by Vamoss-syH2Nh5RO"
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