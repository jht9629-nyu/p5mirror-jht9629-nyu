cd "/Users/jht2/Documents/projects/_2026/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims-05-video shader-l-iDtUbG"
rm -rf "./ims-05-video shader-l-iDtUbG"
mkdir "./ims-05-video shader-l-iDtUbG"
pushd "./ims-05-video shader-l-iDtUbG" > /dev/null
unzip -q "../../downloads/zips/ims-05-video shader-l-iDtUbG"
popd > /dev/null
#
echo unzip 2 "Profuse othnielia-GvOgKqBR8"
rm -rf "./Profuse othnielia-GvOgKqBR8"
mkdir "./Profuse othnielia-GvOgKqBR8"
pushd "./Profuse othnielia-GvOgKqBR8" > /dev/null
unzip -q "../../downloads/zips/Profuse othnielia-GvOgKqBR8"
popd > /dev/null
#
echo unzip 3 "sliding window v1 debug-YWxHLeQsl"
rm -rf "./sliding window v1 debug-YWxHLeQsl"
mkdir "./sliding window v1 debug-YWxHLeQsl"
pushd "./sliding window v1 debug-YWxHLeQsl" > /dev/null
unzip -q "../../downloads/zips/sliding window v1 debug-YWxHLeQsl"
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