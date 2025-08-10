cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "shapes random pause v23-_waqMsgSP"
rm -rf "./shapes random pause v23-_waqMsgSP"
mkdir "./shapes random pause v23-_waqMsgSP"
pushd "./shapes random pause v23-_waqMsgSP" > /dev/null
unzip -q "../../downloads/zips/shapes random pause v23-_waqMsgSP"
popd > /dev/null
#
echo unzip 2 "011-ReverbDecayTime-CjG_BTXec"
rm -rf "./011-ReverbDecayTime-CjG_BTXec"
mkdir "./011-ReverbDecayTime-CjG_BTXec"
pushd "./011-ReverbDecayTime-CjG_BTXec" > /dev/null
unzip -q "../../downloads/zips/011-ReverbDecayTime-CjG_BTXec"
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