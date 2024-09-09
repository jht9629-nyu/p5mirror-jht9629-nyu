cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "week 03 expressions secs()-i2VZolhwz"
rm -rf "./week 03 expressions secs()-i2VZolhwz"
mkdir "./week 03 expressions secs()-i2VZolhwz"
pushd "./week 03 expressions secs()-i2VZolhwz" > /dev/null
unzip -q "../../downloads/zips/week 03 expressions secs()-i2VZolhwz"
popd > /dev/null
#
echo unzip 2 "06_rotation-POTnurvBB"
rm -rf "./06_rotation-POTnurvBB"
mkdir "./06_rotation-POTnurvBB"
pushd "./06_rotation-POTnurvBB" > /dev/null
unzip -q "../../downloads/zips/06_rotation-POTnurvBB"
popd > /dev/null
#
echo unzip 3 "05_multitouch-r1pNFuC1P"
rm -rf "./05_multitouch-r1pNFuC1P"
mkdir "./05_multitouch-r1pNFuC1P"
pushd "./05_multitouch-r1pNFuC1P" > /dev/null
unzip -q "../../downloads/zips/05_multitouch-r1pNFuC1P"
popd > /dev/null
#
echo unzip 4 "week 03 expressions millis-n4miyKkfv"
rm -rf "./week 03 expressions millis-n4miyKkfv"
mkdir "./week 03 expressions millis-n4miyKkfv"
pushd "./week 03 expressions millis-n4miyKkfv" > /dev/null
unzip -q "../../downloads/zips/week 03 expressions millis-n4miyKkfv"
popd > /dev/null
#
echo unzip 5 "jht week 01 ex 2 random-VWGjK5A9p"
rm -rf "./jht week 01 ex 2 random-VWGjK5A9p"
mkdir "./jht week 01 ex 2 random-VWGjK5A9p"
pushd "./jht week 01 ex 2 random-VWGjK5A9p" > /dev/null
unzip -q "../../downloads/zips/jht week 01 ex 2 random-VWGjK5A9p"
popd > /dev/null
#
echo unzip 6 "createCapture VIDEO flipped-Ddt4PnnER"
rm -rf "./createCapture VIDEO flipped-Ddt4PnnER"
mkdir "./createCapture VIDEO flipped-Ddt4PnnER"
pushd "./createCapture VIDEO flipped-Ddt4PnnER" > /dev/null
unzip -q "../../downloads/zips/createCapture VIDEO flipped-Ddt4PnnER"
popd > /dev/null
#
echo unzip 7 "jht week 01 ex 2-CXOBqb6oj"
rm -rf "./jht week 01 ex 2-CXOBqb6oj"
mkdir "./jht week 01 ex 2-CXOBqb6oj"
pushd "./jht week 01 ex 2-CXOBqb6oj" > /dev/null
unzip -q "../../downloads/zips/jht week 01 ex 2-CXOBqb6oj"
popd > /dev/null
#
echo unzip 8 "jht week 01 in class-oBBTcsqwh"
rm -rf "./jht week 01 in class-oBBTcsqwh"
mkdir "./jht week 01 in class-oBBTcsqwh"
pushd "./jht week 01 in class-oBBTcsqwh" > /dev/null
unzip -q "../../downloads/zips/jht week 01 in class-oBBTcsqwh"
popd > /dev/null
#
echo unzip 9 "chatgpt bouncing ball-8uQ3OCxZH"
rm -rf "./chatgpt bouncing ball-8uQ3OCxZH"
mkdir "./chatgpt bouncing ball-8uQ3OCxZH"
pushd "./chatgpt bouncing ball-8uQ3OCxZH" > /dev/null
unzip -q "../../downloads/zips/chatgpt bouncing ball-8uQ3OCxZH"
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