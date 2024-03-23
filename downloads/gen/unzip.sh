cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
pwd
#
echo unzip 1 "mo-storage-dashboard 47-Osz28nOS9"
rm -rf "./mo-storage-dashboard 47-Osz28nOS9"
mkdir "./mo-storage-dashboard 47-Osz28nOS9"
pushd "./mo-storage-dashboard 47-Osz28nOS9" > /dev/null
unzip -q "../../downloads/zips/mo-storage-dashboard 47-Osz28nOS9"
popd > /dev/null
#
echo unzip 2 "p5moExamples video 366-KeRAIMzHN"
rm -rf "./p5moExamples video 366-KeRAIMzHN"
mkdir "./p5moExamples video 366-KeRAIMzHN"
pushd "./p5moExamples video 366-KeRAIMzHN" > /dev/null
unzip -q "../../downloads/zips/p5moExamples video 366-KeRAIMzHN"
popd > /dev/null
cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
echo