cd "/Users/jht2/Documents/projects/2024/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "noise detecter copy-GXm_kvVjg5"
rm -rf "./noise detecter copy-GXm_kvVjg5"
mkdir "./noise detecter copy-GXm_kvVjg5"
pushd "./noise detecter copy-GXm_kvVjg5" > /dev/null
unzip -q "../../downloads/zips/noise detecter copy-GXm_kvVjg5"
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