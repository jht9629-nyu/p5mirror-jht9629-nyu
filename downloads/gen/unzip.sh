cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims02-kayla copy-3bE5kzmG6"
rm -rf "./ims02-kayla copy-3bE5kzmG6"
mkdir "./ims02-kayla copy-3bE5kzmG6"
pushd "./ims02-kayla copy-3bE5kzmG6" > /dev/null
unzip -q "../../downloads/zips/ims02-kayla copy-3bE5kzmG6"
popd > /dev/null
#
echo unzip 2 "ims02-kayla v0-aq-2DY7gX"
rm -rf "./ims02-kayla v0-aq-2DY7gX"
mkdir "./ims02-kayla v0-aq-2DY7gX"
pushd "./ims02-kayla v0-aq-2DY7gX" > /dev/null
unzip -q "../../downloads/zips/ims02-kayla v0-aq-2DY7gX"
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