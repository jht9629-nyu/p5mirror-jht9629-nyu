cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "faceMesh mesh_nits v7 mask-PuoF9-3xy"
rm -rf "./faceMesh mesh_nits v7 mask-PuoF9-3xy"
mkdir "./faceMesh mesh_nits v7 mask-PuoF9-3xy"
pushd "./faceMesh mesh_nits v7 mask-PuoF9-3xy" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v7 mask-PuoF9-3xy"
popd > /dev/null
#
echo unzip 2 "faceMesh mesh_nits v6 - stray mask-fsOAbI6SJ"
rm -rf "./faceMesh mesh_nits v6 - stray mask-fsOAbI6SJ"
mkdir "./faceMesh mesh_nits v6 - stray mask-fsOAbI6SJ"
pushd "./faceMesh mesh_nits v6 - stray mask-fsOAbI6SJ" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v6 - stray mask-fsOAbI6SJ"
popd > /dev/null
#
echo unzip 3 "faceMesh mesh_nits v4-p4Uu0B2sk"
rm -rf "./faceMesh mesh_nits v4-p4Uu0B2sk"
mkdir "./faceMesh mesh_nits v4-p4Uu0B2sk"
pushd "./faceMesh mesh_nits v4-p4Uu0B2sk" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v4-p4Uu0B2sk"
popd > /dev/null
#
echo unzip 4 "faceMesh mesh_nits v5-nDEtGRehq"
rm -rf "./faceMesh mesh_nits v5-nDEtGRehq"
mkdir "./faceMesh mesh_nits v5-nDEtGRehq"
pushd "./faceMesh mesh_nits v5-nDEtGRehq" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v5-nDEtGRehq"
popd > /dev/null
#
echo unzip 5 "faceMesh mesh_nits v3-hFnQmY-Jy"
rm -rf "./faceMesh mesh_nits v3-hFnQmY-Jy"
mkdir "./faceMesh mesh_nits v3-hFnQmY-Jy"
pushd "./faceMesh mesh_nits v3-hFnQmY-Jy" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v3-hFnQmY-Jy"
popd > /dev/null
#
echo unzip 6 "faceMesh mesh_nits v2-7y2gqHeZz"
rm -rf "./faceMesh mesh_nits v2-7y2gqHeZz"
mkdir "./faceMesh mesh_nits v2-7y2gqHeZz"
pushd "./faceMesh mesh_nits v2-7y2gqHeZz" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v2-7y2gqHeZz"
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