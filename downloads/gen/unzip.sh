cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "faceMesh mesh_nits v8 bestill-_3QMiI-fM"
rm -rf "./faceMesh mesh_nits v8 bestill-_3QMiI-fM"
mkdir "./faceMesh mesh_nits v8 bestill-_3QMiI-fM"
pushd "./faceMesh mesh_nits v8 bestill-_3QMiI-fM" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v8 bestill-_3QMiI-fM"
popd > /dev/null
#
echo unzip 2 "faceMesh mesh_nits v8 inner-uOjmgYoZJ"
rm -rf "./faceMesh mesh_nits v8 inner-uOjmgYoZJ"
mkdir "./faceMesh mesh_nits v8 inner-uOjmgYoZJ"
pushd "./faceMesh mesh_nits v8 inner-uOjmgYoZJ" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v8 inner-uOjmgYoZJ"
popd > /dev/null
#
echo unzip 3 "faceMesh mesh_nits v7 mask-PuoF9-3xy"
rm -rf "./faceMesh mesh_nits v7 mask-PuoF9-3xy"
mkdir "./faceMesh mesh_nits v7 mask-PuoF9-3xy"
pushd "./faceMesh mesh_nits v7 mask-PuoF9-3xy" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v7 mask-PuoF9-3xy"
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