cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims05-Ambra copy-Xp0RDXLSwr"
rm -rf "./ims05-Ambra copy-Xp0RDXLSwr"
mkdir "./ims05-Ambra copy-Xp0RDXLSwr"
pushd "./ims05-Ambra copy-Xp0RDXLSwr" > /dev/null
unzip -q "../../downloads/zips/ims05-Ambra copy-Xp0RDXLSwr"
popd > /dev/null
#
echo unzip 2 "Final Project - imf5487 copy-4bX64WHer"
rm -rf "./Final Project - imf5487 copy-4bX64WHer"
mkdir "./Final Project - imf5487 copy-4bX64WHer"
pushd "./Final Project - imf5487 copy-4bX64WHer" > /dev/null
unzip -q "../../downloads/zips/Final Project - imf5487 copy-4bX64WHer"
popd > /dev/null
#
echo unzip 3 "p5moExamples photo booth 70-5VKqK34Ps"
rm -rf "./p5moExamples photo booth 70-5VKqK34Ps"
mkdir "./p5moExamples photo booth 70-5VKqK34Ps"
pushd "./p5moExamples photo booth 70-5VKqK34Ps" > /dev/null
unzip -q "../../downloads/zips/p5moExamples photo booth 70-5VKqK34Ps"
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