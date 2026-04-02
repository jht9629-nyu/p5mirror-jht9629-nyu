cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "get_url_params v2-I9vT_uniR"
rm -rf "./get_url_params v2-I9vT_uniR"
mkdir "./get_url_params v2-I9vT_uniR"
pushd "./get_url_params v2-I9vT_uniR" > /dev/null
unzip -q "../../downloads/zips/get_url_params v2-I9vT_uniR"
popd > /dev/null
#
echo unzip 2 "localStorage v1-qz9-Y-Sc4"
rm -rf "./localStorage v1-qz9-Y-Sc4"
mkdir "./localStorage v1-qz9-Y-Sc4"
pushd "./localStorage v1-qz9-Y-Sc4" > /dev/null
unzip -q "../../downloads/zips/localStorage v1-qz9-Y-Sc4"
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