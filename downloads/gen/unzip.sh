cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims-2026-w2 v0-vLFTabVbU"
rm -rf "./ims-2026-w2 v0-vLFTabVbU"
mkdir "./ims-2026-w2 v0-vLFTabVbU"
pushd "./ims-2026-w2 v0-vLFTabVbU" > /dev/null
unzip -q "../../downloads/zips/ims-2026-w2 v0-vLFTabVbU"
popd > /dev/null
#
echo unzip 2 "ims02-gabriel v0-XJKDhlmkj"
rm -rf "./ims02-gabriel v0-XJKDhlmkj"
mkdir "./ims02-gabriel v0-XJKDhlmkj"
pushd "./ims02-gabriel v0-XJKDhlmkj" > /dev/null
unzip -q "../../downloads/zips/ims02-gabriel v0-XJKDhlmkj"
popd > /dev/null
#
echo unzip 3 "ims02-Arial v0-PPWkffd8"
rm -rf "./ims02-Arial v0-PPWkffd8"
mkdir "./ims02-Arial v0-PPWkffd8"
pushd "./ims02-Arial v0-PPWkffd8" > /dev/null
unzip -q "../../downloads/zips/ims02-Arial v0-PPWkffd8"
popd > /dev/null
#
echo unzip 4 "ims02-Althea v0-ZPcc7Kigl"
rm -rf "./ims02-Althea v0-ZPcc7Kigl"
mkdir "./ims02-Althea v0-ZPcc7Kigl"
pushd "./ims02-Althea v0-ZPcc7Kigl" > /dev/null
unzip -q "../../downloads/zips/ims02-Althea v0-ZPcc7Kigl"
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