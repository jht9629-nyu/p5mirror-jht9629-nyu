cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "faceMesh mesh_nits v9 bars-CMiG5M39F"
rm -rf "./faceMesh mesh_nits v9 bars-CMiG5M39F"
mkdir "./faceMesh mesh_nits v9 bars-CMiG5M39F"
pushd "./faceMesh mesh_nits v9 bars-CMiG5M39F" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v9 bars-CMiG5M39F"
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