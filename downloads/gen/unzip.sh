cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "video radial perlin pix-J2p8pZTNH"
rm -rf "./video radial perlin pix-J2p8pZTNH"
mkdir "./video radial perlin pix-J2p8pZTNH"
pushd "./video radial perlin pix-J2p8pZTNH" > /dev/null
unzip -q "../../downloads/zips/video radial perlin pix-J2p8pZTNH"
popd > /dev/null
#
echo unzip 2 "MazeSpin liberation screens copy-PN3n1CXom"
rm -rf "./MazeSpin liberation screens copy-PN3n1CXom"
mkdir "./MazeSpin liberation screens copy-PN3n1CXom"
pushd "./MazeSpin liberation screens copy-PN3n1CXom" > /dev/null
unzip -q "../../downloads/zips/MazeSpin liberation screens copy-PN3n1CXom"
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