cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ICM-Week10-HW copy-aV8UdcIVx"
rm -rf "./ICM-Week10-HW copy-aV8UdcIVx"
mkdir "./ICM-Week10-HW copy-aV8UdcIVx"
pushd "./ICM-Week10-HW copy-aV8UdcIVx" > /dev/null
unzip -q "../../downloads/zips/ICM-Week10-HW copy-aV8UdcIVx"
popd > /dev/null
#
echo unzip 2 "random student 2025-DB-crS54Z"
rm -rf "./random student 2025-DB-crS54Z"
mkdir "./random student 2025-DB-crS54Z"
pushd "./random student 2025-DB-crS54Z" > /dev/null
unzip -q "../../downloads/zips/random student 2025-DB-crS54Z"
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