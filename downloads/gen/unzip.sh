cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "localStorage v1-qz9-Y-Sc4"
rm -rf "./localStorage v1-qz9-Y-Sc4"
mkdir "./localStorage v1-qz9-Y-Sc4"
pushd "./localStorage v1-qz9-Y-Sc4" > /dev/null
unzip -q "../../downloads/zips/localStorage v1-qz9-Y-Sc4"
popd > /dev/null
#
echo unzip 2 "get_url_params v2-I9vT_uniR"
rm -rf "./get_url_params v2-I9vT_uniR"
mkdir "./get_url_params v2-I9vT_uniR"
pushd "./get_url_params v2-I9vT_uniR" > /dev/null
unzip -q "../../downloads/zips/get_url_params v2-I9vT_uniR"
popd > /dev/null
#
echo unzip 3 "get_url_params demo-5fTCCJ_Sh"
rm -rf "./get_url_params demo-5fTCCJ_Sh"
mkdir "./get_url_params demo-5fTCCJ_Sh"
pushd "./get_url_params demo-5fTCCJ_Sh" > /dev/null
unzip -q "../../downloads/zips/get_url_params demo-5fTCCJ_Sh"
popd > /dev/null
#
echo unzip 4 "createVideo v1-Yxy-nTZ0P"
rm -rf "./createVideo v1-Yxy-nTZ0P"
mkdir "./createVideo v1-Yxy-nTZ0P"
pushd "./createVideo v1-Yxy-nTZ0P" > /dev/null
unzip -q "../../downloads/zips/createVideo v1-Yxy-nTZ0P"
popd > /dev/null
#
echo unzip 5 "createVideo v0-uAk60oX6b"
rm -rf "./createVideo v0-uAk60oX6b"
mkdir "./createVideo v0-uAk60oX6b"
pushd "./createVideo v0-uAk60oX6b" > /dev/null
unzip -q "../../downloads/zips/createVideo v0-uAk60oX6b"
popd > /dev/null
#
echo unzip 6 "Field rainstorm v0-EUYEkY-fV"
rm -rf "./Field rainstorm v0-EUYEkY-fV"
mkdir "./Field rainstorm v0-EUYEkY-fV"
pushd "./Field rainstorm v0-EUYEkY-fV" > /dev/null
unzip -q "../../downloads/zips/Field rainstorm v0-EUYEkY-fV"
popd > /dev/null
#
echo unzip 7 "Field rainstorm v1 responsive-kmsBYRROJ"
rm -rf "./Field rainstorm v1 responsive-kmsBYRROJ"
mkdir "./Field rainstorm v1 responsive-kmsBYRROJ"
pushd "./Field rainstorm v1 responsive-kmsBYRROJ" > /dev/null
unzip -q "../../downloads/zips/Field rainstorm v1 responsive-kmsBYRROJ"
popd > /dev/null
#
echo unzip 8 "video radial bounce v2-pouiEda3o"
rm -rf "./video radial bounce v2-pouiEda3o"
mkdir "./video radial bounce v2-pouiEda3o"
pushd "./video radial bounce v2-pouiEda3o" > /dev/null
unzip -q "../../downloads/zips/video radial bounce v2-pouiEda3o"
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