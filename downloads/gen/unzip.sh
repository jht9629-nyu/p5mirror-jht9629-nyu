cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "MazeSpin liberation screens v2-wT957KlMz"
rm -rf "./MazeSpin liberation screens v2-wT957KlMz"
mkdir "./MazeSpin liberation screens v2-wT957KlMz"
pushd "./MazeSpin liberation screens v2-wT957KlMz" > /dev/null
unzip -q "../../downloads/zips/MazeSpin liberation screens v2-wT957KlMz"
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