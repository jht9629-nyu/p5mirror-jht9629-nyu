cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "video pixel scan copy-heaOtyFJz"
rm -rf "./video pixel scan copy-heaOtyFJz"
mkdir "./video pixel scan copy-heaOtyFJz"
pushd "./video pixel scan copy-heaOtyFJz" > /dev/null
unzip -q "../../downloads/zips/video pixel scan copy-heaOtyFJz"
popd > /dev/null
#
echo unzip 2 "Sol LeWitt Sq Lines v4-2a4poWlZP"
rm -rf "./Sol LeWitt Sq Lines v4-2a4poWlZP"
mkdir "./Sol LeWitt Sq Lines v4-2a4poWlZP"
pushd "./Sol LeWitt Sq Lines v4-2a4poWlZP" > /dev/null
unzip -q "../../downloads/zips/Sol LeWitt Sq Lines v4-2a4poWlZP"
popd > /dev/null
#
echo unzip 3 "Scarce abacus truchet v1-FkiTjW9bk"
rm -rf "./Scarce abacus truchet v1-FkiTjW9bk"
mkdir "./Scarce abacus truchet v1-FkiTjW9bk"
pushd "./Scarce abacus truchet v1-FkiTjW9bk" > /dev/null
unzip -q "../../downloads/zips/Scarce abacus truchet v1-FkiTjW9bk"
popd > /dev/null
#
echo unzip 4 "ims-03-jht truchet tiles pause v4-ZU4qwXI2E"
rm -rf "./ims-03-jht truchet tiles pause v4-ZU4qwXI2E"
mkdir "./ims-03-jht truchet tiles pause v4-ZU4qwXI2E"
pushd "./ims-03-jht truchet tiles pause v4-ZU4qwXI2E" > /dev/null
unzip -q "../../downloads/zips/ims-03-jht truchet tiles pause v4-ZU4qwXI2E"
popd > /dev/null
#
echo unzip 5 "Scarce abacus truchet v0-_5metu1S4"
rm -rf "./Scarce abacus truchet v0-_5metu1S4"
mkdir "./Scarce abacus truchet v0-_5metu1S4"
pushd "./Scarce abacus truchet v0-_5metu1S4" > /dev/null
unzip -q "../../downloads/zips/Scarce abacus truchet v0-_5metu1S4"
popd > /dev/null
#
echo unzip 6 "ims-03-jht truchet tiles pause v3-zZsfxeZjs"
rm -rf "./ims-03-jht truchet tiles pause v3-zZsfxeZjs"
mkdir "./ims-03-jht truchet tiles pause v3-zZsfxeZjs"
pushd "./ims-03-jht truchet tiles pause v3-zZsfxeZjs" > /dev/null
unzip -q "../../downloads/zips/ims-03-jht truchet tiles pause v3-zZsfxeZjs"
popd > /dev/null
#
echo unzip 7 "noise fill fail v2-QyQLw6ZC_"
rm -rf "./noise fill fail v2-QyQLw6ZC_"
mkdir "./noise fill fail v2-QyQLw6ZC_"
pushd "./noise fill fail v2-QyQLw6ZC_" > /dev/null
unzip -q "../../downloads/zips/noise fill fail v2-QyQLw6ZC_"
popd > /dev/null
#
echo unzip 8 "noise fill fail-B2PQd1dxF"
rm -rf "./noise fill fail-B2PQd1dxF"
mkdir "./noise fill fail-B2PQd1dxF"
pushd "./noise fill fail-B2PQd1dxF" > /dev/null
unzip -q "../../downloads/zips/noise fill fail-B2PQd1dxF"
popd > /dev/null
#
echo unzip 9 "bezier draw rainbow noise v5-vFHFG2gSC"
rm -rf "./bezier draw rainbow noise v5-vFHFG2gSC"
mkdir "./bezier draw rainbow noise v5-vFHFG2gSC"
pushd "./bezier draw rainbow noise v5-vFHFG2gSC" > /dev/null
unzip -q "../../downloads/zips/bezier draw rainbow noise v5-vFHFG2gSC"
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