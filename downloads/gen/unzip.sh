cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims04-jht scroll color rate-2pxhnehBV"
rm -rf "./ims04-jht scroll color rate-2pxhnehBV"
mkdir "./ims04-jht scroll color rate-2pxhnehBV"
pushd "./ims04-jht scroll color rate-2pxhnehBV" > /dev/null
unzip -q "../../downloads/zips/ims04-jht scroll color rate-2pxhnehBV"
popd > /dev/null
#
echo unzip 2 "p5moExamples lobby-vP6sWN4Cu"
rm -rf "./p5moExamples lobby-vP6sWN4Cu"
mkdir "./p5moExamples lobby-vP6sWN4Cu"
pushd "./p5moExamples lobby-vP6sWN4Cu" > /dev/null
unzip -q "../../downloads/zips/p5moExamples lobby-vP6sWN4Cu"
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