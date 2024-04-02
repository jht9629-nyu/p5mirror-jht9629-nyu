cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "get_url_params demo-5fTCCJ_Sh"
rm -rf "./get_url_params demo-5fTCCJ_Sh"
mkdir "./get_url_params demo-5fTCCJ_Sh"
pushd "./get_url_params demo-5fTCCJ_Sh" > /dev/null
unzip -q "../../downloads/zips/get_url_params demo-5fTCCJ_Sh"
popd > /dev/null
#
echo unzip 2 "MazeSpin liberation screens v2-wT957KlMz"
rm -rf "./MazeSpin liberation screens v2-wT957KlMz"
mkdir "./MazeSpin liberation screens v2-wT957KlMz"
pushd "./MazeSpin liberation screens v2-wT957KlMz" > /dev/null
unzip -q "../../downloads/zips/MazeSpin liberation screens v2-wT957KlMz"
popd > /dev/null
#
echo unzip 3 "video scan radial v7-i6akdNRS2"
rm -rf "./video scan radial v7-i6akdNRS2"
mkdir "./video scan radial v7-i6akdNRS2"
pushd "./video scan radial v7-i6akdNRS2" > /dev/null
unzip -q "../../downloads/zips/video scan radial v7-i6akdNRS2"
popd > /dev/null
#
echo unzip 4 "ims04-jht scroll color rate-2pxhnehBV"
rm -rf "./ims04-jht scroll color rate-2pxhnehBV"
mkdir "./ims04-jht scroll color rate-2pxhnehBV"
pushd "./ims04-jht scroll color rate-2pxhnehBV" > /dev/null
unzip -q "../../downloads/zips/ims04-jht scroll color rate-2pxhnehBV"
popd > /dev/null
#
echo unzip 5 "ims04-jht scroll color bars-ZpoPuHXRo"
rm -rf "./ims04-jht scroll color bars-ZpoPuHXRo"
mkdir "./ims04-jht scroll color bars-ZpoPuHXRo"
pushd "./ims04-jht scroll color bars-ZpoPuHXRo" > /dev/null
unzip -q "../../downloads/zips/ims04-jht scroll color bars-ZpoPuHXRo"
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