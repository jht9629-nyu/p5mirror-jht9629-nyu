cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "p5moExamples photo booth 68-5VKqK34Ps"
rm -rf "./p5moExamples photo booth 68-5VKqK34Ps"
mkdir "./p5moExamples photo booth 68-5VKqK34Ps"
pushd "./p5moExamples photo booth 68-5VKqK34Ps" > /dev/null
unzip -q "../../downloads/zips/p5moExamples photo booth 68-5VKqK34Ps"
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