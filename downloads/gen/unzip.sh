cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "bezier draw rainbow noise v5-vFHFG2gSC"
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