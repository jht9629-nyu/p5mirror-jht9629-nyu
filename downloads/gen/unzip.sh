cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims02-shader-trail-kVeqUFD1O"
rm -rf "./ims02-shader-trail-kVeqUFD1O"
mkdir "./ims02-shader-trail-kVeqUFD1O"
pushd "./ims02-shader-trail-kVeqUFD1O" > /dev/null
unzip -q "../../downloads/zips/ims02-shader-trail-kVeqUFD1O"
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