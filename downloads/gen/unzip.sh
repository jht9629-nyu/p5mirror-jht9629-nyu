cd "/Users/jht2/Documents/projects/_2026/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "matt-parker-oct-16 v3-8DQnfxeLs"
rm -rf "./matt-parker-oct-16 v3-8DQnfxeLs"
mkdir "./matt-parker-oct-16 v3-8DQnfxeLs"
pushd "./matt-parker-oct-16 v3-8DQnfxeLs" > /dev/null
unzip -q "../../downloads/zips/matt-parker-oct-16 v3-8DQnfxeLs"
popd > /dev/null
#
echo unzip 2 "matt-parker-oct-16 v2-7rR7pHX_l"
rm -rf "./matt-parker-oct-16 v2-7rR7pHX_l"
mkdir "./matt-parker-oct-16 v2-7rR7pHX_l"
pushd "./matt-parker-oct-16 v2-7rR7pHX_l" > /dev/null
unzip -q "../../downloads/zips/matt-parker-oct-16 v2-7rR7pHX_l"
popd > /dev/null
#
echo unzip 3 "matt-parker-nov15 v2-EE84Ci6hM"
rm -rf "./matt-parker-nov15 v2-EE84Ci6hM"
mkdir "./matt-parker-nov15 v2-EE84Ci6hM"
pushd "./matt-parker-nov15 v2-EE84Ci6hM" > /dev/null
unzip -q "../../downloads/zips/matt-parker-nov15 v2-EE84Ci6hM"
popd > /dev/null
#
echo unzip 4 "matt-parker-oct-16-RoplKxfBB"
rm -rf "./matt-parker-oct-16-RoplKxfBB"
mkdir "./matt-parker-oct-16-RoplKxfBB"
pushd "./matt-parker-oct-16-RoplKxfBB" > /dev/null
unzip -q "../../downloads/zips/matt-parker-oct-16-RoplKxfBB"
popd > /dev/null
#
echo unzip 5 "matt-parker-nov15-jr1ok4EaN"
rm -rf "./matt-parker-nov15-jr1ok4EaN"
mkdir "./matt-parker-nov15-jr1ok4EaN"
pushd "./matt-parker-nov15-jr1ok4EaN" > /dev/null
unzip -q "../../downloads/zips/matt-parker-nov15-jr1ok4EaN"
popd > /dev/null
#
echo unzip 6 "baredom custom-elements v1-z4DzWsVot"
rm -rf "./baredom custom-elements v1-z4DzWsVot"
mkdir "./baredom custom-elements v1-z4DzWsVot"
pushd "./baredom custom-elements v1-z4DzWsVot" > /dev/null
unzip -q "../../downloads/zips/baredom custom-elements v1-z4DzWsVot"
popd > /dev/null
#
echo unzip 7 "BareDOM Binder v1-H5u5fc4HI"
rm -rf "./BareDOM Binder v1-H5u5fc4HI"
mkdir "./BareDOM Binder v1-H5u5fc4HI"
pushd "./BareDOM Binder v1-H5u5fc4HI" > /dev/null
unzip -q "../../downloads/zips/BareDOM Binder v1-H5u5fc4HI"
popd > /dev/null
#
echo unzip 8 "test drive DOM.js v11 inputs copy-4Uf3CBcAD"
rm -rf "./test drive DOM.js v11 inputs copy-4Uf3CBcAD"
mkdir "./test drive DOM.js v11 inputs copy-4Uf3CBcAD"
pushd "./test drive DOM.js v11 inputs copy-4Uf3CBcAD" > /dev/null
unzip -q "../../downloads/zips/test drive DOM.js v11 inputs copy-4Uf3CBcAD"
popd > /dev/null
#
echo unzip 9 "ims07_ksc kayla-u85KyE3l6"
rm -rf "./ims07_ksc kayla-u85KyE3l6"
mkdir "./ims07_ksc kayla-u85KyE3l6"
pushd "./ims07_ksc kayla-u85KyE3l6" > /dev/null
unzip -q "../../downloads/zips/ims07_ksc kayla-u85KyE3l6"
popd > /dev/null
#
echo unzip 10 "kylie_final-UDsjInX5Z"
rm -rf "./kylie_final-UDsjInX5Z"
mkdir "./kylie_final-UDsjInX5Z"
pushd "./kylie_final-UDsjInX5Z" > /dev/null
unzip -q "../../downloads/zips/kylie_final-UDsjInX5Z"
popd > /dev/null
#
echo unzip 11 "face doodle v3 yifan-hLfNIM9Av"
rm -rf "./face doodle v3 yifan-hLfNIM9Av"
mkdir "./face doodle v3 yifan-hLfNIM9Av"
pushd "./face doodle v3 yifan-hLfNIM9Av" > /dev/null
unzip -q "../../downloads/zips/face doodle v3 yifan-hLfNIM9Av"
popd > /dev/null
#
echo unzip 12 "Althea-genie copy-PL6eK4yHS"
rm -rf "./Althea-genie copy-PL6eK4yHS"
mkdir "./Althea-genie copy-PL6eK4yHS"
pushd "./Althea-genie copy-PL6eK4yHS" > /dev/null
unzip -q "../../downloads/zips/Althea-genie copy-PL6eK4yHS"
popd > /dev/null
#
echo unzip 13 "Metal straw-yr5vFpXlt"
rm -rf "./Metal straw-yr5vFpXlt"
mkdir "./Metal straw-yr5vFpXlt"
pushd "./Metal straw-yr5vFpXlt" > /dev/null
unzip -q "../../downloads/zips/Metal straw-yr5vFpXlt"
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