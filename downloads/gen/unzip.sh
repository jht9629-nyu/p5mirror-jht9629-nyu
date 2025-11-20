cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "pixel reveal oval v21-6DRHLF0ZJ"
rm -rf "./pixel reveal oval v21-6DRHLF0ZJ"
mkdir "./pixel reveal oval v21-6DRHLF0ZJ"
pushd "./pixel reveal oval v21-6DRHLF0ZJ" > /dev/null
unzip -q "../../downloads/zips/pixel reveal oval v21-6DRHLF0ZJ"
popd > /dev/null
#
echo unzip 2 "Unruly pixel reveal v20-D0fROhx4T"
rm -rf "./Unruly pixel reveal v20-D0fROhx4T"
mkdir "./Unruly pixel reveal v20-D0fROhx4T"
pushd "./Unruly pixel reveal v20-D0fROhx4T" > /dev/null
unzip -q "../../downloads/zips/Unruly pixel reveal v20-D0fROhx4T"
popd > /dev/null
#
echo unzip 3 "polar heart v1-JZ3TXy0tu"
rm -rf "./polar heart v1-JZ3TXy0tu"
mkdir "./polar heart v1-JZ3TXy0tu"
pushd "./polar heart v1-JZ3TXy0tu" > /dev/null
unzip -q "../../downloads/zips/polar heart v1-JZ3TXy0tu"
popd > /dev/null
#
echo unzip 4 "polar heart v0-phdkJtq2y"
rm -rf "./polar heart v0-phdkJtq2y"
mkdir "./polar heart v0-phdkJtq2y"
pushd "./polar heart v0-phdkJtq2y" > /dev/null
unzip -q "../../downloads/zips/polar heart v0-phdkJtq2y"
popd > /dev/null
#
echo unzip 5 "polar ellipse-89QM7p9Gb"
rm -rf "./polar ellipse-89QM7p9Gb"
mkdir "./polar ellipse-89QM7p9Gb"
pushd "./polar ellipse-89QM7p9Gb" > /dev/null
unzip -q "../../downloads/zips/polar ellipse-89QM7p9Gb"
popd > /dev/null
#
echo unzip 6 "pointInEllipse-bUW-v4yCt"
rm -rf "./pointInEllipse-bUW-v4yCt"
mkdir "./pointInEllipse-bUW-v4yCt"
pushd "./pointInEllipse-bUW-v4yCt" > /dev/null
unzip -q "../../downloads/zips/pointInEllipse-bUW-v4yCt"
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