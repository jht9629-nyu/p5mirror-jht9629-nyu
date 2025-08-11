cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims-03-jht truchet tiles pause v2-CYMdD77ySc"
rm -rf "./ims-03-jht truchet tiles pause v2-CYMdD77ySc"
mkdir "./ims-03-jht truchet tiles pause v2-CYMdD77ySc"
pushd "./ims-03-jht truchet tiles pause v2-CYMdD77ySc" > /dev/null
unzip -q "../../downloads/zips/ims-03-jht truchet tiles pause v2-CYMdD77ySc"
popd > /dev/null
#
echo unzip 2 "Technology by Vamoss v2-UZtQLw_Rr"
rm -rf "./Technology by Vamoss v2-UZtQLw_Rr"
mkdir "./Technology by Vamoss v2-UZtQLw_Rr"
pushd "./Technology by Vamoss v2-UZtQLw_Rr" > /dev/null
unzip -q "../../downloads/zips/Technology by Vamoss v2-UZtQLw_Rr"
popd > /dev/null
#
echo unzip 3 "innerCount overlap free v28-Vz7S8m4vY"
rm -rf "./innerCount overlap free v28-Vz7S8m4vY"
mkdir "./innerCount overlap free v28-Vz7S8m4vY"
pushd "./innerCount overlap free v28-Vz7S8m4vY" > /dev/null
unzip -q "../../downloads/zips/innerCount overlap free v28-Vz7S8m4vY"
popd > /dev/null
#
echo unzip 4 "claude bezier draw rainbow v4-gkCRgN3Ke"
rm -rf "./claude bezier draw rainbow v4-gkCRgN3Ke"
mkdir "./claude bezier draw rainbow v4-gkCRgN3Ke"
pushd "./claude bezier draw rainbow v4-gkCRgN3Ke" > /dev/null
unzip -q "../../downloads/zips/claude bezier draw rainbow v4-gkCRgN3Ke"
popd > /dev/null
#
echo unzip 5 "claude bezier draw dom v3-HLRNocFdW"
rm -rf "./claude bezier draw dom v3-HLRNocFdW"
mkdir "./claude bezier draw dom v3-HLRNocFdW"
pushd "./claude bezier draw dom v3-HLRNocFdW" > /dev/null
unzip -q "../../downloads/zips/claude bezier draw dom v3-HLRNocFdW"
popd > /dev/null
#
echo unzip 6 "claude bezier draw v2-fys4OYczY"
rm -rf "./claude bezier draw v2-fys4OYczY"
mkdir "./claude bezier draw v2-fys4OYczY"
pushd "./claude bezier draw v2-fys4OYczY" > /dev/null
unzip -q "../../downloads/zips/claude bezier draw v2-fys4OYczY"
popd > /dev/null
#
echo unzip 7 "claude bezier draw quadraticVertex-nywPqiEH8"
rm -rf "./claude bezier draw quadraticVertex-nywPqiEH8"
mkdir "./claude bezier draw quadraticVertex-nywPqiEH8"
pushd "./claude bezier draw quadraticVertex-nywPqiEH8" > /dev/null
unzip -q "../../downloads/zips/claude bezier draw quadraticVertex-nywPqiEH8"
popd > /dev/null
#
echo unzip 8 "bezier demo-AAanDlE3D"
rm -rf "./bezier demo-AAanDlE3D"
mkdir "./bezier demo-AAanDlE3D"
pushd "./bezier demo-AAanDlE3D" > /dev/null
unzip -q "../../downloads/zips/bezier demo-AAanDlE3D"
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