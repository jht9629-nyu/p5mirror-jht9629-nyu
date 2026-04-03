cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "video scan radial v8-2bjn_Nn9x"
rm -rf "./video scan radial v8-2bjn_Nn9x"
mkdir "./video scan radial v8-2bjn_Nn9x"
pushd "./video scan radial v8-2bjn_Nn9x" > /dev/null
unzip -q "../../downloads/zips/video scan radial v8-2bjn_Nn9x"
popd > /dev/null
#
echo unzip 2 "get_url_params v2-I9vT_uniR"
rm -rf "./get_url_params v2-I9vT_uniR"
mkdir "./get_url_params v2-I9vT_uniR"
pushd "./get_url_params v2-I9vT_uniR" > /dev/null
unzip -q "../../downloads/zips/get_url_params v2-I9vT_uniR"
popd > /dev/null
#
echo unzip 3 "MazeSpin liberation screens v7-wT957KlMz"
rm -rf "./MazeSpin liberation screens v7-wT957KlMz"
mkdir "./MazeSpin liberation screens v7-wT957KlMz"
pushd "./MazeSpin liberation screens v7-wT957KlMz" > /dev/null
unzip -q "../../downloads/zips/MazeSpin liberation screens v7-wT957KlMz"
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