cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "Hyper promotion-Ddt4PnnER"
rm -rf "./Hyper promotion-Ddt4PnnER"
mkdir "./Hyper promotion-Ddt4PnnER"
pushd "./Hyper promotion-Ddt4PnnER" > /dev/null
unzip -q "../../downloads/zips/Hyper promotion-Ddt4PnnER"
popd > /dev/null
#
echo unzip 2 "lit demo storage v3-W_42_8Enr"
rm -rf "./lit demo storage v3-W_42_8Enr"
mkdir "./lit demo storage v3-W_42_8Enr"
pushd "./lit demo storage v3-W_42_8Enr" > /dev/null
unzip -q "../../downloads/zips/lit demo storage v3-W_42_8Enr"
popd > /dev/null
#
echo unzip 3 "W4 Re-write as a loop - I copy-SBY8znaxT"
rm -rf "./W4 Re-write as a loop - I copy-SBY8znaxT"
mkdir "./W4 Re-write as a loop - I copy-SBY8znaxT"
pushd "./W4 Re-write as a loop - I copy-SBY8znaxT" > /dev/null
unzip -q "../../downloads/zips/W4 Re-write as a loop - I copy-SBY8znaxT"
popd > /dev/null
#
echo unzip 4 "faceMesh mesh_nits v8 bestill-_3QMiI-fM"
rm -rf "./faceMesh mesh_nits v8 bestill-_3QMiI-fM"
mkdir "./faceMesh mesh_nits v8 bestill-_3QMiI-fM"
pushd "./faceMesh mesh_nits v8 bestill-_3QMiI-fM" > /dev/null
unzip -q "../../downloads/zips/faceMesh mesh_nits v8 bestill-_3QMiI-fM"
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