cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "Conditionals - Bouncing Ball with Gravity v11-_um4LG0SL"
rm -rf "./Conditionals - Bouncing Ball with Gravity v11-_um4LG0SL"
mkdir "./Conditionals - Bouncing Ball with Gravity v11-_um4LG0SL"
pushd "./Conditionals - Bouncing Ball with Gravity v11-_um4LG0SL" > /dev/null
unzip -q "../../downloads/zips/Conditionals - Bouncing Ball with Gravity v11-_um4LG0SL"
popd > /dev/null
#
echo unzip 2 "random student 2025 v2-vdo1kdgAn"
rm -rf "./random student 2025 v2-vdo1kdgAn"
mkdir "./random student 2025 v2-vdo1kdgAn"
pushd "./random student 2025 v2-vdo1kdgAn" > /dev/null
unzip -q "../../downloads/zips/random student 2025 v2-vdo1kdgAn"
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